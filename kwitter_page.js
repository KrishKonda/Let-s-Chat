//YOUR FIREBASE LINKS
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
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];

name_with_tag='<h4>'+name+'<img class="user_tick" src="tick.png"></h4>';
message_with_tag='<h4 class="message_h4">'+message+'</h4>';
line_with_tag='<button class="btn btn-warning" id="'+firebase_message_id+'" value="'+like+'" onclick="updateLike(this.id)">';
span_with_tag='<span class="glyphicon glyphicon-thumbs-up">&nbsp;Like:'+like+'</span></button><hr>';

row=name_with_tag+message_with_tag+line_with_tag+span_with_tag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
           name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}
function updateLike(message_id){
console.log(message_id);
button_id=message_id;
update_Like=document.getElementById(button_id).value;
likes=Number(update_Like)+1;
firebase.database().ref(room_name).child(message_id).update({
      like:likes
});
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}