axios.defaults.baseURL = 'http://192.168.52.156:8080';

const tokken = localStorage.getItem("accessTkn");

const submit = document.getElementById("submit");
const title = document.getElementById("title");
const goal = document.getElementById("goal");
const learned = document.getElementById("learned");
const felt = document.getElementById("felt");
const nextGoal = document.getElementById("nextGoal");

submit.addEventListener("click", regPost);
const textValue = "";

function regPost() {
  inputCheck();
}

function inputCheck(){
  switch(textValue){
    case title.value:
      alert("제목을 입력해주세요");
      break;
    case goal.value:
      alert("목표을 입력해주세요");
      break;
    case learned.value:
      alert("배운점을 입력해주세요");
      break;
    case felt.value:
      alert("느낀점을 입력해주세요");
      break;
    case nextGoal.value:
      alert("다음 주의 목표를 입력해주세요");
      break;
    default:
      axios({
        method: 'post',
        url: '/memoir/write',
        data:{
          "title": title.value,
          "goal": goal.value,
          "learned": learned.value,
          "felt": felt.value,
          "nextGoal": nextGoal.value
        },
        headers: {
          "Authorization": `Bearer ${tokken}`,
        }
      })
        .then((res) => {
          alert("작성되셨습니다.");
          location.href = "../mainpage/main.html";
        })
        .catch((error) => {
          console.log(error);
          throw new Error(error);
        });
  }
}