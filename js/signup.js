const email = document.querySelector("#email");
const emailfield = document.querySelector("#emailfield");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");
const passwordfield = document.querySelector("#passwordfield");
const passwordfield2 = document.querySelector("#passwordfield2");
const fields = document.querySelectorAll(".requirements");
const checkbox = document.querySelector("#checkbox");
const checkbox2 = document.querySelector("#checkbox2");
const nextbtn = document.querySelector("#btnnext");
const reg = /@gmail.com/i;

// hideing the login form
const formhide = document.querySelector(".hide")
const namesection = document.querySelector(".hide-form")


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
password2.addEventListener("input", (e) => {
  if (password2.value.length < 8) {
    passwordfield2.style.border = "1px solid red";
  } else {
    passwordfield2.style.border = "1px solid rgb(233, 233, 233)";
  }
});

const showpassword2 = () => {
  if (checkbox2.checked) {
    password2.type = "text";
  } else {
    password2.type = "password";
  }
};
const showpassword = () => {
    if (checkbox.checked) {
        password.type = "text";
    } else {
        password.type = "password";
    }
};


const Name = document.querySelector(".name")
const validate = (e) => {
    if (password.value != password2.value || password.value.length == " " || password2.value.length == " ") {
        alert("password do not match")
        e.preventDefault()
    } else if (email.value.length == " " || !reg.test(email.value)) {
        alert("invalid email")
    } else {
        formhide.style.display = "none";
        if (namesection.classList.contains("hide-form")) {
            namesection.classList.remove("hide-form");
        } else {
            namesection.classList.add("hide-form");
        }
    }
}



// next page script

const finish = () => {
        window.location = "index.html";  
};
const back = () => {
  if (namesection.classList.contains("hide-form")) {
    namesection.classList.remove("hide-form");
  } else {
    namesection.classList.add("hide-form");
  }
  formhide.style.display = "block";
};


const signup = () => {
  if (validate() == false) {
    return false
  } 
}