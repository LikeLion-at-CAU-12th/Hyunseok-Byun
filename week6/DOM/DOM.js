class DOM {
  // DOM요소를 생성하는 클래스 생성하려는 html요소, 내용, 그 html에 사용된 클래스명을 생성자를 통해 받는다
  constructor(tagName, innerText, className) {
    this.node = document.createElement(tagName); // tagName을 가진 html 요소를 생성
    this.node.innerText = innerText; // 해당 html요소 innerText 값 초기화(=대입)
    if (className) {
      this.node.classList.add(className);
    }
  }
}

export default DOM;
