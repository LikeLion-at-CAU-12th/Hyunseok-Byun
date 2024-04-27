import Todo from "../DOM/Todo.js";
import CompleteController from "./CompleteController.js";

class TodoController {
  constructor(todo) {
    this.newTodo = new Todo(todo);
    this.delBtnNode = this.newTodo.getDelBtn();
    this.comBtnNode = this.newTodo.getCompleteBtn();
    this.innerNode = this.newTodo.getInnerText();

    this.text = todo; // 입력받은 todo내용을 보관할 변수 => 이걸로 CompleteController에 넘긴다

    this.delBtnNode.addEventListener("click", () => {
      this.delTodo();
      //TodoController 의 delBtn이 눌리는것은 이곳에서 진행되므로 이쪽에서 눌렸을 때 함수를 작성하는게 편하긴 하다 아마도?
    });
    this.comBtnNode.addEventListener("click", () => {
      this.doneTodo();
    });
  }

  addTodo() {
    const todoList = document.getElementById("to-do-list");
    const input = document.querySelector("input");
    todoList.appendChild(this.newTodo.addRow());
    input.value = ""; // 입력값을 받아와서 새로운 html 덩어리를 만들어내고 그 input 창의 입력값을 없애서 초기화한다
  }

  delTodo() {
    const todoList = document.getElementById("to-do-list");
    todoList.removeChild(this.newTodo.getRow());
  }

  doneTodo() {
    // this.innerNode.classList.toggle("done-text");
    // this.comBtnNode.classList.toggle("done-btn");
    // if (this.comBtnNode.innerText === "미완") {
    //   this.comBtnNode.innerText = "완료";
    //   //   this.innerNode.classList.remove("done-text");
    //   //   this.comBtnNode.classList.remove("done-btn");
    // } else {
    //   this.comBtnNode.innerText = "미완";
    //   //   this.innerNode.classList.add("done-text");
    //   //   this.comBtnNode.classList.add("done-btn");
    // }

    console.log(this.text);
    const completeController = new CompleteController(this.text);
    completeController.addCompleteTodo();

    this.delTodo();
  }
}

export default TodoController;
