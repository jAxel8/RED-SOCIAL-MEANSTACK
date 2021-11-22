'use-strict'
var User = require('../models/User')
var bcrypt = require('bcrypt')
var jwt = require ('../helpers/jwt');
var cloudinary = require('../middleware/cloudinary')



const subir_imagen = async function (req, res, next) {
    if (req.files) {
        cloudinary.uploader.upload_large(req.files.profileImage.tempFilePath, { resource_type: 'image' }, async (err, result) => {
            req.body.secure_url = result.secure_url;
            return next()
        })
    } else {

        return next()
    }
}

const registrar_usuario = async function(req,res)
{
    
    const userdata = req.body
    try {
        const user = await User.findOne({username:userdata.username}).collation({ locale: 'en', strength: 1 }).exec()
        if (user){
                res.status(409).json({ message: 'El usuario o correo ya estan ocupados.' })
            }
            
            
        else {
            const hashedpw = await bcrypt.hash(userdata.password, 11)
            const newuser = new User({
                name: userdata.name,
                surname: userdata.surname,
                username: userdata.username,
                password: hashedpw,
                joinDate: new Date().toISOString(),
                email: userdata.email,
                profileImg: userdata.secure_url

            })
            await newuser.save()
            res.status(201).json({ message: 'El usuario ha sido registrado.' })
        }
    } catch (error) {
        res.status(500).send({ error: error.message })

    }
}


const obtener_usuario = async function(req,res)
{
    try {

        var user = await User.findById(req.params.id)
        
        if(user){
            user.password = undefined;
            res.status(200).send({data:user});
        }else{
            res.status(404).send({message:'Usuario no encontrado.'})
        }


        
    } catch (error) {
        res.status(500).send({ error: error.meesage })
    }
}


const actualizar_usuario = async function(req,res)
{
    try {
        let userid = req.params['id'];
        let data = req.body;
        const username = await User.findOne({_id:userid}).collation( { locale: 'en', strength: 1 } ).exec()
       
        const user = await User.findOne({ username: data.username }).collation( { locale: 'en', strength: 1 } ).exec()
        
        if(user)
        {
            if(username.username == user.username){
                if(req.files){
                    const result = await cloudinary.uploader.upload(req.files.imagenperfil.tempFilePath);
                    
                        let reg = await User.findByIdAndUpdate({_id:userid},{
                            name:data.name,
                            surname:data.surname,
                            username:data.username,
                            profileImg:result.url,
                            email:data.email
                        })
                        res.status(200).send({data:reg});
        
        
        
                }else{
                    let reg = await User.findByIdAndUpdate({_id:userid},{
                        name:data.name,
                        surname:data.surname,
                        username:data.username,
                        email:data.email
                    })
                    res.status(200).send({data:reg});
                }
            }else{
                {res.status(409).json({ message: 'El usuario o correo ya estan ocupados.' })
            }
         }
        }else{
            if(req.files){
                const result = await cloudinary.uploader.upload(req.files.imagenperfil.tempFilePath);
                
                    let reg = await User.findByIdAndUpdate({_id:userid},{
                        name:data.name,
                        surname:data.surname,
                        username:data.username,
                        profileImg:result.url,
                        email:data.email
                    })
                    res.status(200).send({data:reg});
    
    
    
            }else{
                let reg = await User.findByIdAndUpdate({_id:userid},{
                    name:data.name,
                    surname:data.surname,
                    username:data.username,
                    email:data.email
                })
                res.status(200).send({data:reg});
            }
        }
        



    } catch (error) {
        console.log(error.message)
        res.status(500).send({ error: error.message })
    }
}

const user_login = async function(req,res)
{   
    data = req.body;

    try {
        var user = await User.findOne({username: req.body.username }).collation( { locale: 'en', strength: 1 })
        if (user) {
            bcrypt.compare(data.password,user.password,async function(error,check){
                if(check)
                {
                    res.status(200).send({data:user,token: jwt.createToken(user)});
                }else{
                    res.status(401).send({ message: 'Datos incorrectos' })
                }
            })



        }
        else
            {res.status(401).send({ message: 'El usuario no existe' })}

    } catch (error) {
        console.log(error)
        res.status(500).send({ error: error.meesage })

    }
}


const obtener_usuarios = async function(req,res)
{
    try {

        var users = await User.find({ username: { $not: { $regex: req.user.username } } })
        res.status(200).send({ data: users })

    } catch (error) {
        res.status(500).send({ error: error.meesage })

    }
}



const buscar_usuarios = async function(req,res){

    termino = req.params.termino

    let users = [];

    let users1 = await User.find({name:{$regex: termino, $options: "$i"}}).collation( { locale: 'en', strength: 1 } )
    let users2 = await User.find({surname:{$regex: termino, $options: "$i"}}).collation( { locale: 'en', strength: 1 } )

    users1.push(...users2);

    users1.map(x => {
        let user = {
            _id: x._id,
            name: x.name,
            surname: x.surname,
            profileImg: x.profileImg
        }
        users.push(user);
    });

    

    return res.json(users);


}


module.exports = 
{
    subir_imagen,
    registrar_usuario,
    obtener_usuario,
    actualizar_usuario,
    user_login,
    obtener_usuarios,
    buscar_usuarios
   
    
}