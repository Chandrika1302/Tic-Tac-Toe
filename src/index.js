import "./style.css";

const gameMainDiv = document.querySelector("#game-grid");
const gameGridItems = document.querySelectorAll(".items");
const heading = document.querySelector("#player-turn");
const winsDiv = document.querySelector(".win");

const gameBoard = {
  board: [],
};
const player1 = {
  name: "p1",
  marker: "o",
};
const player2 = {
  name: "p2",
  marker: "x",
};

const body = document.body;
let count = 0;

function display(e) {
  if (winsDiv.innerText == "x wins!!") {
    for (let i = 0; i < 9; i++) {
      gameGridItems[i].innerText = "";
      body.removeEventListener("click", display);
    }
  }
  const gridBox = e.target;
  if (heading.innerText == "player1") {
    if (gridBox.className == "items" && count % 2 == 0 && count < 10) {
      if (gridBox.innerText == "") {
        gridBox.innerText = player1.marker;
        gameBoard.board.push(gridBox.innerText);
        count += 1;
        heading.innerText = "player2";
      }
      winner();
    }
    if (winsDiv.innerText == "x wins!!") {
      body.removeEventListener("click", display);
    }
  } else if (heading.innerText == "player2") {
    if (gridBox.className == "items" && count % 2 == 1 && count < 10) {
      if (gridBox.innerText == "") {
        gridBox.innerText = player2.marker;
        gameBoard.board.push(gridBox.innerText);
        count += 1;
        heading.innerText = "player1";
      }
    }
    winner();
  }
  if (winsDiv.innerText == "x wins!!") {
    body.removeEventListener("click", display);
  }
}
const winner = function () {
  if (
    gameGridItems[0].innerText == "x" &&
    gameGridItems[1].innerText == "x" &&
    gameGridItems[2].innerText == "x"
  ) {
    winsDiv.innerText = "x wins!!";
  } else if (
    gameGridItems[0].innerText == "x" &&
    gameGridItems[3].innerText == "x" &&
    gameGridItems[6].innerText == "x"
  ) {
    winsDiv.innerText = "x wins!!";
  } else if (
    gameGridItems[0].innerText == "x" &&
    gameGridItems[4].innerText == "x" &&
    gameGridItems[8].innerText == "x"
  ) {
    winsDiv.innerText = "x wins!!";
  } else if (
    gameGridItems[3].innerText == "x" &&
    gameGridItems[4].innerText == "x" &&
    gameGridItems[5].innerText == "x"
  ) {
    winsDiv.innerText = "x wins!!";
  } else if (
    gameGridItems[2].innerText == "x" &&
    gameGridItems[5].innerText == "x" &&
    gameGridItems[8].innerText == "x"
  ) {
    winsDiv.innerText = "x wins!!";
  } else if (
    gameGridItems[1].innerText == "x" &&
    gameGridItems[4].innerText == "x" &&
    gameGridItems[7].innerText == "x"
  ) {
    winsDiv.innerText = "x wins!!";
  } else if (
    gameGridItems[6].innerText == "x" &&
    gameGridItems[7].innerText == "x" &&
    gameGridItems[8].innerText == "x"
  ) {
    winsDiv.innerText = "x wins!!";
  }
};

function init() {
  body.addEventListener("click",display);
}
init();
