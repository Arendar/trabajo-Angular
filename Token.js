  function getToken(){
      console.log("entro");
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "correo": "fminima@gmail.com",
      "password": "pHLpLOevSv9mPygdNBPV"
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("https://labinfsoft.herokuapp.com/api/auth/login", requestOptions)
      .then(response => response.json())
      .then(result => sessionStorage.setItem("token", result.token))
      .catch(error => console.log('error', error));
  }