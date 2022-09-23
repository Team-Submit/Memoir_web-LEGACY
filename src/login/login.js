const loginIdInput = document.getElementById("idInput");
const loginPasswordInput = document.getElementById("passwordInput");
const loginLoginBtn = document.getElementById("loginButton");

const loginIdDiv = document.getElementById("idInputDiv");
const loginPasswordDiv = document.getElementById("passwordInputDiv");
const loginInputWarn = document.getElementsByClassName("warnText");

function isLoginBlank(){
    if(loginIdInput.value.length==0){
        loginIdDiv.classList.add("warn");
        loginInputWarn[0].classList.remove('transparent');
    }
    else if(loginPasswordInput.value.length==0){
        loginPasswordDiv.classList.add("warn");
        loginInputWarn[1].classList.remove('transparent');
    }
}

loginLoginBtn.addEventListener('click',isLoginBlank);