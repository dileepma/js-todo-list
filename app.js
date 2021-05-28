const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

function addTodo(e) {
  e.preventDefault();
  const trashBtn = `<button class='trash-btn'><i class='fa fas trash-btn'></i></button>`;
  const completedBtn = `<button class='complete-btn'><i class='fa fas trash-btn'></i></button>`;
  const newTodo = `<li class='todo-item'>${todoInput.value}</li>`;
  const todoDiv = `<div class="todo">${newTodo} ${completedBtn} ${trashBtn}</div>`;

  if (todoInput.value == "") {
    alert("please add todo");
  } else {
    todoList.insertAdjacentHTML("beforeend", todoDiv);
    todoInput.value = "";
  }
}

function deleteCheck(e) {
  e.preventDefault();
  const item = e.target;
  if (item.classList[0] === "trash-btn") {
    todo = item.parentElement;
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  if (item.classList[0] === "complete-btn") {
    todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}
