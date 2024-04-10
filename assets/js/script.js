// selectors

var slotRow = document.getElementsByTagName("tr");
var slotCell = document.getElementsByTagName("td");
var tableSlot = document.querySelector(".game-slot");
const playersTurn = document.querySelector(".players-turn");
const resetButton = document.querySelector(".reset-game");

// identify cell coordinates clicked
for(let i = 0; i< slotCell.length; i++) {
    slotCell[i].addEventListener('click', (e) => {
        console.log(`${e.target.parentElement.rowIndex}, ${e.target.cellIndex}`);
    })
}

// prompt users to enter their player name
while(!player1){
    var player1 = prompt('Player One (red counter): Enter your name');
}

player1Colour = 'red';

while(!player2){
    var player2 = prompt('Player Two (yellow counter): Enter your name');
}

player2Colour = 'yellow';

var currentPlayer = 1;
playersTurn.textContent = `${player1}'s make your move`;

Array.prototype.forEach.call(slotCell, (cell)=>{
    cell.addEventListener('click', colourChange);
    // ensure background colour is white (empty cell)
    cell.style.backgroundColor = 'white';
})

// change colour of cell clicked by player
function colourChange(e){
    let column = e.target.cellIndex;
    let row = [];
    // loop through cells starting at the bottom row (index 5)
    for(let i = 5; i > -1; i--){
        // check cell is currently empty
        if(slotRow[i].children[column].style.backgroundColor == 'white'){
            // add selected cell to row array
            row.push(slotRow[i].children[column]);
            // change colour of cell depending on which player clicked
            if(currentPlayer === 1){
                row[0].style.backgroundColor = player1Colour;
            }
        }
    }
}