// 1. Js 파일에서 접근해야되는 HTML DOM 요소들 선언

const myHandText = document.getElementById("my-hand-text");
const myHandIcon = document.getElementById("my-hand-icon");

const computerText = document.getElementById("computer-hand-text");
const computerIcon = document.getElementById("computer-hand-icon");

const rockBtn = document.getElementById("rock");
const scissorsBtn = document.getElementById("scissors");
const paperBtn = document.getElementById("paper");

// 점수판에 접근하기 위한 DOM요소
const playerScore = document.querySelector(".my-score");
const computerScore = document.querySelector(".computer-score");

//리셋 버튼 DOM요소
const resetBtn = document.getElementById("reset-button");

// 중앙의 결과 화면 DOM요소
const resultText = document.getElementById("display-result");

// 다크모드 버튼 DOM요소
const darkModeBtn = document.querySelector(".darkModeBtn");

// 2. 선언한 dom 요소에 이벤트 생성

rockBtn.addEventListener("click", displayMychoice);
scissorsBtn.addEventListener("click", displayMychoice);
paperBtn.addEventListener("click", displayMychoice);

// reset 버튼 이벤트
resetBtn.addEventListener("click", resetGame);

// 다크모드 이벤트
darkModeBtn.addEventListener("click", darkMode);

function displayMychoice(e) {
  let clickedBtn = e.currentTarget.id;
  let clickedIcon = e.target.className;

  myHandText.innerText = clickedBtn;
  myHandIcon.className = clickedIcon;

  console.log(clickedBtn);
  start(clickedBtn);
}

function getComChoice() {
  const randomValue = {
    0: ["rock", "fa-regular fa-hand-back-fist change"],
    1: ["scissors", "fa-regular fa-hand-scissors fa-rotate-90"],
    2: ["paper", "fa-regular fa-hand change"],
  };

  const randomIndex = Math.floor(Math.random() * 3);

  //   console.log(randomValue[0]);   배열을 반환
  //   console.log(randomValue[0][1]);    배열 요소 반환
  return randomValue[randomIndex];
}

function displayComChoice(result) {
  computerText.innerText = result[0]; // innerText를 통해 해당 rock, scissors, paper 텍스트가 출력되게 함
  computerIcon.className = result[1]; // 폰트어썸에서 가져온 아이콘 사용하므로 클래스 이름을 추가해서 아이콘을 보이게 함
}

function start(myChoice) {
  let resultArray = getComChoice();
  displayComChoice(resultArray); // 각 아이콘에 맞는 클래스를 html의 각 요소에 대입하게 된다

  // 가위바위보 결과를 보여주는 함수 나의 선택과 컴퓨터의 선택을 매개변수로 보낸다
  result(myChoice, resultArray);
}

// result 함수 start함수내에서 실행된다. 승패의 결과를 보여주고 score 변동을 나타냄
function result(myChoice, resultArray) {
  // mychoice=> rock,scissors,paper 중 하나
  if (myChoice === "rock") {
    if (resultArray[0] === "rock") {
      resultText.innerText = "Draw";
    } else if (resultArray[0] === "scissors") {
      resultText.innerText = "Win";
      playerScore.innerText++;
    } else {
      resultText.innerText = "Lose";
      computerScore.innerText++;
    }
  } else if (myChoice === "scissors") {
    if (resultArray[0] === "rock") {
      resultText.innerText = "Lose";
      computerScore.innerText++;
    } else if (resultArray[0] === "scissors") {
      resultText.innerText = "Draw";
    } else {
      resultText.innerText = "Win";
      playerScore.innerText++;
    }
  } else {
    if (resultArray[0] === "rock") {
      resultText.innerText = "Win";
      playerScore.innerText++;
    } else if (resultArray[0] === "scissors") {
      resultText.innerText = "Lose";
      computerScore.innerText++;
    } else {
      resultText.innerText = "Draw";
    }
  }
}

function resetGame() {
  // 점수 게임 결과 초기화
  resultText.innerText = "";
  playerScore.innerText = "0";
  computerScore.innerText = "0";

  // 플레이어와 컴퓨터의 아이콘 텍스트 초기화(삭제)
  myHandText.innerText = "";
  myHandIcon.className = "";

  computerText.innerText = "";
  computerIcon.className = "";
}

// 다크 모드 함수
function darkMode(event) {
  const body = document.querySelector("body");
  const contentsWrapper = document.getElementById("contents-wrapper");
  const displayTitle = document.querySelectorAll(".title");
  // console.log(displayTitle);

  // console.log(event);
  contentsWrapper.classList.toggle("darkMode");
  displayTitle[0].classList.toggle("darkMode");
  displayTitle[1].classList.toggle("darkMode");
  body.classList.toggle("darkMode");
  resetBtn.classList.toggle("darkMode");

  event.target.classList.toggle("darkMode");
  if (event.target.classList.contains("darkMode")) {
    event.target.innerText = "White Mode";
  } else {
    event.target.innerText = "Dark Mode";
  }
}
