const { response, request } = require('express');

const Fav = require('../models/fav');

const addElementToList = async (req = request, res = response) => {

}

const favsGetAll = async (req = request, res = response) => {
    const { limit = 5, from = 0 } = req.query;
    const query = {};

    const [total, favs] = await Promise.all([
        Fav.countDocuments(query),
        Fav.find(query)
            .skip(Number(from))
            .limit(Number(limit))
            .populate('user', 'email')
    ]);

    res.json({
        total,
        favs
    });
}

const favGet = async (req = request, res = response) => {
    const { id } = req.params;
    const fav = await Fav.findById(id)
        .populate('user', 'email');
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