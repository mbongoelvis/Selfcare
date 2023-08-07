const email = document.querySelector("#email");
const emailfield = document.querySelector("#emailfield");
const password = document.querySelector("#password");
const passwordfield = document.querySelector("#passwordfield")
const checkbox = document.querySelector("#checkbox");
const reg = /@gmail.com/i;

email.addEventListener("input", (e) => {
   if (reg.test(email.value)) {
     emailfield.style.border = "1px solid rgb(233, 233, 233)";
   } else {
     emailfield.style.border = "1px solid red";
   }
});
// password
password.addEventListener("input", (e) => {
    if (password.value.length < 8) {
       passwordfield.style.border = "1px solid red";
    } else {
        passwordfield.style.border = "1px solid rgb(233, 233, 233)";
    }
});

const showpassword = () => {
    if (checkbox.checked) {
        password.type = "text"
    } else {
        password.type = "password"
     }
}


const login = () => { 
  if (email.value.length == " " || password.value.length == " ") {
    alert("you cant have access check your info again")
  } else {
    window.location = "/index.html"
  }
}