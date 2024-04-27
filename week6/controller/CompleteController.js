import CompleteTodo from "../DOM/Complete.js";
import TodoController from "./TodoController.js";

class CompleteController {
  constructor(todo) {
    this.newTodo = new CompleteTodo(todo);
    this.delBtnNode = this.newTodo.getDelBtn();
    this.returnBtnNode = this.newTodo.getCompleteBtn();
    this.innerNode = this.newTodo.getInnerText();

    this.text = todo; // 입력받은 todo내용을 보관할 변수 => 이걸로 CompleteController에 넘긴다

    this.delBtnNode.addEventListener("click", () => {
      this.delCompleteTodo();
    });
    this.returnBtnNode.addEventListener("click", () => {
      this.returnCompleteTodo();
    });
  }

  addCompleteTodo() {
    const completeList = document.getElementById("complete-list");
    // const input = document.querySelector("input");
    completeList.appendChild(this.newTodo.addRow());
    // input.value = ""; // 입력값을 받아와서 새로운 html 덩어리를 만들어내고 그 input 창의 입력값을 없애서 초기화한다
  }

  delCompleteTodo() {
    const completeList = document.getElementById("complete-list");
    completeList.removeChild(this.newTodo.getRow());
  }

  returnCompleteTodo() {
    const todoController = new TodoController(this.text);
    todoController.addTodo();
    this.delCompleteTodo();
  }
}

export default CompleteController;
