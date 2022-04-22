import { checkWinner } from "./helpers";
import { winsDiv} from "./UI";

const gridCells = Array(9).fill(null);
//turn
let player1Marker = "X";
let player2Marker = "O";
let turn = "player1";
let tie = "It's a tie";
//rest of the components;

//getter and setters;
function toggleTurn() {
  if (turn == "player1") {
    turn = "player2";
  } else {
    turn = "player1";
  }
}

function getActivePlayerMarker() {
  if (turn == "player1") {
    return player1Marker;
  }
  return player2Marker;
}

function changeTurn(input) {
  turn = input;
}

function playerChance() {
  if (turn == "player1") {
    return player2Marker;
  } else return player1Marker;
}
function checkTie(){
 const gameTie= gridCells.every(element => element !== null)
 if(gameTie){
   return winsDiv.innerText=tie;
 }
}

//export;
export {
  gridCells,
  player1Marker,
  player2Marker,
  turn,
  tie,
  toggleTurn,
  getActivePlayerMarker,
  playerChance,
  changeTurn,
  checkTie,
  
};
