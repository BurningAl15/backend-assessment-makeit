const { Schema, model } = require('mongoose');
//Referencia a la lista de favoritos

const UserSchema = Schema({
    email: {
        type: String,
        required: [true, 'Email field is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password field is required'],
    },
    //campo referencia a los favs
    favs: [{
        type: Schema.Types.ObjectId,
        ref: 'Fav',
        required: true
    }],
});

UserSchema.methods.toJSON = function () {
    const { __v, password, _id, ...user } = this.toObject();
    user.uid = _id;
    return user;
}

module.exports = model('User', UserSchema);
