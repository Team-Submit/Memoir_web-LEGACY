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
axios.defaults.baseURL = 'http://172.20.10.7:8080';
let token = localStorage.getItem('accessTkn') || '';

myifm.addEventListener("click", myopen);
layout.addEventListener("click", myclose);
save.addEventListener("click", saveChange);
pwchange.addEventListener("click", pwopen);
pwchangebtn.addEventListener("click", pwchangego);
layout.addEventListener("click", pwclose);
textreg.addEventListener("click", addnewtext);
logout.addEventListener("click", logoutgo);

function tokencheck(){
    if(token === ''){
        location.href  = '../login/login.html';
    }
    //토큰 확인하는 코드임
    axios.get('/users/mypage', {
        Headers: {Authorization: token,},
    })
.then(function(result){
    console.log('결과 : ', result);

    const myPagedata = result.data;

    const pwname = document.querySelector(".pwnickname");
    pwname.innerText = myPagedata.nickname;

    const pwid  = document.querySelector(".pwid");
    pwid.innerText = myPagedata.userId;

    const ifmnickname = document.querySelector(".ifmnickname");
    ifmnickname.innerText = result.data.nickname;
    
    const ifmid = document.querySelector(".ifmid");
    ifmid.innerText = myPagedata.userId;
    
    const ifmintroduce = document.querySelector(".ifmintroduce");
    ifmintroduce.innerText = myPagedata.introduce;

    const namechange = document.getElementById("namechange");
    namechange.placeholder = myPagedata.nickname;

    const itrchange = document.getElementById("itrchange");
    itrchange.placeholder = myPagedata.introduce;



    let mypagememoirList = myPagedata.memoirList;
    for(i = 0; i < mypagememoirList.length; i++){
        
        if(mypagememoirList.nickname == myPagedata.nickname){
            const list = document.querySelector(".list");

            const li = document.createElement("li");
            li.classList.add("one");
            list.appendChild(li);
            li.id = mypagememoirList[i].id;
            li.addEventListener("click", idOnclick);
            function idOnclick(){
                reviewDetail(li.id);
            }
    
            const di = document.createElement("div");
            di.classList.add("di");
            li.appendChild(di);
    
            const title = document.createElement("p");
            title.classList.add("title");
            title.innerText = mypagememoirList[i].title;
            di.appendChild(title);
    
            const ct = document.createElement("p");
            ct.classList.add("contents");
            if(mypagememoirList[i].content.length >= 65){
                let stringCut = mypagememoirList[i].content.substring(0, 65);
                ct.innerText = stringCut + "...";
            }else{
                ct.innerText = mypagememoirList[i].content;
            }
            di.appendChild(ct);
    
            const nida = document.createElement("div");
            nida.classList.add("nida");
            di.appendChild(nida);
    
            const date = document.createElement("p");
            date.classList.add("date");
            date.innerText = mypagememoirList[i].createdAt;
            nida.appendChild(date);
    
            const write = document.createElement("div");
            write.classList.add("write");
            nida.appendChild(write);
    
            const nickname = document.createElement("p");
            nickname.classList.add("nickname");
            nickname.innerText = mypagememoirList[i].nickname;
            write.appendChild(nickname);
    
            li.addEventListener("click", reviewDetail);
        }
    }
        
})
.catch(function(error){
    console.error('error 발생 : ', error);
});
}


function reviewDetail(idvalue){
    localStorage.setItem("PageId", idvalue);
    location.href = '../reviewDetail/reviewDetail.html';
}

function addnewtext(){
    location.href = '../registration/registration.html';
}

function logoutgo(){
    localStorage.removeItem("access_token");
    location.href = '../mainpage/main.html';
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
function saveChange(){
    axios.patch("/users/mypage", {
        "nickName": namechange.value,
	    "introduce": itrchange.value
    }, {
        Headers: {Authorization: token},
    })
    .then(function(result){
        console.log('통신 결과 : ', result);
    })
    .catch(function(error){
        console.error('error 발생 : ', error);
    });
    location.href = '../mypage/mypage.html';
}
function pwopen(){
    layout.style.display = 'block';
    pwmodal.style.display = 'block';
    lastpw.value = '';
    newpw.value = '';
    newpwcheck.value = '';
}
function pwclose(){
    layout.style.display = 'none';
    pwmodal.style.display = 'none';
}

function pwchangego(){

    if(newpw.value == newpwcheck.value){
        axios.patch("/users/mypage/update", {
            "password": newpw.value
        }, {
            Headers: {Authorization: token},
        })
        .then(function(result){
            console.log('통신 결과 : ', result);
        })
        .catch(function(error){
            console.error('error 발생 : ', error);
        });
        location.href = '../mypage/mypage.html';
    }else{
        alert("새비밀번호가 일치하지않습니다.");
    }
}

tokencheck();