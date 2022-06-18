const mysql = require('mysql')

// const conexion =mysql.createConnection({
//     host : process.env.DB_HOST,
//     user : process.env.DB_USER,
//     password : process.env.DB_PASS,
//     database : process.env.DATABASE,
// })

const conexion =mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    port:3306,
    database:'trabajo angular'
})

conexion.connect((error)=>{
    if(error){
        console.log('El error de conexion es:'+error)
        return
    }
    console.log('Conectado a la base de datos')
})

module.exports = conexion