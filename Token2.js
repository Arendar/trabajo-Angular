function returntoken(){
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MjAxNjdmODY1ZDJmNGI0NjUxOWMxZDgiLCJpYXQiOjE2NDY0OTM2NjUsImV4cCI6MTY0NjUwODA2NX0.gOUYbShNRSxAFHve_qzeLknipP450Q0tyt7JcJo33KQ");

var raw = "";

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://labinfsoft.herokuapp.com/api/videos?limite=10&desde=0", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}