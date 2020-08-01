const container = document.querySelector(".container");
const keyword = document.querySelector(".keyword");
const list = document.querySelector(".kotak ul");

// get current id of list. id = index of list
let currentId = list.childElementCount;

function createElement(id) {
  let liBaru = document.createElement("li");
  let textKeyword = document.createTextNode(keyword.value);
  let labelkeyword = document.createElement("label");
  let txtClose = document.createTextNode("X");
  let checkbox = document.createElement("input");
  let close = document.createElement("span");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("class", "check");
  checkbox.setAttribute("id", id);
  labelkeyword.setAttribute("for", id)
  close.setAttribute("class", "close");
  close.appendChild(txtClose);
  liBaru.appendChild(checkbox);
  labelkeyword.appendChild(textKeyword);
  liBaru.appendChild(labelkeyword);
  liBaru.appendChild(close);
  list.appendChild(liBaru);

  currentId++;
}

container.addEventListener("click", function (e) {
  if (e.target.className == "btn") {
    if (keyword.value == "") {
      alert("masukan keyword!");
    } else {
      createElement(currentId);
      keyword.value = "";
    }
  } else if (e.target.className == "close") {
    e.target.parentElement.style.display = "none";
  } else if (e.target.className == "check") {
    if (e.target.checked) {
      e.target.nextElementSibling.classList.add("remove");
      // e.target.nextElementSibling.style.textDecoration = "line-through red";
      // e.target.nextElementSibling.style.color = "red";
    } else {
      e.target.nextElementSibling.classList.remove("remove");
      // e.target.nextElementSibling.style.textDecoration = "";
      // e.target.nextElementSibling.style.color = "";
    }
  } else if (e.target.className == "clear") {
    e.target.previousElementSibling.innerHTML = "";
  }
});