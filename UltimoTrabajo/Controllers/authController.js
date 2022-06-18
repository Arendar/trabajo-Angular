const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')
const conexion = require('../database/db')
const {promisify} = require('util')

exports.register = async(req, res)=>{
    try{
        const name = req.body.name
        const user = req.body.user
        const pass = req.body.pass
        let passHash= await bcryptjs.hash(pass, 8)

        conexion.query('INSERT INTO usuarios SET ?', {user:user, name:name, pass:pass}, (error,results)=>{
            if(error){console.log(error)}
            res.redirect('/')
    })
    }catch(error){
        console.log(error)
    }
}

exports.login = async(req, res)=>{
    try{
        const user = req.body.user
        const pass = req.body.pass
    
        if(!user||!pass){
            res.render('login',{
                alert:true,
                alertTitle:"advertencia",
                alertMessage:"Ingrese un usuario y contraseña",
                alertIcon:"info",
                showConfirmButton:true,
                timer:false,
                ruta:'login'
            })
        }else{
            conexion.query('SELECT * FROM usuarios Where user = ?', [user], async (error,results)=>{
                if(results.length == 0 || !(await bcryptjs.compare(pass,results[0].pass))){
                    res.render('login',{
                        alert:true,
                        alertTitle:"advertencia",
                        alertMessage:"Ingrese un usuario y contraseña",
                        alertIcon:"info",
                        showConfirmButton:true,
                        timer:false,
                        ruta:'login'
                    })
                }else{
                    const id=results[0].id
                    const token = jwt.sign({id:id},process.env.JWT_SECRETO,{
                        expiresIn:process.env.JWT_TIEMPO_EXPIRA
                    })
                    console.log("TOKEN: "+token+ "para el USUARIO: "+user)
                    const cookiesOptions ={
                        expires:new Date(Date.now()+process.env.JWT_COOKIE_EXPIRES *24*60*60*1000),
                        httpOnly:true
                    }
                    res.cookie('jwt',token,cookiesOptions)
                    res.render('login',{
                        alert:true,
                        alertTitle:"Conexion exitosa",
                        alertMessage:"¡Login Correcto",
                        alertIcon:"success",
                        showConfirmButton:false,
                        timer:800,
                        ruta:''
                    })
                        
                    
                }
            })
        }
    }catch(error){
console.log(error)
    }
}
exports.isAuthentiated = async(req,res,next)=>{
    if(req.cookies.jwt){
        try{
            const decodificada = await promisify(jwt.verify)(req.cookies.jwt,process.env.JWT_SECRETO)
            conexion.query('SELECT *FROM usuarios WHERE id = ?',[decodificada.id],(error,results)=>{
                if(!results){return next()}
                req.user=results[0]
                return next()
            })
        }catch(error){
            console.log(error)
            return next()
        }
    }else{
        res.redirect('/login')
    }
}

exports.logout=(res)=>{
    res.clearCookie('jwt')
    return res.redirect('/')
}

exports.getNumeroCategorias = async(req,res)=>{
    try{
        conexion.query("SELECT COUNT(*) FROM categorias", (err, results)=>{
            if (err) throw err;
            res.body.categorias = results;
        }) 
    }catch( error){
        console.log(error);
    }

    return res.body.categorias;
}

exports.getNumeroVideos = async(req,res)=>{
    try{
        conexion.query("SELECT COUNT(*) FROM vídeos", (err, results)=>{
            if (err) throw err;
            res.body.videos = results;
        }) 
    }catch( error){
        console.log(error);
    }

    return res.body.videos;
}

//Iremos formando las categorias con un for que las recorra todas
//Esta funcion debe de devolver el nombre de la categoria
exports.getCategorias = async(req,res)=>{
    try{
        const numeroCategoria = req.body.numeroCat;
        conexion.query('SELECT Nombre FROM categorías Where ID = ?', [numeroCategoria], async (error,results)=>{
            if(error){console.log(error)}
            res.body.nombreCat =  results[0];
        })
    }catch( error){
        console.log(error);
    }
    return res.body.nombreCat;
}

exports.getVideos = async(req, res) =>{
    try{
        const numeroVideo = req.body.numeroVid;
        conexion.query('SELECT * FROM vídeos Where ID = ?', [numeroVideo], async (error,results)=>{
            if(error){console.log(error)}
            res.body.video =  results[0];
        })
    }catch( error){
        console.log(error);
    }
    return res.body.video;
}