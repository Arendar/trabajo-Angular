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


router.get('/editCategoria/:id', (req,res)=>{    
    const id = req.params.id;
    conexion.query('SELECT * FROM categorías WHERE id=?',[id] , (error, results) => {
        if (error) {
            throw error;
        }else{            
            //Había que meter categoria en este punto
                                            //|
                                            //V
            res.render('editCategoria.ejs', {categoria:results[0]});            
        }        
    });
});
    
router.get('/deleteCategoria/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('DELETE FROM categorías WHERE id = ?',[id], (error, results)=>{
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