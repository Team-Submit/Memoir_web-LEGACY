const reply = document.getElementById("reply");
const cmnt = document.getElementById("cmnt");
const feedback = document.querySelector(".feedback");

reply.addEventListener("click", button);

function button(event) {
  event.preventDefault();
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