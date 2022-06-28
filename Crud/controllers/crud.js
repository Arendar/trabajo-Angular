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
<<<<<<< HEAD
  
=======
            //console.log(results);   
<<<<<<< HEAD
>>>>>>> 3b9d8e1962229799439f7a898618a540de405dab
=======
>>>>>>> 3b9d8e1962229799439f7a898618a540de405dab
            res.redirect('/index');         
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
            res.redirect('/index');         
        }
});
};
//GUARDAR una cateogira
exports.saveCategoria = (req, res)=>{
<<<<<<< HEAD
<<<<<<< HEAD
    const Nombre = req.body.Nombre;
    conexion.query('INSERT INTO categorías SET ?',{Nombre:Nombre}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
    
=======
=======
>>>>>>> 3b9d8e1962229799439f7a898618a540de405dab
    const NOMBRE = req.body.Nombre;
    conexion.query('INSERT INTO categorías SET ?',{Nombre:NOMBRE}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            //console.log(results);   
<<<<<<< HEAD
>>>>>>> 3b9d8e1962229799439f7a898618a540de405dab
=======
>>>>>>> 3b9d8e1962229799439f7a898618a540de405dab
            res.redirect('/categorias');         
        }
});
};

exports.updateCategoria = (req, res)=>{
    const id = req.body.id;
<<<<<<< HEAD
<<<<<<< HEAD
    const Nombre = req.body.Nombre;
    conexion.query('UPDATE categorías SET ? WHERE id = ?',[{Nombre:Nombre}, id], (error, results)=>{
=======
    const NOMBRE = req.body.Nombre;
    conexion.query('UPDATE categorías SET ? WHERE id = ?',[{Nombre:NOMBRE}, id], (error, results)=>{
>>>>>>> 3b9d8e1962229799439f7a898618a540de405dab
=======
    const NOMBRE = req.body.Nombre;
    conexion.query('UPDATE categorías SET ? WHERE id = ?',[{Nombre:NOMBRE}, id], (error, results)=>{
>>>>>>> 3b9d8e1962229799439f7a898618a540de405dab
        if(error){
            console.log(error);
        }else{           
            res.redirect('/categorias');         
<<<<<<< HEAD
<<<<<<< HEAD
        }
});
};

exports.savevideos = (req, res)=>{
    const Titulo = req.body.Titulo;
    const Enlace = req.body.Enlace;
    conexion.query('INSERT INTO vídeos SET ?',[{Titulo:Titulo},{Enlace:Enlace}], (error, results)=>{
        if(error){
            console.log(error);
        }else{   
            res.redirect('/videos');         
        }
});
};
exports.updatevideos = (req, res)=>{
    const id = req.body.id;
    const Titulo = req.body.Titulo;
    conexion.query('UPDATE vídeos SET ? WHERE id = ?',[{Titulo:Titulo}, id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/videos');         
=======
>>>>>>> 3b9d8e1962229799439f7a898618a540de405dab
=======
>>>>>>> 3b9d8e1962229799439f7a898618a540de405dab
        }
});
};