const loginbtn = document.querySelector(".loginbtn");
const mainlist = document.querySelectorAll(".one");

loginbtn.addEventListener("click", logingo);
mainlist.forEach( function(box) {
    box.addEventListener("click", reviewDetail)
});

function logingo(){
    location.href = '../login/login.html';
}

function reviewDetail(){
    location.href = '../reviewDetail/reviewDetail.html'
}