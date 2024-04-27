import Button from "./Button.js";
import Div from "./Div.js";
import Image from "./Image.js";

class CompleteTodo {
  constructor(todo) {
    this.row = new Div("", "row").node; // row는 div태그를 가르킨다 .node가 div요소를 반환함
    this.textBox = new Div(todo, "text-box");
    this.returnBtn = new Image("", "img");
    console.log(this.returnBtn);
    this.returnBtn.node.src = "../week6/images/돌아가기버튼.png";
    this.delBtn = new Image("", "img");
    this.delBtn.node.src = "../week6/images/삭제버튼.png";
  }
  addRow() {
    [this.textBox, this.returnBtn, this.delBtn].forEach((dom) => {
      // dom은 각각 배열의 요소를 가르킨다.
      this.row.appendChild(dom.node); // row태그 안에 위의 3가지의 html요소를 순서대로 넣는다. row가 컨테이너 역할을 함
    });
    return this.row;
  }
  getRow() {
    return this.row;
  }
  getCompleteBtn() {
    return this.returnBtn.node;
  }
  getDelBtn() {
    return this.delBtn.node;
  }
  getInnerText() {
    return this.textBox.node; // DOM클래스의 속성인 innerText를 가르킴
  }
}

export default CompleteTodo;
