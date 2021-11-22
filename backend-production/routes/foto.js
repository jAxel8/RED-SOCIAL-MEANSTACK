var express = require('express')
var api = express.Router();
var auth = require('../middleware/authenticate');
var fotoController = require('../controllers/fotoController');


api.post('/subir_foto',fotoController.subir_foto);
api.get('/obtener_fotos_user',auth.auth,fotoController.obtener_fotos_user);
api.get('/show_foto/:id',auth.auth,fotoController.show_foto);
api.delete('/eliminar_foto/:id',auth.auth,fotoController.eliminar_foto);
api.get('/get_fotos',auth.auth,fotoController.get_fotos);
api.get('/buscar_fotos/:termino',auth.auth,fotoController.buscar_fotos);

//LIKES

api.post('/like_imagen',auth.auth,fotoController.like_imagen);
api.get('/get_likes/:id',auth.auth,fotoController.get_likes)

api.get('/get_fotos_user/:id',auth.auth,fotoController.get_fotos_user)


module.exports = api ;