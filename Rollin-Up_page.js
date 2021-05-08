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
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_a_tag = "<h4>" + name + "<img class='user_tick' src='Logo.png'></h4>";
message_with_tag = "<h4 class='message_h4'>"+message+"</h4>";
like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='UpdateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'> Like:"+like+"</span></button><hr>";

row = name_with_a_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
    } });  }); }
getData();
function UpdateLike(message_id){
    console.log("clicked on like button - " + message_id); 
    button_id = message_id; 
    likes = document.getElementById(button_id).value; 
    updated_likes = Number(like) + 1; console.log(updated_likes); 
    firebase.database().ref(room_name).child(message_id).update({ like : updated_likes });

};
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}