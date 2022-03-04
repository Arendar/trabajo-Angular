var myHeaders = new Headers();
var data = sessionStorage.getItem('token');
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MjAxNjdmODY1ZDJmNGI0NjUxOWMxZDgiLCJpYXQiOjE2NDYxNDkwOTksImV4cCI6MTY0NjE2MzQ5OX0.12NXr4AM15EpLTGG9fcIzVERKsGaOVdMydtwdEXyxcc");

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
// display(obj,"");

//Necesitamos encontrar una manera de contar el número de categorías que hay en la petición
//Para eso no sé si usar un bucle while o un bucle for para sacar los datos.

// function display(obj,sp) {
//  for (n in obj) { //n debería recorrer toda la petición JSON
//   if (typeof obj[n] == 'object') {
//    display(obj[n],n+".");
//   }else{
//    html.innerhtml+="<p>"+sp+n+"="+obj[n];
//   }
//  }
// }

// html.innerhtml+="\