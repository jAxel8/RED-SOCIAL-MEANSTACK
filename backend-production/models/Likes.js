const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const likeSchema = new Schema({
    userId: {type: Schema.ObjectId,ref:'User',required:true},
    imagenId: {type: Schema.ObjectId,ref:'Image',required:true}
});

module.exports = mongoose.model('Likes', likeSchema);