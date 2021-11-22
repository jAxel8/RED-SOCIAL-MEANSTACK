'use-strict'
const cors = require('cors')
var express = require('express');
var app=express();
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var port = process.env.PORT || 4000;
var fileUpload = require('express-fileupload')
var server  = require('http').createServer(app);
var io = require('socket.io')(server,{
    cors: { origin: '*'}
});


io.on('connection',function(socket)
{
    socket.on('like-image',function(data){
        io.emit('get-data',data);

    });

    socket.on('comment-image',function(data){
        io.emit('get-comments',data);
    })

    socket.on('new-image',function(data){
        io.emit('get-images',data);
    })

})




app.use(cors());
app.use(fileUpload({
    useTempFiles: true
}))
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json({limit:'50mb',extended:true}));

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*'); 
    res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods','GET, PUT, POST, DELETE, OPTIONS');
    res.header('Allow','GET, PUT, POST, DELETE, OPTIONS');
    next();
});





mongoose.connect("mongodb+srv://admin:axel123@cluster0.9y7fg.mongodb.net/SocialNetwork?retryWrites=true&w=majority",{useUnifiedTopology:true,useNewUrlParser:true},(err,res) =>{
    if(err){
        console.log(err);
    }else{
        
        server.listen(port,function(){
            console.log('Servidor corriendo en el puerto ' + port);
        });
      
    }
});
   


//Rutas
var user_route = require('./routes/user');
var album_route = require('./routes/album');
var foto_route = require('./routes/foto');
var comentario_route = require('./routes/comment');
var follow_route = require('./routes/follow');

app.use('/api',user_route);
app.use('/api',album_route);
app.use('/api',foto_route)
app.use('/api',comentario_route);
app.use('/api',follow_route);
module.exports = app;