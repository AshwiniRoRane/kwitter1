//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCtbNEZ8nithmYqyUjrj3B3Kv-wQNjg2Ak",
      authDomain: "project-11aa5.firebaseapp.com",
      databaseURL: "https://project-11aa5-default-rtdb.firebaseio.com",
      projectId: "project-11aa5",
      storageBucket: "project-11aa5.appspot.com",
      messagingSenderId: "495513248568",
      appId: "1:495513248568:web:5a3799481079f5c84c97cd",
      measurementId: "G-KV2ZEJ9KL8"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>"+name+"<img class='user_tick src='tick.png></h4> ";
like_button = "<button class ='btn btn-warning' id= "+firebase_message_id+" value="+like+" onclick ='updateLike(this.id);'>";
span_with_tag = "<span class='glyphicon glyphiconthumbs-up'>Like:"+like+"</span></button><hr>";
 
//End code
      } });  }); }
getData();
function send()
      {
            msg = document.getElementById("msg").value;
            firebase.database().ref(room_name).push({
                  name:user_name,
                  message:msg,
                  like:0
            });
            document.getElementById("msg").value = "";
      }
function updateLike(message_id)
{
      console.log("clicked on like button -" + message_id);
      button_id = message_id;
      liks = document.getElementById(button_id).value;
      update_Likes = Number(likes)+ 1;
      console.log(update_Likes);

      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
     });
}