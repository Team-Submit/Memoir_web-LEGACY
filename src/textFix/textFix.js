axios.defaults.baseURL = 'http://192.168.69.156:8080';

const tokken = localStorage.getItem("accessTkn");

const title = document.getElementById('title');
const goal = document.getElementById('goal');
const learned = document.getElementById('learned');
const felt = document.getElementById('felt');
const nextGoal = document.getElementById('nextGoal');

const fixBtn = document.getElementById('fix');
fixBtn.addEventListener("click", Fixchange);

function Fixchange(){
    axios({
        method: 'patch',
        url: '/memoir/update',
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
          alert("수정되셨습니다.");
          location.href = "../mainpage/main.html";
        })
        .catch((error) => {
          console.log(error);
          throw new Error(error);
        });
}