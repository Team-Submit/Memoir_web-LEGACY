
const tokken = localStorage.getItem("accessTkn");
const pageId = localStorage.getItem("PageId");

const reply = document.getElementById("reply");
const cmnt = document.getElementById("cmnt");
const title = document.getElementById("title");
const userName = document.getElementById("userName");
const date = document.getElementById("date");
const goal = document.getElementById("goal");
const learned = document.getElementById("learned");
const felt = document.getElementById("felt");
const nextGoal = document.getElementById("nextGoal");

axios.defaults.baseURL = 'http://192.168.241.156:8080';

const URL = "/memoir/memoirId?" + pageId;

axios.get('URL')
.then(function(result){
  console.log('결과 : ', result);

  const reviewList = result.data;

  title.innerText = reviewList.title;
  userName.innerText = reviewList.nickName;
  date.innerText = reviewList.date;
  goal.innerText = reviewList.goal;
  learned.innerText = reviewList.learned;
  felt.innerText = reviewList.felt;
  nextGoal.innerText = reviewList.nextGoal;

  console.log(reviewList.commentsPostResponse);

  for(i = 0; i < reviewList.commentsPostResponse.length; i++){
    const feedback = document.querySelector(".feedback");

    const ul = document.createElement("ul");
    ul.classList.add("feedbackBox");
    feedback.appendChild(ul);

    const ol = document.createElement("ol");
    ol.classList.add("otherNameBox");
    ul.appendChild(ol);

    const img = document.createElement("img");
    img.classList.add("nien");
    img.src = "../assets/comment.svg";
    ol.appendChild(img);

    const li = document.createElement("li");
    li.id = "otherName";
    li.innerText = reviewList.commentsPostResponse[i].writer;
    ol.appendChild(li);

    const div = document.createElement("div");
    div.classList.add("a");
    ol.appendChild(div);

    const revise = document.createElement("a");
    revise.id = "revise";
    revise.innerText = "수정";
    div.appendChild(revise);

    const line = document.createElement("li");
    line.id = "line";
    div.appendChild(line);

    const cmntDelete = document.createElement("a");
    cmntDelete.id = "cmntDelete";
    cmntDelete.innerText = "삭제";
    div.appendChild(cmntDelete);

    const feedbackCnt = document.createElement("li");
    feedbackCnt.id = "feedbackCnt";
    feedbackCnt.innerText = reviewList.commentsPostResponse[i].comment;
    ul.appendChild(feedbackCnt);
  }
})
.catch(function(error){
  console.error('error 발생 : ', error);
})


const edit = document.getElementById("edit");
const deletebtn = document.getElementById("delete");

edit.addEventListener("click", reviewEdit);
deletebtn.addEventListener("click", deletereview);

function deletereview(){
  axios.delete('/memoir/boardId')
  .then(function(result){
    console.log('결과 : ', result);
    alert("삭제되었습니다.")
    location.href = "../mainpage/main.html";
  })
  .catch(function(error){
    console.error('error 발생 : ', error);
  });
}

function reviewEdit(){
  location.href = "../textFix/textFix.html";
}




