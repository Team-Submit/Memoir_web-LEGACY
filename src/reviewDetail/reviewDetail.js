
const token = localStorage.getItem("accessTkn");
const pageId = localStorage.getItem("PageId");

const title = document.getElementById("title");
const userName = document.getElementById("userName");
const date = document.getElementById("date");
const goal = document.getElementById("goal");
const learned = document.getElementById("learned");
const felt = document.getElementById("felt");
const nextGoal = document.getElementById("nextGoal");

axios.defaults.baseURL = 'http://192.168.69.156:8080';

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

function deletereview(CommentId){
  axios.delete('/memoir',{
      params: {
        "memoirId": CommentId
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


axios.get("comment/" + `${pageId}`)
.then(function(result){
  console.log('결과 : ', result);
  const reviewList = result.data;
  if(reviewList){
    for(i = 0; i < reviewList.length; i++){
      const feedback = document.querySelector(".feedback");
  
      const ul = document.createElement("ul");
      ul.classList.add("feedbackBox");
      ul.id = reviewList[i].id;
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
      li.innerText = reviewList[i].nickname;
      ol.appendChild(li);
  
      const div = document.createElement("div");
      div.classList.add("a");
      ol.appendChild(div);
  
  
      const line = document.createElement("li");
      line.id = "line";
      div.appendChild(line);
  
      const cmntDelete = document.createElement("a");
      cmntDelete.id = "cmntDelete";
      cmntDelete.innerText = "삭제";
      cmntDelete.addEventListener("click", idOnclick);
      function idOnclick(){
        CommentDelete(ul.id);
      }
      div.appendChild(cmntDelete);
  
      const feedbackCnt = document.createElement("li");
      feedbackCnt.id = "feedbackCnt";
      feedbackCnt.innerText = reviewList[i].content;
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
  if(token !== ''){
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
      location.href = "../reviewDetail/reviewDetail.html";
    })
    .catch(function(error){
      console.error('에러 : ', error);
    });
  }else{
    alert("로그인해주세여!");
    location.href = "../login/login.html";
  }
}

function CommentDelete(commentId){
  if(commentId == ''){
    alert("새로고침해주세요...😭");
  }else{
    axios({
      method: 'delete',
      url: '/comment/delete/' + commentId,
      headers: {
        "Authorization": `Bearer ${token}`
      }
      })
    .then(function(result){
      console.log("결과 : ", result);
      alert("댓글이 삭제되었습니다.");
      location.href = "reviewDetail.html";
    })
    .catch(function(error){
      console.error("에러 : ", error);
    });
  }
}

function CommentFix(commentId){
  console.log(commentId);
  
}