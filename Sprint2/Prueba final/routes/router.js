const express = require('express')
const router = express.Router()
const conexion = require('../database/db')
const authController = require('../controllers/authController')



//router para las vistas
router.get('/', authController.isAuthenticated, (req, res)=>{    
    res.render('index', {user:req.user})
})
router.get('/login', (req, res)=>{
    res.render('login', {alert:false})
})
router.get('/register', (req, res)=>{
    res.render('register')
})
router.get('/create', (req,res)=>{
    res.render('create');
})
router.get('/createcategorias', (req,res)=>{
    res.render('createcategorias');
})
router.get('/categorias', (req,res)=>{
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
            res.redirect('/');         
        }
    })
});
router.get('/', (req,res)=>{    
    res.render('categorias')
    conexion.query('SELECT * FROM categorías', (error, results) => {
        if (error) {
            throw error;
        }else{            
            res.render('categorias',{results:results});            
        }        
    });
});
//router para los métodos del controller
router.post('/register', authController.register)
router.post('/login', authController.login)
router.get('/logout', authController.logout)
router.post('/save', authController.save);
router.post('/update', authController.update);

module.exports = router