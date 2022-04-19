import "../src/style.css";

const gameMainDiv = document.querySelector("#game-grid");
const gameGridItems = document.querySelectorAll(".items");
const heading=document.querySelector('#haha');
const winsDiv=document.querySelector('.win');

const body = document.body;


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


let count = 0;

function fun(e) {
  
  const gridBox = e.target;
  if(heading.innerText=='player1'){ 
    if (gridBox.className == "items" && count % 2 == 0 && count < 10) {
    if (gridBox.innerText == "") {
      gridBox.innerText = player1.marker;
      gameBoard.board.push(gridBox.innerText);
      count += 1;
      heading.innerText='player2';
    }
  winner();

  }}
  else if(heading.innerText=='player2'){
    if(gridBox.className == "items" && count % 2 == 1 && count < 10) {
      if(gridBox.innerText == ""){
        gridBox.innerText = player2.marker;
        gameBoard.board.push(gridBox.innerText);
        count += 1;
      heading.innerText='player1';
      }
  }
  winner();

}
if(winsDiv.innerText=='x wins!!'){
  body.removeEventListener('click',fun); 
}
  } 
const winner=function(){
    if(gameGridItems[0].innerText=='x' && gameGridItems[1].innerText=='x' && gameGridItems[2].innerText=='x'){
        winsDiv.innerText=('x wins!!');
    }
    else if(gameGridItems[0].innerText=='x' && gameGridItems[3].innerText=='x' && gameGridItems[6].innerText=='x'){
        winsDiv.innerText='x wins!!';
    }
    else if(gameGridItems[0].innerText=='x' && gameGridItems[4].innerText=='x' && gameGridItems[8].innerText=='x'){
        winsDiv.innerText='x wins!!';
    }
    else if(gameGridItems[3].innerText=='x' && gameGridItems[4].innerText=='x' && gameGridItems[5].innerText=='x'){
        winsDiv.innerText='x wins!!';
    }
    else if(gameGridItems[2].innerText=='x' && gameGridItems[5].innerText=='x' && gameGridItems[8].innerText=='x'){
        winsDiv.innerText='x wins!!';
    }
    else if(gameGridItems[1].innerText=='x' && gameGridItems[4].innerText=='x' && gameGridItems[7].innerText=='x'){
        winsDiv.innerText='x wins!!';
    }
    else if(gameGridItems[6].innerText=='x' && gameGridItems[7].innerText=='x' && gameGridItems[8].innerText=='x'){
        winsDiv.innerText='x wins!!';
    }
}

function init(){
  body.addEventListener("click", fun);
}
init();


