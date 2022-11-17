const signUpNameInput = document.querySelector(".nicknameInput");
const signUpIdInput = document.querySelector(".idInput");
const signUpPasswordInput = document.querySelector(".passwordInput");
const signUpPasswordReInput = document.querySelector(".passwordCheckInput");
const signUpWarntext = document.querySelectorAll(".warnText");
const signUpInputDivs = document.querySelectorAll(".inputDiv");
const signUpButton = document.querySelector(".signupButton");

axios.defaults.baseURL = 'http://172.20.10.7:8080';

function inputWarnMaker(){
    switch(blankScanner()){
        case 'id':
            signUpWarntext[0].classList.remove('transparent');
            signUpInputDivs[0].classList.add('warnborder');
            break;
        case 'name':
            signUpWarntext[1].classList.remove('transparent');
            signUpInputDivs[1].classList.add('warnborder');
            break;
        case 'pswd':
            signUpWarntext[2].classList.remove('transparent');
            signUpInputDivs[2].classList.add('warnborder');
            break;
        case 'pwre':
            signUpWarntext[3].classList.remove('transparent');
            signUpInputDivs[3].classList.add('warnborder');
            break;
    }
}

function blankScanner(){
    if(signUpNameInput.value.length<=0)
        return 'name';

    else if(signUpIdInput.value.length<=0)
        return 'id';

    else if(signUpPasswordInput.value.length<=0)
        return 'pswd';

    else if(signUpPasswordReInput.value.length<=0)
        return 'pwre';

    else 
        return 200;
}

function signUpServerPost(){
    if(signUpPasswordInput.value!==signUpPasswordReInput.value){
        alert('비밀번호/다시 입력이 다릅니다');
    }
    else if(blankScanner()===200){
        axios({
            method:'post',
            url:'/users/signup',
            data:{
                "nickName": signUpNameInput.value,
                "userId": signUpIdInput.value,
                "password": signUpPasswordInput.value
            }
        })
        .then(function(response){
            alert("회원가입에 성공했습니다");
            location.href = "../login/login.html";
        })
        .catch(function(error){
            if(error.response.status===409) alert("계정 정보가 중복됩니다.");
            else if(error.response.status===400) alert("알 수 없는 오류입니다. 고객센터는 없으니 어떡하죠");
            else alert(`오류 (${error.response.status})`);
        })
    }
    else{
        inputWarnMaker();
    }
}

/** input 내용 변경을 감지해 경고 지우는 팡션 */
signUpNameInput.addEventListener('change',function(){
    signUpWarntext[0].classList.add('transparent');
    signUpInputDivs[0].classList.remove("warnborder");
});
signUpIdInput.addEventListener('change',function(){
    signUpWarntext[1].classList.add('transparent');
    signUpInputDivs[1].classList.remove("warnborder");
});
signUpPasswordInput.addEventListener('change',function(){
    signUpWarntext[2].classList.add('transparent');
    signUpInputDivs[2].classList.remove("warnborder");
});
signUpPasswordReInput.addEventListener('change',function(){
    signUpWarntext[3].classList.add('transparent');
    signUpInputDivs[3].classList.remove("warnborder");
});


signUpButton.addEventListener("click",signUpServerPost);