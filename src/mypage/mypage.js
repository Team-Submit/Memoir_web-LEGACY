const myifm = document.getElementById("myifm");
const pwchange = document.getElementById("pwchange");
const logout = document.getElementById("logout");
const layout = document.querySelector(".modallayout");
const myifmodal = document.querySelector(".hidopen");
const pwmodal = document.querySelector(".pwhidopen");
const save = document.getElementById("save");
const pwchangebtn = document.querySelector(".pwchange");
const namechange = document.getElementById("namechange");
const itrchange = document.getElementById("itrchange");
const lastpw = document.getElementById("lastpw");
const newpw = document.getElementById("newpw");
const newpwcheck = document.getElementById("newpwcheck");

myifm.addEventListener("click", myopen);
layout.addEventListener("click", myclose);
save.addEventListener("click", myclose);
pwchange.addEventListener("click", pwopen);
pwchangebtn.addEventListener("click", pwclose);
layout.addEventListener("click", pwclose);

function myopen(){
    layout.style.display = 'block';
    myifmodal.style.display = 'block';
    namechange.value = '';
    itrchange.value = '';
}
function myclose(){
    layout.style.display = 'none';
    myifmodal.style.display = 'none';
}
function pwopen(){
    layout.style.display = 'block';
    pwmodal.style.display = 'block';
    lastpw.value = '';
    newpw.value = '';
    newpwcheck.value = '';
}
function pwclose(){
    if(newpw.value == newpwcheck.value){
        layout.style.display = 'none';
        pwmodal.style.display = 'none';
    }else{
        alert("새 비밀번호가 일치하지 않습니다.");
    }
    
}