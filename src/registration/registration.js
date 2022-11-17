axios.defaults.baseURL = "http://172.20.10.7:8080";

const tokken = localStorage.getItem("access_token");

const submit = document.getElementById("submit");

submit.addEventListener("click", regPost);

function regPost() {
  const title = document.getElementById("title");
  const goal = document.getElementById("goal");
  const learned = document.getElementById("learned");
  const felt = document.getElementById("felt");
  const nextGoal = document.getElementById("nextGoal");

  axios
    .post(
      "/memoir/write",
      {
        headers: {
          "access-token": tokken,
        },
      },
      {
        data: {
          title: title.value,
          goal: goal.value,
          learned: learned.value,
          felt: felt.value,
          nextGoal: nextGoal.value,
        },
      }
    )
    .then((res) => {
      location.href = "../mainpage/main.html";
    })
    .catch((error) => {
      console.log(error);
      throw new Error(error);
    });
}
