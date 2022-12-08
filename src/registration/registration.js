axios.defaults.baseURL = 'http://192.168.241.107:8080';

const tokken = localStorage.getItem("accessTkn");

const submit = document.getElementById("submit");

submit.addEventListener("click", regPost);

function regPost() {
  const title = document.getElementById("title");
  const goal = document.getElementById("goal");
  const learned = document.getElementById("learned");
  const felt = document.getElementById("felt");
  const nextGoal = document.getElementById("nextGoal");

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
