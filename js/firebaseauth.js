 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAJUsfsYme2YeTogG8IwWWc1UGV32aiChc",
    authDomain: "selfcare-database-59d3a.firebaseapp.com",
    projectId: "selfcare-database-59d3a",
    storageBucket: "selfcare-database-59d3a.appspot.com",
    messagingSenderId: "619809343697",
    appId: "1:619809343697:web:df659384ebff68f8ec9df0",
    measurementId: "G-1FE8J8VSCF"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
const databse = getDatabase(app);
const auth = getAuth();

// registration function
const signup = (e) => {
    // variables
    const email = document.querySelector("#email").value
    const emailfield = document.querySelector("#emailfield").value
    const password = document.querySelector("#password").value
    const password2 = document.querySelector("#password2").value
    const passwordfield = document.querySelector("#passwordfield").value
    const passwordfield2 = document.querySelector("#passwordfield2").value
    const rex = /@gmail.com/i;
    const checkbox = document.querySelector("#checkbox");
    // 
     if (email.length == null || !rex.test(email.value)) {
       emailfield.style.border = "1px solid red";
     } else {
       e.preventDefault();
       emailfield.style.border = "1px solid gray";
     }
     // password field
     if (password.length < 8) {
       passwordfield.style.border = "1px solid red";
     } else {
       e.preventDefault();
       passwordfield.style.border = "1px solid gray";
     }
     if (password2.length < 8) {
       passwordfield2.style.border = "1px solid red";
     } else {
       passwordfield2.style.border = "1px solid gray";
     }
     e.preventDefault();
     if (password != password2) {
       alert("paddword do not match try again");
     }
    
    createUserWithEmailAndPassword(auth, email, password).then((userCridential) => {
        const user = userCridential.user
        console.log(user);
        alert("Registration successful")
    }).catch((error) => { 
        const errorCode = error.code;
        const errorMessage = error.message;
        // 
        console.log(errorMessage);
        alert(error)
    })
};

// signin with fire base 

 