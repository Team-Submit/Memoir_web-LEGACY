const signUpNameInput = document.querySelector(".nicknameInput");
const signUpIdInput = document.querySelector(".idInput");
const signUpPasswordInput = document.querySelector(".passwordInput");
const signUpPasswordReInput = document.querySelector(".passwordCheckInput");
const signUpWarntext = document.querySelectorAll(".warnText");
const signUpInputDivs = document.querySelectorAll(".inputDiv");
const signUpButton = document.querySelector(".signupButton");

/** input에 내용이 있는지를 감지해 경고띄우는 펑션 */
function isInputBlank(){
    if(signUpNameInput.value.length<=0){
        signUpWarntext[0].classList.remove('transparent');
        signUpInputDivs[0].classList.add('warnborder');
        return true;
    }
    else if(signUpIdInput.value.length<=0){
        signUpWarntext[1].classList.remove('transparent');
        signUpInputDivs[1].classList.add('warnborder');
        return true;
    }
    else if(signUpPasswordInput.value.length<=0){
        signUpWarntext[2].classList.remove('transparent');
        signUpInputDivs[2].classList.add('warnborder');
        return true;
    }
    else if(signUpPasswordReInput.value.length<=0){
        signUpWarntext[3].classList.remove('transparent');
        signUpInputDivs[3].classList.add('warnborder');
        return true;
    }
    else{
        return false;
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


signUpButton.addEventListener("click",isInputBlank);