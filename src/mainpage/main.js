const loginbtn = document.querySelector(".loginbtn");
const mainlist = document.querySelectorAll(".one");

axios.get('https://5540845b-638f-44d6-8017-aab2ea42f445.mock.pstmn.io/memoir')
.then(function(result){
    console.log('통신 결과 : ', result);
    const memoirList = result.data.memoirList;
    
    for(i = 0; i < memoirList.length; i++){
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

function logingo(){
    location.href = '../login/login.html';
}

function reviewDetail(){
    location.href = '../reviewDetail/reviewDetail.html'
}