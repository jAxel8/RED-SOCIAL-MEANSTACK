const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const albumSchema = new Schema({
    nombre: {required: true, type: String},
    description: {required: true, type: String},
    user_id:{type: Schema.ObjectId,ref:'User'},
    created_At:{type: Date, default: Date.now, require :true}
});

module.exports = mongoose.model('Album', albumSchema);