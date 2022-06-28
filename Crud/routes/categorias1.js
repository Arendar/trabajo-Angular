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

<<<<<<< HEAD
<<<<<<< HEAD
router.get('/editcategorias/:id', (req,res)=>{    
=======

router.get('/editCategoria/:id', (req,res)=>{    
>>>>>>> 3b9d8e1962229799439f7a898618a540de405dab
=======

router.get('/editCategoria/:id', (req,res)=>{    
>>>>>>> 3b9d8e1962229799439f7a898618a540de405dab
    const id = req.params.id;
    conexion.query('SELECT * FROM categorías WHERE id=?',[id] , (error, results) => {
        if (error) {
            throw error;
        }else{            
<<<<<<< HEAD
<<<<<<< HEAD
            res.render('editcategorias', {Genero:results[0]});            
=======
=======
>>>>>>> 3b9d8e1962229799439f7a898618a540de405dab
            //Había que meter categoria en este punto
                                            //|
                                            //V
            res.render('editCategoria.ejs', {categoria:results[0]});            
<<<<<<< HEAD
>>>>>>> 3b9d8e1962229799439f7a898618a540de405dab
=======
>>>>>>> 3b9d8e1962229799439f7a898618a540de405dab
        }        
    });
});
    
<<<<<<< HEAD
<<<<<<< HEAD
router.get('/deletecategorias/:id', (req, res) => {
=======
router.get('/deleteCategoria/:id', (req, res) => {
>>>>>>> 3b9d8e1962229799439f7a898618a540de405dab
=======
router.get('/deleteCategoria/:id', (req, res) => {
>>>>>>> 3b9d8e1962229799439f7a898618a540de405dab
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