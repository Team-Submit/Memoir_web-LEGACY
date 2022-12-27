axios.defaults.baseURL = 'http://192.168.52.156:8080';

const searchInput = document.querySelector(".search");
const deleteList = document.querySelector(".list");

searchInput.addEventListener("keyup", search);

function search(){
    if(window.event.keyCode == 13){
        load();
    }
}

function load(){
    console.log(searchInput.value);
    deleteList.textContent = "";
    axios.get("/memoir/search", {
        params:{
            "keyword": searchInput.value
        }
    })
    .then(function(result){
        console.log('통신 결과 : ', result);

        const memoirList = result.data;

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
            date.innerText = memoirList[i].modifiedAt;
            nida.appendChild(date);
    
            const write = document.createElement("div");
            write.classList.add("write");
            nida.appendChild(write);
    
            const nickname = document.createElement("p");
            nickname.classList.add("nickname");
            nickname.innerText = memoirList[i].nickName;
            write.appendChild(nickname);
        }
    })
    .catch(function(error){
        console.error('error 발생 : ', error);
        alert("찾는 결과가 없습니다");
    });
}

function reviewDetail(idvalue){
    localStorage.setItem("PageId", idvalue);
    location.href = '../reviewDetail/reviewDetail.html';
}