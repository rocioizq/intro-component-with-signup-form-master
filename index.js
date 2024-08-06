const form = document.querySelector("form");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const inputs = document.querySelectorAll("main form input");
const alertInfo = document.querySelectorAll("main form img");
const errorMsg = document.querySelectorAll("main form span.error");

let dataValid = [];

form.addEventListener('submit', function(e) {
    e.preventDefault();
  
    if (firstName.value == '') {
      alertDisplayBlock(0);
    } else {
      alertDisplayNone(0);
    }
  
    if (lastName.value == '') {
      alertDisplayBlock(1);
    } else {
      alertDisplayNone(1);
    }
  
    if (email.value == '') {
      alertDisplayBlock(2);
    } else {
      checkEmail();
    }
  
    if (password.value == '') {
      alertDisplayBlock(3);
    } else {
      alertDisplayNone(3);
    }
  
    alertSuccess();
});

function alertDisplayBlock(i) {
    errorMsg[i].classList.add("block");
    alertInfo[i].classList.add("block");
    inputs[i].classList.add("errorInput");
}
  
  function alertDisplayNone(i) {
    pushDataValid(i);
    errorMsg[i].classList.remove("block");
    alertInfo[i].classList.remove("block");
    inputs[i].classList.remove("errorInput");
}

function checkEmail() {
    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
    if (!email.value.match(pattern)) {
        errorMsg[2].innerHTML = 'Looks like this is not an email';
    } else {
        errorMsg[2].innerHTML = 'Email cannot be empty';
      alertDisplayNone(2);
    }
}

function pushDataValid(i) {
    if (!dataValid.includes(i)) { 
        dataValid.push(i);
    }
}
  
function alertSuccess() {
    if (dataValid.length === 4) {
        alert('Success claim free trial');
    }
}