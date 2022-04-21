//import state fro mthtat file
import { checkWinner } from "./helpers";
import {
  gridCells,
  player1Marker,
  player2Marker,
  turn,
  tie,
  toggleTurn,
  getActivePlayerMarker,
  playerChance,
  changeTurn,
  ifWinner,
  checkTie,
} from "./board";

const gameMainDiv = document.querySelector("#game-grid");
const gameGridItems = document.querySelectorAll(".items");
const heading = document.querySelector("#player-turn");
const winsDiv = document.querySelector(".win");
// all dom elements
gameMainDiv.addEventListener("click", display);
heading.innerText="player" + "(" + player1Marker + ")'s chance"

function display(e) {
  
  const gridBox = e.target;
  const index = gridBox.getAttribute("data-index");
  if (turn && gridCells[index]==null) {
    heading.innerText = "player" + "(" + playerChance() + ")'s chance";
    gridCells[index] = getActivePlayerMarker();
    gridBox.innerText = gridCells[index];
    console.log(gridCells);
    toggleTurn();
  }
  checkWinner();
  // if(checkTie()){
  //   // winsDiv.innerText=tie;
  //   console.log('hi')
  // }

}

export { display,winsDiv,gameMainDiv };

//add eventlistening to main element-->

//display- only this function should interact with dom elements-use that state

//helper update status- allowed dom elements
