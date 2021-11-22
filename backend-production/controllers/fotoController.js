'use-strict'
var Foto = require('../models/Image');
var User = require('../models/User')
var cloudinary = require('../middleware/cloudinary')
var Like = require('../models/Likes');


const subir_foto = async function(req,res,next)
{   

        const result = await cloudinary.uploader.upload(req.files.imagen.tempFilePath);

    var data = req.body;

        try {


            const newFoto = new Foto({
                user: data.user,
                nombre: data.nombre,
                descripcion: data.descripcion,
                imagen:result.url,
                imgId:result.public_id
            })
    
            reg = await newFoto.save();
            res.status(200).send({data:reg});
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    



   


}


const obtener_fotos_user = async function(req,res)
{
    if(req.user)
    {
        var _id = req.user.sub

        reg = await Foto.find({user:_id}).sort({createdAt:-1}).populate('user');

        likefotouserid(req.user.sub).then((value)=>{

            return res.status(200).send({
                data:reg,
                user_likes: value.likeit
            })

        })


    }else{
        res.status(500).send({message:'NO-ACCESS'})
    }
}

const show_foto = async function(req,res)
{
    if(req.user)
    {
        try {
        var id = req.params['id'];
        var foto = await Foto.findById({_id:id}).populate('user');

        foto.views +=1;
        foto.save();

        res.status(200).send({data:foto});
        } catch (error) {
            res.status(200).send({data:undefined});

        }
    
    }else
    {
        res.status(500).send({message:"NO-ACCESS"})
    }
}

const eliminar_foto = async function(req,res)
{

    if(req.user)
    {

        const {id} = req.params;

        const userImg = await Foto.findById(id);
         
        if(userImg.user == req.user.sub){
            
            try {
                let reg = await Foto.findByIdAndDelete(id);
                await cloudinary.uploader.destroy(reg.imgId);

                res.status(200).send({data:reg});
            } catch (error) {
                
                res.status(500).send({error});
            } 
        }


    }else
    {
        res.status(500).send({message:'NO-ACCESS'})
    }


}


const like_imagen = async function(req,res)
{
    const {id} = req.body;
    
    var imglike = await Like.findOne({userId:req.user.sub,imagenId:id});

    if(imglike){
        
        let dislike = await Like.deleteOne({userId:req.user.sub,imagenId:id});
        var imagedislike = await Foto.findById(id).populate('user');
        imagedislike.likes -=1;
        imagedislike.save();

        res.status(200).send({data:imagedislike,dislike:dislike})



    }else{
        
        newLike = new Like({
            userId:req.user.sub,
            imagenId:id
        })

        var image = await Foto.findById(id).populate('user');
        if(image){
        image.likes +=1;
        image.save();
        let reg = await newLike.save();
        
        res.status(200).send({data:image,like:reg});

        }   
    }
}

const get_likes = async function(req,res){
    try {
        const imgid = req.params['id'];

        const like = await Like.find({userId:req.user.sub,imagenId:imgid})
        
        res.status(200).send({data:like});
    } catch (error) {
        
    }


}


const get_fotos = async function(req,res){
    if(req.user){
        try {


                let reg = await Foto.find().sort({likes:-1}).populate('user');
                let nuevas = await Foto.find().sort({createdAt:-1}).limit(5);

                let random = await Foto.find().sort({createdAt:-1}).populate('user');
                
                likefotouserid(req.user.sub).then((value)=>{

                    return res.status(200).send({
                        data:random,
                        user_likes: value.likeit
                    })

                })

                
        } catch (error) {
            console.log(error);
        }

    }else{
        res.status(500).send({message:'NO-ACCESS'})
    }
} 

const get_fotos_user = async function(req,res){

    if(req.user){

        try {

            let reg = await Foto.find({user:req.params.id}).populate('user');

            likefotouserid(req.user.sub).then((value)=>{

                return res.status(200).send({
                    data:reg,
                    user_likes: value.likeit
                })

            })


        } catch (error) {
            console.log(error);
        }




    }else{
        res.status(500).send({message:'NO-ACCESS'})
    }
 
}

const buscar_fotos = async function(req,res){
    termino = req.params.termino

    const imagenes = await Foto.find({nombre: {$regex: termino, $options: "$i"}}).populate('user');
    likefotouserid(req.user.sub).then((value)=>{

        return res.status(200).send({
            data:imagenes,
            user_likes: value.likeit
        })

    })
    
}




const likefotouserid = async function(user_id){

    var likeit = await Like.find({userId:user_id}).select({ _id: 0, __v: 0, userId: 0 })
        .exec()
        .then((likes)=>{

            var likes_array = [];
            likes.forEach((liked)=>{
                likes_array.push(liked.imagenId);
            })

            
            return likes_array;
        })


        return{
            likeit: likeit
            
        }
}


module.exports = {
    subir_foto,
    obtener_fotos_user,
    show_foto,
    eliminar_foto,
    like_imagen,
    get_likes,
    get_fotos,
    get_fotos_user,
    buscar_fotos,

}