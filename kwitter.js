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

function addUser(){
    user_name=document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);
    window.location="kwitter_room.html";
}
