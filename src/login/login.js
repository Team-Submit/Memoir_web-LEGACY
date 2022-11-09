const loginIdInput = document.getElementById("idInput");
const loginPasswordInput = document.getElementById("passwordInput");
const loginLoginBtn = document.getElementById("loginButton");

const loginIdDiv = document.getElementById("idInputDiv");
const loginPasswordDiv = document.getElementById("passwordInputDiv");
const loginInputWarn = document.getElementsByClassName("warnText");

const loginMoveToSignUp = document.getElementById("signupButton");
axios.defaults.baseURL = 'http://172.20.10.7:8080';

/** ID&비밀번호 내용이 있는지를 구분해 경고 주는 팡션 */
function isLoginBlank(){
    if(loginIdInput.value.length==0){
        loginIdDiv.classList.add("warn");
        loginInputWarn[0].classList.remove('transparent');
        return true;
    }
    else if(loginPasswordInput.value.length==0){
        loginPasswordDiv.classList.add("warn");
        loginInputWarn[1].classList.remove('transparent');
        return true;
    }
    else if(loginPasswordInput.value.length!=0&&loginIdInput.value.length!=0){
        return false;
    }
}

function loginServerPost(){
    if(isLoginBlank()==false){
        axios({
            method:'post',
            url:`/auth/login`,
            data:{
                "accountId": loginIdInput.value,
                "password": loginPasswordInput.value,   
            }
        })
        .then(function(response){
            localStorage.setItem("accessTkn",response.access_token);
        })
        .catch(function(error){
            if(error.response.status===404) alert("아이디와 비밀번호를 확인해주세요");
            else if(error.response.status===400) alert("알 수 없는 오류입니다. 고객센터는 없으니 어떡하죠")
        });
    }
}

/** ID와 비밀번호 변경을 감지해 경고를 지워주는 팡션 */
loginIdInput.addEventListener('change',function(){
    loginInputWarn[0].classList.add('transparent');
    loginIdDiv.classList.remove("warn");
});
loginPasswordInput.addEventListener('change',function(){
    loginInputWarn[1].classList.add('transparent');
    passwordInputDiv.classList.remove("warn");
});

loginLoginBtn.addEventListener('click',loginServerPost);
loginMoveToSignUp.addEventListener("click",function(){location.replace("../signup/signup.html")});