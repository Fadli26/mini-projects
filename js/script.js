const container = document.querySelector(".container");
const keyword = document.querySelector(".keyword");
const list = document.querySelector(".kotak ul");

function createElement() {
    let liBaru = document.createElement("li");
    let textKeyword = document.createTextNode(keyword.value);
    let spankeyword = document.createElement("span");
    let txtClose = document.createTextNode("X");
    let checkbox = document.createElement("input");
    let close = document.createElement("span");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("class", "check");
    close.setAttribute("class", "close");
    close.appendChild(txtClose);
    liBaru.appendChild(checkbox);
    spankeyword.appendChild(textKeyword);
    liBaru.appendChild(spankeyword);
    liBaru.appendChild(close);
    list.appendChild(liBaru);
}

container.addEventListener("click", function (e) {
    if (e.target.className == "btn") {
        if (keyword.value == "") {
            alert("masukan keyword!");
        } else {
            createElement();
            keyword.value = "";
        }
    } else if (e.target.className == "close") {
        e.target.parentElement.style.display = "none";
    } else if (e.target.className == "check") {
        if (e.target.checked) {
            e.target.nextElementSibling.classList.add("remove");
        } else {
            e.target.nextElementSibling.classList.remove("remove");
        }
    } else if (e.target.className == "clear") {
        e.target.previousElementSibling.innerHTML = "";
    }
});