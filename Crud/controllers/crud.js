//Invocamos a la conexion de la DB
const conexion = require('../database/db');
//GUARDAR un REGISTRO
exports.save = (req, res)=>{
    const user = req.body.user;
    const pass = req.body.pass;
    conexion.query('INSERT INTO users SET ?',{user:user, pass:pass}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            //console.log(results);   
            res.redirect('/');         
        }
});
};
//ACTUALIZAR un REGISTRO
exports.update = (req, res)=>{
    const id = req.body.id;
    const user = req.body.user;
    const pass = req.body.pass;
    conexion.query('UPDATE users SET ? WHERE id = ?',[{user:user, pass:pass}, id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/');         
        }
});
};
//GUARDAR una cateogira
exports.saveCategoria = (req, res)=>{
    const NOMBRE = req.body.NOMBRE;
    conexion.query('INSERT INTO categorías SET ?',{NOMBRE:NOMBRE}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            //console.log(results);   
            res.redirect('/categorias.ejs');         
        }
});
};
exports.updateCategoria = (req, res)=>{
    const id = req.body.id;
    const NOMBRE = req.body.user;
    conexion.query('UPDATE categorías SET ? WHERE id = ?',[{NOMBRE:NOMBRE}, id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/categorias.ejs');         
        }
});
};