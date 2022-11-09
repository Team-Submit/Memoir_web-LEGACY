const myifm = document.getElementById("myifm");
const pwchange = document.getElementById("pwchange");
const logout = document.getElementById("logout");
const layout = document.querySelector(".modallayout");
const myifmodal = document.querySelector(".hidopen");
const pwmodal = document.querySelector(".pwhidopen");
const save = document.getElementById("save");
const pwchangebtn = document.querySelector(".pwchange");
const namechange = document.getElementById("namechange");
const lastpw = document.getElementById("lastpw");
const newpw = document.getElementById("newpw");
const newpwcheck = document.getElementById("newpwcheck");
const textreg = document.querySelector(".textreg");
const baseurl = 'http://172.20.10.7:8080';

myifm.addEventListener("click", myopen);
layout.addEventListener("click", myclose);
save.addEventListener("click", myclose);
pwchange.addEventListener("click", pwopen);
pwchangebtn.addEventListener("click", pwclose);
layout.addEventListener("click", pwclose);
textreg.addEventListener("click", addnewtext);


axios.get('baseurl/users/mypage')
.then(function(result){
    console.log('결과 : ', result);

    const pwname = document.querySelector(".pwnickname");
    pwname.innerText = result.data.nickname;

    const pwid  = document.querySelector(".pwid");
    pwid.innerText = result.data.userId;

    const ifmnickname = document.querySelector(".ifmnickname");
    ifmnickname.innerText = result.data.nickname;
    
    const ifmid = document.querySelector(".ifmid");
    ifmid.innerText = result.data.userId;
    
    const ifmintroduce = document.querySelector(".ifmintroduce");
    ifmintroduce.innerText = result.data.introduce;

    const namechange = document.getElementById("namechange");
    namechange.placeholder = result.data.nickname;

    const itrchange = document.getElementById("itrchange");
    itrchange.placeholder = result.data.introduce;



    let memoirList = result.data.memoirList;
    for(i = 0; i < result.data.memoirList.length; i++){
        const list = document.querySelector(".list");

        const li = document.createElement("li");
        li.classList.add("one");
        list.appendChild(li);

        const di = document.createElement("div");
        di.classList.add("di");
        li.appendChild(di);

        const title = document.createElement("p");
        title.classList.add("title");
        title.innerText = memoirList[i].title;
        di.appendChild(title);

        const ct = document.createElement("p");
        ct.classList.add("contents");
        if(memoirList[i].content.length >= 65){
            let stringCut = memoirList[i].content.substring(0, 65);
            ct.innerText = stringCut + "...";
        }else{
            ct.innerText = memoirList[i].content;
        }
        di.appendChild(ct);

        const nida = document.createElement("div");
        nida.classList.add("nida");
        di.appendChild(nida);

        const date = document.createElement("p");
        date.classList.add("date");
        date.innerText = memoirList[i].createdAt;
        nida.appendChild(date);

        const write = document.createElement("div");
        write.classList.add("write");
        nida.appendChild(write);

        const nickname = document.createElement("p");
        nickname.classList.add("nickname");
        nickname.innerText = memoirList[i].nickname;
        write.appendChild(nickname);

        li.addEventListener("click", reviewDetail);
    }
})
.catch(function(error){
    console.error('error 발생 : ', error);
});
function reviewDetail(){
    location.href = '../reviewDetail/reviewDetail.html';
}

function addnewtext(){
    location.href = '../registration/registration.html';
}

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
