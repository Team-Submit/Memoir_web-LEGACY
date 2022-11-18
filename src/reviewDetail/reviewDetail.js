axios.defaults.baseURL = "http://172.20.10.7:8080";

const tokken = localStorage.getItem("accessTkn");
const pageId = localStorage.getItem("PageId");

const reply = document.getElementById("reply");
const cmnt = document.getElementById("cmnt");
const feedback = document.querySelector(".feedback");
const title = document.getElementById("title");
const userName = document.getElementById("userName");
const date = document.getElementById("date");
const goal = document.getElementById("goal");
const learned = document.getElementById("learned");
const felt = document.getElementById("felt");
const nextGoal = document.getElementById("nextGoal");
const otherName = document.getElementById("otherName");
const feedbackCnt = document.getElementById("feedbackCnt");
const cmntDelete = document.getElementById("cmntDelete");

axios.get('https://5540845b-638f-44d6-8017-aab2ea42f445.mock.pstmn.io/reviewDetail')
.then(function(result){
  console.log('결과 : ', result);

  const reviewList = result.data;

  title.innerText = reviewList.title;
  userName.innerText = reviewList.nickname;
  date.innerText = reviewList.date;
  goal.innerText = reviewList.goal;
  learned.innerText = reviewList.learned;
  felt.innerText = reviewList.felt;
  nextGoal.innerText = reviewList.nextGoal;
  
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
    location.href = "../mainpage/main.html";
  })
  .catch(function(error){
    console.error('error 발생 : ', error);
  });
}