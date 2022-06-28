//import state fro mthtat file
import { resetGame,checkWinner } from "./helpers";
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
const resetButton=document.querySelector("#reset-btn")

resetButton.addEventListener('click',resetGame);

// all dom elements
gameMainDiv.addEventListener("click",init);
heading.innerText="player" + "(" + player1Marker + ")'s chance";


function display(gameBox,i){
  
  if(i==null){
    heading.innerText="player" + "(" + player1Marker + ")'s chance";
    for(let k=0;k<gridCells.length;k++){
      gameGridItems[k].innerText="";
    }
  }
  else gameBox.innerText=gridCells[i];

}
function init(e) { 
  const gridBox = e.target;
  const index = gridBox.getAttribute("data-index");
  if (turn && gridCells[index]==null) {
    heading.innerText = "player" + "(" + playerChance() + ")'s chance";
    gridCells[index] = getActivePlayerMarker();
    display(gridBox,index);
    toggleTurn();
  }
  checkWinner();
  checkTie();
}

export { init,display,winsDiv,gameMainDiv };

//add eventlistening to main element-->

//display- only this function should interact with dom elements-use that state

//helper update status- allowed dom elements
