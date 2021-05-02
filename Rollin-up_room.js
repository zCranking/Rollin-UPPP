var firebaseConfig = {
    apiKey: "AIzaSyC1j6SUF8ugWK-xZ5WwsGV0pE7nekuUg5I",
    authDomain: "rollin-uppp.firebaseapp.com",
    databaseURL: "https://rollin-uppp-default-rtdb.firebaseio.com",
    projectId: "rollin-uppp",
    storageBucket: "rollin-uppp.appspot.com",
    messagingSenderId: "157006892072",
    appId: "1:157006892072:web:88062b557e71620a1fb91d"
  };
firebase.initializeApp(firebaseConfig);

window.onload = function displaytheename(){
  theename = localStorage.getItem("user_name");
  document.getElementById("displaytheename").innerHTML = " What is good " + theename + "?";
};
function addroom(){
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding a rooom!"
  });
  window.location = "Rollin-Up_page.html";
  localStorage.setItem("room_name", room_name);
};
function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
 Room_names = childKey;
 //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
 //End code
 });});}
getData();
function redirectToRoom(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "Rollin-Up_page.html";
};

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}