var express = require('express')
var api = express.Router();
var userController = require('../controllers/user')
var auth = require('../middleware/authenticate');

api.post('/registrar_usuario',userController.subir_imagen,userController.registrar_usuario);

api.post('/user_login',userController.user_login);

api.get('/obtener_usuario/:id',auth.auth,userController.obtener_usuario);

api.get('/buscar_usuarios/:termino',auth.auth,userController.buscar_usuarios);

api.put('/actualizar_usuario/:id',userController.actualizar_usuario);




module.exports = api;