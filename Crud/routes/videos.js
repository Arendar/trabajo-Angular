const express = require('express');
const router = express.Router();


const conexion = require('../database/db');

router.get('/videos', (req, res)=>{  
    //No puedes hacer un query dentro de otro. 
    //Si quieres hacer otra petición a otra tabla ponlo dentro del mismo query   
    conexion.query('SELECT * FROM vídeos; SELECT * FROM categorías',(error, results)=>{
        if(error){
            throw error;
        } else {       
            //console.log(results);
            res.render('videos', {conjunto:results});             
        }   
    })
})

router.get('/verVideos', (req, res)=>{
    conexion.query('SELECT * FROM vídeos; SELECT * FROM categorías',(error, results)=>{
        if(error){
            throw error;
        } else {       
            //console.log(results);
            res.render('verVideos', {videos:results[0], categorias:results[1]});
        }   
    })
})

router.get('/createvideos', (req,res)=>{
    conexion.query('SELECT * FROM categorías',(error, categoria)=>{
        if(error){
            throw error;
        } else {                       
            res.render('createvideos', {categoria:categoria});            
        }   
    })
})

router.get('/editvideos/:id', (req,res)=>{    
    const id = req.params.id;
    //No puedes hacer un query dentro de otro..
    //Aquí hay algo que no funciona al hacer las dos peticiones
    //SELECT * FROM categorías
    conexion.query('SELECT * FROM vídeos WHERE id=?' ,[id], (error, results)=>{
        if(error){
            throw error;
        } else {       
            console.log(results);
            //categoria:results[1]
            res.render('editvideos', {video:results});               
        }   
    })
});

router.get('/editcategoriavideo/:id', (req,res)=>{    
    const id = req.params.id;
    //No puedes hacer un query dentro de otro..
    //Aquí hay algo que no funciona al hacer las dos peticiones
    //SELECT * FROM categorías
    conexion.query('SELECT id FROM vídeos WHERE id=?; SELECT * FROM categorías' ,[id], (error, results)=>{
        if(error){
            throw error;
        } else {       
            console.log(results[0]);
            console.log(results[1]);
            //categoria:results[1]
            res.render('editcategoriavideo', {ID:results[0], categoria:results[1]});               
        }   
    })
});
    
router.get('/deletevideos/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('DELETE FROM vídeos WHERE id = ?',[id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/videos');         
        }
    })
});

const crud = require('../controllers/crud');
router.post('/savevideos', crud.savevideos);
router.post('/updatevideos', crud.updatevideos);
module.exports = router; 