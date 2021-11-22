'use-strict'
const Album = require('../models/Album');


const crear_album = async function(req,res)
{
   if(req.user)
   {
        let data = req.body;

        data.user_id = req.user.sub
        let reg = await Album.create(data);

        if(reg)
        {
            res.status(200).send({data:reg});


        }else
        {
            console.log("error");
        }
   }else{
    res.status(500).send({message:'NoACCESS'})
   }


}


const obtener_albumes = async function(req,res)
{
        if(req.user)
        {
            var id = req.user.sub;
            let reg = await Album.find({user_id:id}).sort({created_At:-1});
            
            res.status(200).send({data:reg});
        }else{
            res.status(500).send({message:"NO-ACCESS"})
        }
    

}

const eliminar_album = async function(req,res)
{
    if(req.user)
    {

        const {id} = req.params;

        const albumId = await Album.findById(id);
         
        if(albumId.user_id == req.user.sub){
            
            try {
                let reg = await Album.findByIdAndDelete(id);
               

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


const prueba_get = async function(req,res)
{
    res.status(200).send({message:"asdadasd"})
    console.log("aasdsadsa");
}





















module.exports = {

crear_album,
obtener_albumes,
prueba_get,
eliminar_album


}