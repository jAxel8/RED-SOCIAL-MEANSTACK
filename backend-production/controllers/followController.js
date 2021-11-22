var User = require('../models/User');
var Follow = require('../models/Follow');



const seguir_usuario = async function(req,res)
{
    const{id} = req.body;

    var follow = await Follow.findOne({user:req.user.sub,followed:id});
    if(follow){
        let unfollow = await Follow.deleteOne({user:req.user.sub,followed:id});
        
        console.log(unfollow);
        
        res.status(200).send({unfollow:unfollow});

    }else{

        newFollow = new Follow({
            user:req.user.sub,
            followed:id
        })

        let reg = await newFollow.save();

        res.status(200).send({data:reg});

    }

}


const get_follows_user = async function(req,res)
{
    const id = req.params['id'];
    let reg = await Follow.find({followed:id}).populate('user');
    
    res.status(200).send({follows:reg});
}

const get_siguiendo = async function(req,res){

    let reg = await Follow.find({user:req.params.id}).populate('followed');

    res.status(200).send({following:reg});
}


module.exports = {
    seguir_usuario,
    get_follows_user,
    get_siguiendo
}