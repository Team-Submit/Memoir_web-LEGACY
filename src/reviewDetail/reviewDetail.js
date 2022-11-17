axios.defaults.baseURL = "http://172.20.10.7:8080";

const tokken = localStorage.getItem("access_token");

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

cmntDelete.addEventListener("click", a);

// 댓글 없으면 댓글 창 안뜨게 하는 코드
// 아잉 모르겠당
if (feedbackCnt == "") {
  function deleteDiv() {
    const del = document.querySelector(".feedbackBox");

    del.remove();
  }
}

// 댓글 가져오기
axios
  .get("/comment/{memoirId}")
  .then(function (result) {
    console.log("통신 결과 ", result);
    const contents = result.data;

    for (i = 0; i < contents.length; i++) {
      otherName.innerText = contents[i].nickname;
      feedbackCnt.innerText = contents[i].content;
    }
  })
  .catch(function (error) {
    console.error(error);
  });

// 댓글 등록하기
function button(event) {
  axios
    .post(
      "/comment/memoir",
      {
        commentsPostResponse: [
          {
            nickName: nickName.value,
            content: content.value,
          },
        ],
      },
      {
        headers: {
          "access-token": tokken,
        },
      }
    )
    .then(function (response) {
      console.log(response);

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
        on.innerText = otherName.value;

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
    })
    .catch(function (error) {
      console.error(error);
    });
}
reply.addEventListener("click", button);
// 댓글 수정하기
axios
  .patch("/comment/memoir", {
    headers: {
      "access-token": tokken,
    },
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.error(error);
  });

// 댓글 삭제하기
axios
  .delete("/comment/memoir", {
    headers: {
      "access-token": tokken,
    },
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.error(error);
  });

  // 댓글 삭제 누르면 없어지게 하는 코드
function a() {
  // 끼야야야야야악 어려워... 뭐야 짱 쉽잖아? 취소
  document.querySelector(".feedbackBox").style.display = "none";
}

// 상세보기 글 가져오기
axios
  .get("/memoir/memoirId?{Id}")
  .then(function (response) {
    console.log(response);

    title.innerText = contents[0].title;
    userName.innerText = contents[0].nickname;
    date.innerText = contents[0].date;
    goal.innerText = contents[0].goal;
    learned.innerText = contents[0].learned;
    felt.innerText = contents[0].felt;
    nextGoal.innerText = contents[0].nextGoal;
  })
  .catch(function (error) {
    console.error(error);
  });

axios
  .post(
    "/comment/memoir",
    {
      headers: {
        "access-token": tokken,
      },
    },
    {
      data: {
        commentsPostResponse: [
          {
            writer: "최성현",
            content: "정말 유익해요",
          },
        ],
      },
    }
  )
  .then(function (result) {
    console.log("통신 결과 ", result);
    const contents = result.data.contents;
  })
  .catch(function (error) {
    console.error(error);
  });

//상세보기 수정
axios
  .patch("/memoir/update", {
    headers: {
      "access-token": tokken,
    },
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.error(error);
  });

// 상세보기 글 삭제하기
axios
  .delete("/memoir/boardId", {
    headers: {
      "access-token": tokken,
    },
  })
  .then(function (response) {
    console.log(response);
    alert("삭제되었습니다.");
    location.href = "../mainpage/main.html";
  })
  .catch(function (error) {
    console.error(error);
  });
