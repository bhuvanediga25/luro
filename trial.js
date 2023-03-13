// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyANu0jJ2LN5Sg7njNqnamLQ0SKt6R9s7wk",
  authDomain: "trail1-91967.firebaseapp.com",
  projectId: "trail1-91967",
  storageBucket: "trail1-91967.appspot.com",
  messagingSenderId: "1072773254878",
  appId: "1:1072773254878:web:1541971bcfc151a19ffc4f",
  measurementId: "G-T718B0NWTD"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Set database variable
  var database = firebase.database()


function save() {
    var name= document.getElementById("name").value
    var reg_no= document.getElementById("reg_no").value
    var branch = document.getElementById("branch").value
    var place = document.getElementById("place").value
    console.log(name);
    console.log(reg_no);
    console.log(branch);
    console.log(place);

  database.ref('users/' + name).set({
    name : name,
    reg_no : reg_no,
    branch : branch,
    place : place,
  })
  

  alert('Saved')
}
  function get() {
    var name = document.getElementById('name').value
    
    var user_ref = database.ref('users/' + name)
    user_ref.on('value', function(snapshot) {
      var data = snapshot.val()
      
      alert(data.name)
      console.log((name)  + ( reg_no) + (branch));
      console.log(place);
  
    })
    alert(data.name)
    
}


function update() {
  var name = document.getElementById('name').value
  var reg_no = document.getElementById('reg_no').value
  var branch = document.getElementById('branch').value

  var updates = {
    name : name,
    reg_no : reg_no
  }

  database.ref('users/' + name).update(updates)

  alert('updated')
}
function remove() {
  var name = document.getElementById('name').value

  database.ref('users/' + name).remove()

  alert('deleted')
}