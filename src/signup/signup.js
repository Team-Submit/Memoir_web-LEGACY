const signUpNameInput = document.querySelector(".nicknameInput");
const signUpIdInput = document.querySelector(".idInput");
const signUpPasswordInput = document.querySelector(".passwordInput");
const signUpPasswordReInput = document.querySelector(".passwordCheckInput");
const signUpWarntext = document.querySelectorAll(".warnText");
const signUpInputDivs = document.querySelectorAll(".inputDiv");
const signUpButton = document.querySelector(".signupButton");

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
    if(blankScanner()===200){
        axios({
        })
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