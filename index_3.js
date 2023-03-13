// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyDq_FGHznLJcV-mC8Tm1VO4MPPUxP18_ro",
  authDomain: "luro-2ab7e.firebaseapp.com",
  databaseURL: "https://luro-2ab7e-default-rtdb.firebaseio.com",
  projectId: "luro-2ab7e",
  storageBucket: "luro-2ab7e.appspot.com",
  messagingSenderId: "854590377527",
  appId: "1:854590377527:web:2d8333999ab33c4eef79b2",
  measurementId: "G-50G9E7TGHT"
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
      
      alert(data.place)
      console.log(data.place)
      alert(data.name)
      console.log(data.name)
      alert(data.reg_no)
      console.log(data.reg_no)
      alert(data.branch)
      console.log(data.branch)

      console.log(final_result);
  
    })
    //alert(data.name);
    //alert(data.reg_no);
    //alert(data.branch);
    alert(data.place);
    
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
