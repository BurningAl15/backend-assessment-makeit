const { Schema, model } = require('mongoose');

const FavSchema = Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: '',
        trim: true,
        maxLength: 255,
    },
    link: {
        type: String,
        required: true,
    },
    items: {
        type: Array,
        "default": []
    }
})

module.exports = model('Fav', FavSchema);