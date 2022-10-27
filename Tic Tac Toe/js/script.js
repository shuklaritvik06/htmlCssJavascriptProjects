const choiceArea = document.getElementsByClassName("box");
const zeroScoreArea = document.getElementById("zeroScore");
const xScoreArea = document.getElementById("xScore");

zeroScoreArea.innerText = localStorage.getItem("zeroScore");
xScoreArea.innerText = localStorage.getItem("xScore");

let xScore = 0;
let zeroScore = 0;

let choice = "X";
let isGameOver = false;

const changeTurn = () => (choice === "X" ? "O" : "X");

const checkWinner = () => {
  const playerChoice = document.getElementsByClassName("boxtext");
  const winCases = [
    [0, 1, 2, 5, 5, 0],
    [3, 4, 5, 5, 15, 0],
    [6, 7, 8, 5, 25, 0],
    [0, 3, 6, -5, 15, 90],
    [1, 4, 7, 5, 15, 90],
    [2, 5, 8, 15, 15, 90],
    [0, 4, 8, 5, 15, 45],
    [2, 4, 6, 5, 15, 135],
  ];
  winCases.forEach((e) => {
    if (
      playerChoice[e[0]].innerText === playerChoice[e[1]].innerText &&
      playerChoice[e[1]].innerText === playerChoice[e[2]].innerText &&
      playerChoice[e[0]].innerText !== ""
    ) {
      if (playerChoice[e[0]].innerText === "X") {
        ++xScore;
        localStorage.setItem("xScore", xScore);
        xScoreArea.innerText = localStorage.getItem("xScore");
      } else{
        ++zeroScore;
        localStorage.setItem("zeroScore", zeroScore);
        zeroScoreArea.innerText = localStorage.getItem("zeroScore");
      }
      document.getElementById("info").innerText =
        playerChoice[e[0]].innerText + " Won";
      isGameOver = true;
      document.getElementById(
        "line"
      ).style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
      document.getElementById("line").style.width = "20vw";
    }
  });
};

Array.from(choiceArea).forEach((choiceElement) => {
  const choiceText = choiceElement.getElementsByClassName("boxtext")[0];
  choiceElement.addEventListener("click", () => {
    if (choiceText.innerText === "") {
      choiceText.innerText = choice;
      choice = changeTurn();
      checkWinner();
      if (!isGameOver) {
        document.getElementById("info").innerText = "Turn for " + choice;
      }
    }
  });
});

reset.addEventListener("click", () => {
  let choiceValues = document.getElementsByClassName("boxtext");
  Array.from(choiceValues).forEach((element) => {
    element.innerText = "";
  });
  choice = "X";
  isGameOver = false;
  document.getElementById("info").innerText = "";
  document.getElementById("line").style.width = "0vw";
  localStorage.setItem("zeroScore", 0);
  localStorage.setItem("xScore", 0);
});
