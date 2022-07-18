const express = require('express');
const router = express.Router();


const conexion = require('../database/db');

router.get('/categorias', (req, res)=>{     
    conexion.query('SELECT * FROM categorías',(error, categoria)=>{
        if(error){
            throw error;
        } else {                       
            res.render('categorias', {categoria:categoria});            
        }   
    })
})
router.get('/createcategoria', (req,res)=>{
    res.render('createcategoria');
})

router.get('/editCategoria', (req,res)=>{
    res.render('editCategoria');
})

router.get('/editCategoria/:id', (req,res)=>{    

    const id = req.params.id;
    conexion.query('SELECT * FROM categorías WHERE idC=?',[id] , (error, results) => {
        if (error) {
            throw error;
        }else{           
            //console.log(results);
            res.render('editCategoria', {Genero:results[0]});            
            
        }        
    });
});
    

router.get('/deleteCategoria/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('DELETE FROM categorías WHERE idC = ?',[id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/categorias');         
        }
    })
});

const crud = require('../controllers/crud');
router.post('/saveCategoria', crud.saveCategoria);
router.post('/updateCategoria', crud.updateCategoria);
module.exports = router; 