var Comentario = require('../models/Comment');
var Foto = require('../models/Image');

const postComment = async function(req,res)
{
    if(req.user)
    {
        try {
                let data = req.body;
                data.user_id = req.user.sub
                let reg = await Comentario.create(data);
                let fotoid = reg.imagen_id;
                let foto = await Foto.findById({_id:fotoid})
                foto.comentarios += 1;
                let reg2 = await foto.save();

                res.status(200).send({data:reg});



        } catch (error) {
            res.status(500).send({message:'ERROR'});
        }



    }else{
        res.status(500).send({message:'NO-ACCESS'});
    }
} 


const delete_comment = async function(req,res){
    if(req.user){

        try {
            var id = req.params['id'];
            let reg = await Comentario.findByIdAndDelete({_id:id})

            fotoid = reg.imagen_id
            let foto = await Foto.findById({_id:fotoid})
            foto.comentarios -= 1;
            await foto.save();

            res.status(200).send({data:reg});

        } catch (error) {
            
        }


    }
}


const get_comentarios = async function(req,res)
{
    if(req.user) 
    {
        try{

                var id = req.params['id'];

                let reg = await Comentario.find({imagen_id:id}).populate('user_id').sort({createdAt:-1})

                res.status(200).send({data:reg});
        }catch (error){
            res.status(200).send({data:undefined});
        }
    }
}


module.exports = {
    postComment,
    get_comentarios,
    delete_comment
}