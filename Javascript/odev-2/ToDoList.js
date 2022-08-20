let addBtn = document.getElementById("add-btn");
let listName = document.getElementById("list-name");
let newUl = document.querySelector("ul");

let toDoLists = localStorage.getItem("toDoList")
  ? JSON.parse(localStorage.getItem("toDoList"))
  : [];

localStorage.setItem("toDoList", JSON.stringify(toDoLists));
const data = JSON.parse(localStorage.getItem("toDoList"));

function alert(a) {
  a.classList.add("checked");
}

function alert2(a) {
  localStorage.clear();
  a.parentElement.remove();
}

addBtn.addEventListener("click", function () {
  if (listName.value != 0) {
    let newDiv = document.createElement("div");
    newDiv.setAttribute("onclick", "alert(this);");

    let newLi = document.createElement("li");
    let newA = document.createElement("a");

    newA.setAttribute("onclick", "event.stopPropagation(); alert2(this);");

    newLi.innerHTML = `${listName.value}`;
    newA.innerHTML = `&times;`;

    newDiv.append(newLi, newA);

    newUl.append(newDiv);

    toDoLists.push(listName.value);
    localStorage.setItem("toDoList", JSON.stringify(toDoLists));

    listName.value = "";

    $(document).ready(function () {
      $(".toast.success").toast("show");
    });
  } else {
    $(document).ready(function () {
      $(".toast.error.hide").toast("show");
    });
  }
});
function addList(text) {
  let newDiv = document.createElement("div");
  newDiv.setAttribute("onclick", "alert(this);");

  let newLi = document.createElement("li");
  let newA = document.createElement("a");

  newA.setAttribute("onclick", "event.stopPropagation(); alert2(this);");

  newLi.innerHTML = text;
  newA.innerHTML = `&times;`;

  newDiv.append(newLi, newA);

  newUl.append(newDiv);
}
data.forEach((item) => {
  addList(item);
});
