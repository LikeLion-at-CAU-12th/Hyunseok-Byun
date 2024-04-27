import TodoController from "./controller/TodoController.js";

const addBtn = document.getElementById("input");
const input = document.querySelector("input");

addBtn.addEventListener("click", () => {
  // console.log(input.value);
  // console.log(typeof input.value);
  const todoController = new TodoController(input.value);
  todoController.addTodo();
});
