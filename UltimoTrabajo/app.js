const express = require('express')
const myconnection = require('express-myconnection');
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const cookieParser= require('cookie-parser')
const app = express()
const mysql = require('mysql')

//Setteamos el  motor de plantilla
app.set('view engine', 'ejs')

app.use(express.static('public'))
//para procesar datos enviados desde forms
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//Variables de entorno
dotenv.config({path: './env/.env'})

//Trabjo con cookies
app.use(cookieParser())

//Lamada al router
app.use('/',require('./routers/routers'))

/*app.get('/',(req,res)=>{
    res.render('index')
})*/



app.listen(3300,()=>{
    console.log('Funcionando en http://localhost:3300')
})