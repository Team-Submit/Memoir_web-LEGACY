
const token = localStorage.getItem("accessTkn");
const pageId = localStorage.getItem("PageId");
let Nickname = "";

const title = document.getElementById("title");
const userName = document.getElementById("userName");
const date = document.getElementById("date");
const goal = document.getElementById("goal");
const learned = document.getElementById("learned");
const felt = document.getElementById("felt");
const nextGoal = document.getElementById("nextGoal");

axios.defaults.baseURL = 'http://192.168.241.156:8080';

axios.get('/memoir', {
  params: {
    "memoirId" : pageId
  }
})
.then(function(result){
  console.log('결과 : ', result);

  const reviewList = result.data;
  title.innerText = reviewList.title;
  userName.innerText = reviewList.nickName;
  date.innerText = reviewList.modifiedAt;
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
  axios.delete('/memoir',{
      params: {
        "memoirId": pageId
    },
      headers: {
          "Authorization" : `Bearer ${token}`,
      }
  })
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


axios.get("comment/" + pageId)
.then(function(result){
  console.log('결과 : ', result);
  const reviewList = result.data;
  if(reviewList){
    for(i = 0; i < reviewList.length; i++){
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
      li.innerText = reviewList[i].writer;
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
      feedbackCnt.innerText = reviewList[i].comment;
      ul.appendChild(feedbackCnt);
    }
  }
})
.catch(function(error){
  console.error('error 발생 : ', error);
});



const reply = document.getElementById("reply");
const cmnt = document.getElementById("cmnt");
cmnt.addEventListener("keyup", function(event){
  if(event.keyCode == 13){
    reply.click();
  }
});
reply.addEventListener("click", CommentAdd);

function CommentAdd(){
  axios({
    method: 'post',
    url: '/comment/' + pageId,
    data:{
      "content": cmnt.value
    },
    headers: {
      "Authorization": `Bearer ${token}`,
    }
  })
  .then(function(result){
    console.log('결과 : ', result);
    const review = result.data.commentsPostResponse;
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
    li.innerText = review.writer;
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
    feedbackCnt.innerText = review.content;
    ul.appendChild(feedbackCnt);
    cmnt.value = "";
  })
  .catch(function(error){
    console.error('에러 : ', error);
  });
}

