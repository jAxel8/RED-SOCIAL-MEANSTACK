const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    profileImg: { type: String, default: 'assets/img/default-user.jpeg' },
    joinDate: { type: Date, default: new Date().toISOString() },
    email: { type: String },
    seguidores: {default: 0, type: Number}


})


module.exports = mongoose.model('User', userSchema)