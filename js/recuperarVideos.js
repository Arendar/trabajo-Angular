var idGenero = "";
var nGeneros = 0;
var primero = true;
var myHeaders = new Headers();
var data = sessionStorage.getItem('token');
myHeaders.append("Authorization", "Bearer "+data);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://labinfsoft.herokuapp.com/api/videos?limite=10&desde=0", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

  //result.productos[0].categoria.id;

  //2.- Acceder a los valores de un objeto JSON si NO conoces su estructura"

//Necesitamos encontrar una manera de contar el número de categorías que hay en la petición
//Para eso no sé si usar un bucle while o un bucle for para sacar los datos.

var videos = result.total;

document.body.onload = muestravideos;

function muestravideos() {
 for (let i = 0; i < videos; i++) { //n debería recorrer toda la petición json
   if (result.productos[i].categoria.id != idGenero) {
     idGenero = result.productos[i].categoria.id;
       //en lugar de crear nuevos divs ponemos en el doc html
       //ya uno de base con una id definida.
       //a partir de ahí vamos creando el resto de divs asignandoles la clase e id correspondiente
     
     var div = document.getelementbyid("cat");    
     var clon = div.clonenode("cat");
     clon.setattribute("id", idGenero);
     clon.setattribute("class", "categoria");

     var h3 = document.createelement("h3");
     var text = document.createtextnode(result.productos[i].categoria.nombre);
     h3.appendchild(text);
     clon.appendchild(h3);
     document.body.appendchild(clon);
   } 
 }

 var categorias = document.getelementsbyclassname("categoria");
 for (var j=0; j < videos; j++){
   for (var k=0; k < categorias.length; k++){
     if(result.productos[j].categoria.id == categorias[k].id){
       
       var tag = document.createelement("p");
       var text = document.createtextnode(result.productos[j].nombre);
       tag.appendchild(text);
       categorias[k].appendchild(tag);

       //<iframe width="420" height="315" src="">
       var iframe = document.createelement("iframe");
       iframe.setattribute("width", "420");
       iframe.setattribute("height", "315");
       iframe.setattribute("src", result.productos[j].url);
       categorias[k].appendchild(iframe);
     }
   }
 }
}
