  function getToken(){ 
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var login=[];    
    var raw = JSON.stringify({
      "correo": document.getElementById("email").value,
      "password": document.getElementById("btn").value
    });
  login.push(raw);
    
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

      if(sessionStorage.getItem("token") !=null){
        window.location.replace("pagina_muestra_videos.html");
      }
  }
  