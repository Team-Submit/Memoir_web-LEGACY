const loginbtn = document.querySelector(".loginbtn");
const mainlist = document.querySelectorAll(".one");

axios.get('https://5540845b-638f-44d6-8017-aab2ea42f445.mock.pstmn.io/memoir')
.then(function(result){
    console.log('통신 결과 : ', result);
    const contents = result.data.contents;
    
    console.log("")
    for(i = 0; i < contents.length; i++){
        const list = document.querySelector(".list");

        const li = document.createElement("li");
        li.classList.add("one");
        list.appendChild(li);

        const di = document.createElement("div");
        di.classList.add("di");
        li.appendChild(di);

        const title = document.createElement("p");
        title.classList.add("title");
        title.innerText = contents.title;
        di.appendChild(title);

        const ct = document.createElement("p");
        ct.classList.add("contents");
        ct.innerText = contents.content;
        di.appendChild(ct);

        const nida = document.createElement("div");
        nida.classList.add("nida");
        di.appendChild(nida);

        const data = document.createElement("p");
        data.classList.add("data");
        data.innerText = contents.date;
        nida.appendChild(data);

        const write = document.createElement("div");
        write.classList.add("write");
        nida.appendChild(write);

        const nickname = document.createElement("p");
        nickname.classList.add("nickname");
        nickname.innerText = contents.nickname;
        write.appendChild(nickname);
    }
})
.catch(function(error){
    console.error('error 발생 : ', error);
});

loginbtn.addEventListener("click", logingo);
mainlist.forEach( function(box) {
    box.addEventListener("click", reviewDetail)
});

function logingo(){
    location.href = '../login/login.html';
}

function reviewDetail(){
    location.href = '../reviewDetail/reviewDetail.html'
}