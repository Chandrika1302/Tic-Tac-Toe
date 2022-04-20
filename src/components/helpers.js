import { gridCells, player1Marker, player2Marker } from "./board";
import { winsDiv,display,gameMainDiv } from "./UI";

//reset

//reset the baord->display();

// checkwinner

function checkWinner() {
  if (
    checkDiagonal(player1Marker) ||
    checkHorizontal(player1Marker) ||
    checkVertical(player1Marker)
  ) {
    return winsDiv.innerText=player1Marker + "wins!!";
    
    
  }
  if (
    checkDiagonal(player2Marker) ||
    checkHorizontal(player2Marker) ||
    checkVertical(player2Marker)
  ) {
    return winsDiv.innerText=player2Marker + "wins!!";

  }
  function checkHorizontal(symbol) {
    let flag = false;
    for (let i = 0; i < 7; i++) {
      if (
        gridCells[i] === symbol &&
        gridCells[i] === gridCells[i + 1] &&
        gridCells[i + 1] === gridCells[i + 2]
      ) {
        flag = true;
      }
    }
    return flag;
  }
  function checkVertical(symbol) {
    let flag = false;
    for (let i = 0; i < 3; i++) {
      if (
        gridCells[i] === symbol &&
        gridCells[i] === gridCells[i + 3] &&
        gridCells[i + 3] === gridCells[i + 6]
      ) {
        flag = true;
      }
    }
    return flag;
  }
  function checkDiagonal(symbol) {
    let flag = false;
    if (
      gridCells[0] === symbol &&
      gridCells[0] === gridCells[4] &&
      gridCells[4] === gridCells[8]
    ) {
      flag = true;
    }
    if (
      gridCells[2] === symbol &&
      gridCells[2] === gridCells[4] &&
      gridCells[4] === gridCells[6]
    ) {
      flag = true;
    }
    return flag;
  }
}
export { checkWinner };
