const express = require('express');
const router = express.Router();


const conexion = require('../database/db');

router.get('/videos', (req, res)=>{     
    conexion.query('SELECT * FROM vídeos',(error, video)=>{
        if(error){
            throw error;
        } else {                       
            res.render('videos', {video:video});            
        }   
    })
})


router.get('/createvideos', (req,res)=>{
    res.render('createvideos');
})

router.get('/editvideos/:id', (req,res)=>{    
    const id = req.params.id;
    conexion.query('SELECT * FROM vídeos WHERE id=?',[id] , (error, results) => {
        if (error) {
            throw error;
        }else{            
            res.render('editvideos', {Videos:results[0]});            
        }        
    });
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