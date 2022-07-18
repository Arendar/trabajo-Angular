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

    const NOMBRE = req.body.Nombre;
    conexion.query('INSERT INTO categorías SET ?',{Nombre:NOMBRE}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            //console.log(results);   

            res.redirect('/categorias');         
        }
});
};

exports.updateCategoria = (req, res)=>{
    const id = req.body.id;
    const Nombre = req.body.Nombre;
    conexion.query('UPDATE categorías SET ? WHERE idC = ?',[{Nombre:Nombre}, id], (error, results)=>{


        if(error){
            console.log(error);
        }else{           
            res.redirect('/categorias');         
        }
});
};

exports.savevideos = (req, res)=>{
    const titulo = req.body.Titulo;
    const enlace = req.body.Enlace;
    const categoria = req.body.idCategoria;
    conexion.query('INSERT INTO vídeos SET ?',[{Titulo:titulo, Enlace:enlace, idCat:categoria}], (error, results)=>{
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
    const Enlace = req.body.Enlace;
    conexion.query('UPDATE vídeos SET ? WHERE id = ?',[{Titulo:Titulo, Enlace:Enlace}, id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/videos'); 
        }
});
};

exports.updateCategoriaVideos = (req,res)=>{
    const id = req.body.id;
    const idCat = req.body.idCategoria;
    conexion.query('UPDATE vídeos SET ? WHERE id = ?',[{idCat:idCat}, id], (error,res)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/videos');
        }
    })
}