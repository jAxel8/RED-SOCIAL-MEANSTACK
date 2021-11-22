var express = require('express')
var api = express.Router();
var auth = require('../middleware/authenticate');
var followController = require('../controllers/followController');



api.post('/seguir_usuario',auth.auth,followController.seguir_usuario);

api.get('/obtener_seguidores/:id',auth.auth,followController.get_follows_user);

api.get('/obtener_siguiendo/:id',auth.auth,followController.get_siguiendo);

module.exports = api;