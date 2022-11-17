const loginbtn = document.querySelector(".loginbtn");
const mypagebtn = document.querySelector(".mypage");
const mainlist = document.querySelectorAll(".one");
axios.defaults.baseURL = 'http://172.20.10.7:8080';
let token = localStorage.getItem('accessTkn') || '';
localStorage.removeItem("PageId");

axios.get('/memoir/list')
.then(function(result){
    console.log('통신 결과 : ', result);

    if(token !== ''){
        loginbtn.innerText = "글쓰기";
        loginbtn.addEventListener("click", reviewDetail);
        mypagebtn.style.display = 'inline-block';
        mypagebtn.addEventListener("click", mypagego);
    }else{
        loginbtn.addEventListener("click", logingo);
        mypagebtn.style.display = 'none';
    }

    const memoirList = result.data.memoirList;
    
    // const reversememoirList = memoirList.reverse(); 만약에 순서가 반대로 되면 사용하기 

    for(i = 0; i < memoirList.length; i++){
        let contents = memoirList[i].goal + memoirList[i].learned + memoirList[i].felt + memoirList[i].nextGoal;

        const list = document.querySelector(".list");

        const li = document.createElement("li");
        li.classList.add("one");
        list.appendChild(li);
        li.id = memoirList[i].id;
        li.addEventListener("click", idOnclick);
        function idOnclick(){
            reviewDetail(li.id);
        }
        const di = document.createElement("div");
        di.classList.add("di");
        li.appendChild(di);

        const title = document.createElement("p");
        title.classList.add("title");
        title.innerText = memoirList[i].title;
        di.appendChild(title);

        const ct = document.createElement("p");
        ct.classList.add("contents");
        if(contents.length >= 65){
            let stringCut = contents.substring(0, 65);
            ct.innerText = stringCut + "...";
        }else{
            ct.innerText = contents;
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
    }
    
})
.catch(function(error){
    console.error('error 발생 : ', error);
});

function logingo(){
    location.href = '../login/login.html';
}

function mypagego(){
    location.href = '../mypage/mypage.html';
}

function reviewDetail(idvalue){
    localStorage.setItem("PageId", idvalue);
    location.href = '../reviewDetail/reviewDetail.html';
}