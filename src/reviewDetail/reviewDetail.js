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

reply.addEventListener("click", button);
cmntDelete.addEventListener("click", a);

function button(event) {
  event.preventDefault();
  if (cmnt == null) {
    console.log("짜잔");
  } else {
    var input = cmnt.value;
    console.log(input);

    const ul = document.createElement("ul");
    ul.classList.add("feedbackBox");

    feedback.appendChild(ul);

    const ol = document.createElement("ol");
    ol.classList.add("otherNameBox");

    ul.appendChild(ol);

    const ni = document.createElement("img");
    ni.classList.add("nien");
    ni.src = "../assets/comment.svg";

    const on = document.createElement("li");
    on.id = "otherName";
    on.innerText = "예?";

    const div = document.createElement("div");
    div.classList.add("a");

    ol.appendChild(ni);
    ol.appendChild(on);
    ol.appendChild(div);

    const re = document.createElement("a");
    re.id = "revise";
    re.innerText = "수정";
    re.href = "";

    const ln = document.createElement("li");
    ln.id = "line";
    ln.innerText = "|";

    const de = document.createElement("a");
    de.id = "cmntDelete";
    de.innerText = "삭제";

    div.appendChild(re);
    div.appendChild(ln);
    div.appendChild(de);

    const fb = document.createElement("li");
    fb.id = "feedbackCnt";
    fb.innerText = cmnt.value;

    ul.appendChild(fb);

    document.getElementById("cmnt").value = "";
  }
}

// 댓글 없으면 댓글 창 안뜨게 하는 코드
if (feedbackCnt == "") {
  function deleteDiv() {
    const del = document.querySelector(".feedbackBox");

    del.remove();
  }
}

// 댓글 삭제 누르면 없어지게 하는 코드
function a() {
  // 끼야야야야야악 어려워
  const feedbackBox = document.getElementsByClassName("feedbackBox");

  feedbackBox.remove();
}

//const url = "http://10.156.147.134:8080/memoir/{id}";
const url =
  "https://5540845b-638f-44d6-8017-aab2ea42f445.mock.pstmn.io/reviewDetail";

axios
  .get(url)
  .then(function (result) {
    console.log("통신 결과 ", result);
    const contents = result.data.contents;

    title.innerText = contents[0].title;
    userName.innerText = contents[0].nickname;
    date.innerText = contents[0].date;
    goal.innerText = contents[0].goal;
    learned.innerText = contents[0].learned;
    felt.innerText = contents[0].felt;
    nextGoal.innerText = contents[0].nextGoal;
    otherName.innerText = contents[0].commentsPostResponse[0].writer;
    feedbackCnt.innerText = contents[0].commentsPostResponse[0].comment;
  })
  .catch(function (error) {
    console.error(error);
  });
