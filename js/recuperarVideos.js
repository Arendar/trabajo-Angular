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