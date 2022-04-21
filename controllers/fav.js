const { response, request } = require('express');

const Fav = require('../models/fav');
const User = require('../models/user');

const addElementToList = async (req = request, res = response) => {

}

const favsGetAll = async (req = request, res = response) => {
    const { limit = 5, from = 0 } = req.query;
    const query = {};

    const userId = req.user._id;

    const [total, user] = await Promise.all([
        Fav.countDocuments(),
        User.findById(userId)
            .skip(Number(from))
            .limit(Number(limit))
            .populate('favs')
    ]);

    const favs = user.favs;

    res.json({
        total,
        favs
    });
}

const favGet = async (req = request, res = response) => {
    const { id } = req.params;

    // req.user.favs
    //si el id está en los favs del user, entonces muestra, sino tira error
    const fav = await Fav.findById(id);
    // .populate('user', 'email');
    res.json(fav);
}

const favsPost = async (req, res = response) => {
    const { title, description, link, items } = req.body;

    const data = {
        title,
        description,
        link,
        items,
        user: req.user._id
    }
    const fav = new Fav(data);
    // Save on DB
    await fav.save();
    res.json({
        fav
    });
}


const favsDelete = async (req, res = response) => {
    const { id } = req.params;
    const fav = await Fav.findOneAndDelete(id);

    res.json(fav);
}
module.exports = {
    favGet,
    favsGetAll,
    favsPost,
    favsDelete,
}