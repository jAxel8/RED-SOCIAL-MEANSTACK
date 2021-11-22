const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const comentarioSchema = new Schema({
    imagen_id: {type: Schema.ObjectId,ref:'Image',required:true},
    user_id: {type: Schema.ObjectId,ref:'User',required:true},
    comentario: {type:String, required:true},
    createdAt: {type: Date, default: Date.now},

});

comentarioSchema.virtual('imagen')
.set(function(imagen) {
    this._imagen = imagen;
}).get(function(){
    return this._imagen;
});

module.exports = mongoose.model('Comentario', comentarioSchema);