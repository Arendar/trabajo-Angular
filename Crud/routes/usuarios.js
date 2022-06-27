const express = require('express');
const router = express.Router();


const conexion = require('../database/db');


router.get('/index', (req, res)=>{     
    conexion.query('SELECT * FROM users',(error, resultados)=>{
        if(error){
            throw error;
        } else {                       
            res.render('index', {resultados:resultados});            
        }   
    })
})

router.get('/create', (req,res)=>{
    res.render('create');
})

router.get('/categorias.ejs', (req,res)=>{
    res.render('categorias');
})

router.get('/edit/:id', (req,res)=>{    
    const id = req.params.id;
    conexion.query('SELECT * FROM users WHERE id=?',[id] , (error, results) => {
        if (error) {
            throw error;
        }else{            
            res.render('edit.ejs', {user:results[0]});            
        }        
    });
});
    
router.get('/delete/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('DELETE FROM users WHERE id = ?',[id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/index');         
        }
    })
});

const crud = require('../controllers/crud');

router.post('/save', crud.save);
router.post('/update', crud.update); 

module.exports = router; 