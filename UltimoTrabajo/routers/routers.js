const express = require('express')
const router =express.Router()

const authController =require('../Controllers/authController')

router.get('/', authController.isAuthentiated,(req,res)=>{
    
    res.render('index')
})
router.get('/login',(req,res)=>{
    res.render('login')
})
router.get('/register',(req,res)=>{
    res.render('register')
})

router.get('/getNumeroCategorias',(req, res)=>{
    res.render('getNumeroCategorias')
})

router.get('/getNumeroVideos',(req, res)=>{
    res.render('getNumeroVideos')
})

router.get('/getCategorias',(req, res)=>{
    res.render('getCategorias');
})

router.get('/getVideos',(req, res)=>{
    res.render('getVideos');
})

router.post('/register',authController.register)
router.post('/login',authController.login)
router.get('/logout',authController.logout)
router.get('/getNumeroCategorias', authController.getNumeroCategorias)
router.get('/getNumeroVideos', authController.getNumeroVideos)
router.get('/getCategorias', authController.getCategorias)
router.get('/getVideos', authController.getVideos)
module.exports = router