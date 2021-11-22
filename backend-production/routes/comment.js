var express = require('express')
var api = express.Router();
var auth = require('../middleware/authenticate');
var commentController = require('../controllers/commentController');



api.post('/agregar_comentario',auth.auth,commentController.postComment);


api.get('/get_comentarios/:id',auth.auth,commentController.get_comentarios)

api.delete('/delete_comment/:id',auth.auth,commentController.delete_comment);



module.exports = api;