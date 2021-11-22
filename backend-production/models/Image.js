const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const imageSchema = new Schema({
        user: {type: Schema.ObjectId,ref:'User',required:true},
        nombre: {type: String, required: true},
        descripcion: {type: String, default: ''},
        imagen: {type:String},
        imgId:{type:String},
        likes: {type: Number, default: 0},
        createdAt: {type: Date, default: Date.now, required:true},
        views: {type: Number, default: 0},
        comentarios: {type: Number, default: 0},
});

module.exports = mongoose.model('Image', imageSchema);