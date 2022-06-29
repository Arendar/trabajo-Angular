const express = require('express');
const app = express();
app.set('view engine','ejs');
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(require('./routes/usuarios'));
app.use(require('./routes/categorias1'));
app.use(require('./routes/videos'));
const bcryptjs = require('bcryptjs');
const conexion = require('./database/db');
const jwt = require('jsonwebtoken')
const session = require('express-session');
const JWT_SECRETO ='Secreto';
const JWT_TIEMPO_EXPIRA = '7d'
const JWT_COOKIE_EXPIRES = '90'
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.get('/Inicio', (req, res)=>{     
    conexion.query('SELECT * FROM users',(error, user)=>{
        if(error){
            throw error;
        } else {                       
            res.render('Inicio', {user});            
        }   
    })
})
app.get('/',(req, res)=>{
    res.render('login');
})
app.get('/Inicio',(req, res)=>{
    res.render('Inicio');
})
app.post('/auth', async (req, res)=> {
	try {
        const user = req.body.user
        const pass = req.body.pass        

        if(!user || !pass ){
            res.render('login',{
                alert:true,
                alertTitle: "Advertencia",
                alertMessage: "Ingrese un usuario y password",
                alertIcon:'info',
                showConfirmButton: true,
                timer: false,
                ruta: ''
            })
        }else{
            conexion.query('SELECT * FROM users WHERE user = ?', [user], async (error, results)=>{
                if( results.length == 0 || !( bcryptjs.compare(pass, results[0].pass)) ){
                    res.render('login', {
                        alert: true,
                        alertTitle: "Error",
                        alertMessage: "Usuario y/o Password incorrectas",
                        alertIcon:'error',
                        showConfirmButton: true,
                        timer: false,
                        ruta: ''    
                    })
                }else{
                    //inicio de sesión OK
                    const id = results[0].id
                    const token = jwt.sign({id:id}, JWT_SECRETO, {
                        expiresIn: JWT_TIEMPO_EXPIRA
                    })
                    //generamos el token SIN fecha de expiracion
                   //const token = jwt.sign({id: id}, process.env.JWT_SECRETO)
                   console.log("TOKEN: "+token+" para el USUARIO : "+user)

                   const cookiesOptions = {
                        expires: new Date(Date.now()+JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
                        httpOnly: true
                   }
                   res.cookie('jwt', token, cookiesOptions)
                   res.render('login', {
                        alert: true,
                        alertTitle: "Conexión exitosa",
                        alertMessage: "¡LOGIN CORRECTO!",
                        alertIcon:'success',
                        showConfirmButton: false,
                        timer: 800,
                        ruta: 'Inicio'
                   })
                }
            })
        }
    } catch (error) {
        console.log(error)
    }
})
//12 - Método para controlar que está auth en todas las páginas
app.get('/index', async (req, res, next)=>{
    if (req.cookies.jwt) {
        try {
            const decodificada = await promisify(jwt.verify)(req.cookies.jwt, JWT_SECRETO)
            conexion.query('SELECT * FROM users WHERE id = ?', [decodificada.id], (error, results)=>{
                if(!results){return next()}
                req.user = results[0]
                return next()
            })
        } catch (error) {
            console.log(error)
            return next()
        }
    }else{
        res.redirect('/login')        
    }
})

app.get('/logout', (req, res)=>{
    res.clearCookie('jwt')   
    return res.redirect('/')
})
//Destruye la sesión.

app.listen(3000, ()=>{
    console.log('SERVER corriendo en http://localhost:3000');
});