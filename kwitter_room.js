
//AÑADE TUS ENLACES DE FIREBASE
var firebaseConfig = {
      apiKey: "AIzaSyAZF87PZFfva3y9-tr9TjgExWhQVWOO3Tg",
      authDomain: "kwitter-mateo.firebaseapp.com",
      databaseURL: "https://kwitter-mateo-default-rtdb.firebaseio.com",
      projectId: "kwitter-mateo",
      storageBucket: "kwitter-mateo.appspot.com",
      messagingSenderId: "585357272160",
      appId: "1:585357272160:web:e490c0509c1a6cbd32cf05"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    document.getElementById("user_name").innerHTML="¡Bienvenido "+ user_name+"¡";
    function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({ purpose: "crear sala nueva" });
      localStorage.setItem("room_name", room_name);
       window.location.replace("kwitter_page.html");
    }








function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código
      console.log("nombre de sala "+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"<div>";
      document.getElementById("output").innerHTML+=row
      //Final del código
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html";


}
 function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter_page.html"
 }
 