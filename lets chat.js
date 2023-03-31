function addUser(){
  
    var user_name= document.getElementById("username").value;
    document.getElementById("username").innerHTML="";
     localStorage.setItem("user_name", user_name);
     window.location= "Letschat_room.html";
     }