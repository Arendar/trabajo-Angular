const express = require('express');
const app = express();
app.set('view engine','ejs');
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(require('./routes/usuarios'));
app.use(require('./routes/categorias1'));
app.use(require('./routes/videos'));
app.listen(3000, ()=>{
    console.log('SERVER corriendo en http://localhost:3000');
});