const loginIdInput = document.getElementById("idInput");
const loginPasswordInput = document.getElementById("passwordInput");
const loginLoginBtn = document.getElementById("loginButton");

function isLoginBlank(){
    if(loginIdInput.value.length==0){
        alert("ID를 입력해야 합니다");
    }
    else if(loginPasswordInput.value.length==0){
        alert("비밀번호를 입력해야 합니다");
    }
}

loginLoginBtn.addEventListener('click',isLoginBlank);
