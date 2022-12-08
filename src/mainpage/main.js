const loginbtn = document.querySelector(".loginbtn");
const mypagebtn = document.querySelector(".mypage");
const mainlist = document.querySelectorAll(".one");
axios.defaults.baseURL = 'http://192.168.241.156:8080';
let token = localStorage.getItem('accessTkn') || '';
localStorage.removeItem("PageId");

const memoirList = [{
    title:'멋진회고록',
    createdAt : '방금 전',
    nickName:"지훈훈이",
    goal:"인프런 스벨트 강의 수강하기 ",
    learned:'스벨트는 가상돔을 안 쓴다는게 신기하다 ',
    felt:'근데 리액트 생태계가 너무 크다 ',
    nextGoal:'스벨트를 활용해 토이프로젝트 진행하기 '
},{
    title:'StoryBook!',
    createdAt : '어제',
    nickName:"popNyan",
    goal:"동아리 프로젝트 명세서, 스토리북을 활용해 작성하기 ",
    learned:'활용은 어렵지만 잘 활용하면 쓸모가 많을 듯 ',
    felt:'기록을 안 해둔 점이 아쉽다 ',
    nextGoal:'스벨트를 활용해 토이프로젝트 진행하기 '
},{
    title:'12월 2일 화고록',
    createdAt : '12월 2일',
    nickName:"남궁민수",
    goal:"리액트 공부하기 ",
    learned:'hooks의 개념과 기본적 활용 방법 ',
    felt:'너 무 어 렵 따 ! ',
    nextGoal:'hooks 적용해 리팩토링하기 '
},{
    title:'시켜서쓰는홰고록',
    createdAt : '12월 2일',
    nickName:"Byeol",
    goal:"안 자기 ",
    learned:'브라우저가 SPA를 인정해주는 조건 ',
    felt:'구현하려면 머리가 깨질 것 같다 ',
    nextGoal:'머리 깨질 것 같은 거 구현하기 '
},{
    title:'집가서놀고싶다진짜',
    createdAt : '12월 2일',
    nickName:"지훈훈이",
    goal:"인프런에서할부로돈주고산 익스프레스 강의 수강하기 ",
    learned:'익스프레스는 정말 너무 멋져 ',
    felt:'의무귀간데집은언제보내주는걸까진짜 ',
    nextGoal:'동프 참여하기 활용해 토이프로젝트 진행하기 '
},{
    title:'동아리 HEX 전체 회고',
    createdAt : '12월 2일',
    nickName:"지훈훈이",
    goal:"인프런 스벨트 강의 수강하기 ",
    learned:'스벨트는 가상돔을 안 쓴다는게 신기하다 ',
    felt:'근데 리액트 생태계가 너무 크다 ',
    nextGoal:'스벨트를 활용해 토이프로젝트 진행하기 '
},{
    title:'👼안녕히계세요 여러분 저는',
    createdAt : '12월 1일',
    nickName:"대통령",
    goal:"부끄러운 불러 묻힌 된 거외다. 아직 옥 하나에 별이 때 하나의 멀리 아이들의 이름을 까닭입니다. 어머니 오면 별을 벌써 내린 아이들의 슬퍼하는 이런 봅니다. ",
    learned:'스벨트는 가상돔을 안 쓴다는게 신기하다 ',
    felt:'근데 리액트 생태계가 너무 크다 ',
    nextGoal:'스벨트를 활용해 토이프로젝트 진행하기 '
},{
    title:'zemok',
    createdAt : '12월 1일',
    nickName:"지훈훈이",
    goal:"인프런 스벨트 강의 수강하기 ",
    learned:'스벨트는 가상돔을 안 쓴다는게 신기하다 ',
    felt:'근데 리액트 생태계가 너무 크다 ',
    nextGoal:'스벨트를 활용해 토이프로젝트 진행하기 '
},{
    title:'PM의 눈물',
    createdAt : '12월 1일',
    nickName:"아무무",
    goal:"프젝 연기하기 흑흑 흑흑 ",
    learned:'프젝 일정은 어느 정도 여유를 두자 ',
    felt:'팀원을 너무 압박하면 죽는다 ',
    nextGoal:'팀 프로젝트 완성하기 '
},{
    title:'별 헤는 밤',
    createdAt : '11월 29일',
    nickName:"DAS",
    goal:"차 별에도 하나의 너무나 있습니다. 나의 까닭이요, 아침이 언덕 밤이 별이 새겨지는 새워 듯합니다. 프랑시스 릴케 라이너 봅니다. 하나 이름과, 별들을 이국 이네들은 이름자를 까닭입니다. 시인의 어머니 못 있습니다. 하나 새겨지는 가을로 소녀들의 남은 봅니다. 까닭이요, 이 토끼, 아침이 시인의 이름과, 듯합니다.",
    learned:'스벨트는 가상돔을 안 쓴다는게 신기하다 ',
    felt:'근데 리액트 생태계가 너무 크다 ',
    nextGoal:'스벨트를 활용해 토이프로젝트 진행하기 '
},{
    title:'흑흑 아무것도안함 흑흑',
    createdAt : '11월 29일',
    nickName:"나태지옥",
    goal:"뭐라도 하기 ",
    learned:'지구 시스템의 순환까지 들었는데 졸아서 기억이 안남 ',
    felt:'밤에는 잠을 자자 ',
    nextGoal:'개인프로젝트 보고서 제출하기 (진짜로) '
},{
    title:'매-지컬한 회고록',
    createdAt : '11월 29일',
    nickName:"마✨법✨소✨년",
    goal:"대통령은 필요하다고 인정할 때에는 외교·국방·통일 기타 국가안위에 관한 중요정책을 국민투표에 붙일 수 있다. 이 헌법은 1988년 2월 25일부터 시행한다. 다만, 이 헌법을 시행하기 위하여 필요한 법률의 제정·개정과 이 헌법에 의한 대통령 및 국회의원의 선거 기타 이 헌법시행에 관한 준비는 이 헌법시행 전에 할 수 있다. ",
    learned:'스벨트는 가상돔을 안 쓴다는게 신기하다 ',
    felt:'근데 리액트 생태계가 너무 크다 ',
    nextGoal:'스벨트를 활용해 토이프로젝트 진행하기 '
},];

// axios.get('/memoir/list')
// .then(function(result){
//     console.log('통신 결과 : ', result);

//     if(token !== ''){
//         loginbtn.innerText = "글쓰기";
//         loginbtn.addEventListener("click", registrationgo);
//         mypagebtn.style.display = 'inline-block';
//         mypagebtn.addEventListener("click", mypagego);
//     }else{
//         loginbtn.addEventListener("click", logingo);
//         mypagebtn.style.display = 'none';
//     }

//     const memoirList = result.data.memoirList;
    
//     // const reversememoirList = memoirList.reverse(); 만약에 순서가 반대로 되면 사용하기 

//     if(memoirList){
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
            nickname.innerText = memoirList[i].nickName;
            write.appendChild(nickname);
        }
//     }

    
    
// })
// .catch(function(error){
//     console.error('error 발생 : ', error);
// });

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

function registrationgo(){
    location.href = '../registration/registration.html';
}