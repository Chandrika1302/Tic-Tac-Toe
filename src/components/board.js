import { checkWinner } from "./helpers";
const gridCells = Array(9).fill(null);
//turn
let player1Marker = "X";
let player2Marker = "O";
let turn = "player1";
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

//export;
export {
  gridCells,
  player1Marker,
  player2Marker,
  turn,
  toggleTurn,
  getActivePlayerMarker,
  playerChance,
  changeTurn,
  
};
