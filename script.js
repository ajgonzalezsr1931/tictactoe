// get player's name when it's their turn
let player = document.getElementById('turn');
player.innerHTML = '1';
let p = 1;
// get id of all 9 cells
let cell11 = document.getElementById('cell-1-1');
let cell12 = document.getElementById('cell-1-2');
let cell13 = document.getElementById('cell-1-3');
let cell21 = document.getElementById('cell-2-1');
let cell22 = document.getElementById('cell-2-2');
let cell23 = document.getElementById('cell-2-3');
let cell31 = document.getElementById('cell-3-1');
let cell32 = document.getElementById('cell-3-2');
let cell33 = document.getElementById('cell-3-3');
let turn;
const cellList = [cell11, cell12, cell13, cell21, cell22, cell23, cell31, cell32, cell33];
let gameStatus= "";

// function to change from X to O or O to X
function changeText(cell){
        if(p === 1&&cell.innerHTML=="" && gameStatus != "winner"){
            cell.innerHTML = 'X';
            turn = 'X';
            logMove(cell);
            moveCount+=1;
            checkWinner();
            player.innerHTML = '2';
            p = 2;
        } else if(cell.innerHTML=="" && gameStatus != "winner"){
            cell.innerHTML = 'O';
            turn = 'O';
            logMove(cell);
            moveCount+=1
            checkWinner();
            player.innerHTML = '1'
            p = 1;
        }
    
}
function logMove(cell) {
    switch (cell) {
        case cell11:
            moves[0]=cell11.innerHTML;
            break;
        case cell12:
            moves[1]=cell12.innerHTML;
            break;
        case cell13:
            moves[2]=cell13.innerHTML;
            break;
        case cell21:
            moves[3]=cell21.innerHTML;
            break;
        case cell22:
            moves[4]=cell22.innerHTML;
            break;
        case cell23:
            moves[5]=cell23.innerHTML;
            break;
        case cell31:
            moves[6]=cell31.innerHTML;
            break;
        case cell32:
            moves[7]=cell32.innerHTML;
            break;
        case cell33:
            moves[8]=cell33.innerHTML;
            break;
    
        default:
            break;
    }
}
// call changeText() when player clicks on a cell
cellList.forEach(element=>{
    element.addEventListener("click",function(){(changeText(element))});
})

let moves = ["","","","","","","","",""];
const winOptions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let moveCount=0;

const checkWinner = () => {
    for (let i = 0; i<8; i++){
        let winRow=winOptions[i];
        let a = moves[winRow[0]];
        let b = moves[winRow[1]];
        let c = moves[winRow[2]];
    if (a == '' || b == '' || c== ''){
        continue;
    } 
    if (a === b && b === c){
        document.getElementById('status').innerHTML=`${a} is the winner.`;
        return gameStatus="winner";
    }
    if (moveCount == 9){
        return document.getElementById('status').innerHTML=`It's a cat's game.`;
    }
    }
}


const playAgain= document.getElementById("play-again");
const reset = () => {
    cellList.forEach(element => {
        element.innerText="";
    });
    moves = ["","","","","","","","",""];
    document.getElementById('status').innerHTML="";
    player.innerHTML="1";
    p=1;
    gameStatus="";
    }
playAgain.addEventListener('click', reset);


    cellList.forEach(element=>{
        element.addEventListener("mouseover", (item) => {
            item.target.style.backgroundColor = "lightblue";
                    });
        element.addEventListener("mouseout",(item) => {
            item.target.style.backgroundColor = "white";
                    });
    })

    
