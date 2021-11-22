var express = require('express')
var api = express.Router();
var albumController = require('../controllers/albumController')
var auth = require('../middleware/authenticate');

api.post('/crear_album',auth.auth, albumController.crear_album);


api.get('/obtener_albumes/:filtro?',auth.auth,albumController.obtener_albumes);

api.delete('/eliminar_album/:id',auth.auth,albumController.eliminar_album);

module.exports = api;