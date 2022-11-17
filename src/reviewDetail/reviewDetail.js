const title = document.getElementById("title");
const userName = document.getElementById("userName");
const date = document.getElementById("date");
const goal = document.getElementById("goal");
const learned = document.getElementById("learned");
const felt = document.getElementById("felt");
const nextGoal = document.getElementById("nextGoal");
const edit = document.getElementById("edit");
const deletebtn = document.getElementById("delete");
axios.defaults.baseURL = 'http://172.20.10.7:8080';

deletebtn.addEventListener("click", deletereview);

axios.get('https://5540845b-638f-44d6-8017-aab2ea42f445.mock.pstmn.io/reviewDetail')
// , {
//   Headers: {Authorization: token}
// })
.then(function(result) {
  console.log('통신 결과 : ', result);

  const reviewList = result.data;

  title.innerText = reviewList.title;
  userName.innerText = reviewList.nickname;
  date.innerText = reviewList.date;
  goal.innerText = reviewList.goal;
  learned.innerText = reviewList.learned;
  felt.innerText = reviewList.felt;
  nextGoal.innerText = reviewList.nextGoal;

}).catch(function(error){
  console.error('error 발생 : ', error);
});

function deletereview(){
  axios.delete('/memoir/boardId')
}
