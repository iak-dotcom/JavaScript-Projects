const inputBox = document.getElementById("input-box");

const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("you must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  //   to save the data after adding an item
  saveData();
}
// when we click on list it would check and uncheck
// and X would delete the list content
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);
// To save the data in browser
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
//To show the saved data
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
