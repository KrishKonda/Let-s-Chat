// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCLyGed1vYD3F0pgMR0NEF84Rp8hbW_vCw",
      authDomain: "kwitter-5f50b.firebaseapp.com",
      databaseURL: "https://kwitter-5f50b-default-rtdb.firebaseio.com",
      projectId: "kwitter-5f50b",
      storageBucket: "kwitter-5f50b.appspot.com",
      messagingSenderId: "831410111564",
      appId: "1:831410111564:web:be1895f768776b9f2be0e9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
userName = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + userName + "!";
function addRoom() {
      roomName = document.getElementById("room_name").value;
      console.log(roomName);
      firebase.database().ref("/").child(roomName).update({
            purpose: "adding room name",
            room_name: roomName
      });
      localStorage.setItem("room_name", roomName);
      window.location = "kwitter_page.html";
}
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log(Room_names);
                  row = '<div class="room_name" id=' + Room_names + ' onclick="redirectToRoomName(this.id)>#' + Room_names + '</div><hr>';
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();
function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}