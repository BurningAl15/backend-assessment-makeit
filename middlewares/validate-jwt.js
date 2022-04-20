const { request, response } = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const isAuthenticated = async (req = request, res = response, next) => {
    const token = req.header('x-token');
    if (!token) {
        return res.status(401).json({
            msg: 'No hay token en la petición'
        })
    }

    try {
        const { uid } = jwt.verify(token, process.env.SECRETORPUBLICKEY);

        //Read user model that corresponds to the uid
        const user = await User.findById(uid);

        //User is deleted in DB
        if (!user) {
            return res.status(401).json({
                msg: 'Token no válido - user doesnt exist in DB'
            })
        }

        req.user = user;
        next();
    } catch (err) {
        console.log(err);
        res.status(401).json({
            msg: 'Token no válido'
        });
    }
}

module.exports = {
    isAuthenticated
}