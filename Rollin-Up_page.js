var firebaseConfig = {
    apiKey: "AIzaSyBAgTJb-KJMlOz_Amk5SJVZIr4h79oCTI4",
    authDomain: "fritter-9a97d.firebaseapp.com",
    databaseURL: "https://fritter-9a97d-default-rtdb.firebaseio.com",
    projectId: "fritter-9a97d",
    storageBucket: "fritter-9a97d.appspot.com",
    messagingSenderId: "184827457541",
    appId: "1:184827457541:web:aeff9d3a28dfc74cc8ac6c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//YOUR FIREBASE LINKS
username = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function send(){
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
    name:username,
    message:msg,
    like:0
});
document.getElementById("msg").value = "";
};
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}