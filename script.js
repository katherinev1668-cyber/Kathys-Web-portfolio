const link = document.createElement('a');
link.href = "./tictac.html";
link.textContent = "Tic Tac Toe Project";
link.style.color = 'white';
link.style.textDecoration = 'none';

const tictacContainer = document.getElementById("tictac");
if (tictacContainer) {
    tictacContainer.appendChild(link);
}

let counter = 0;
function count() {
    counter = counter + 1;
    console.log("Current Clicks: " + counter);
}


const squares = document.querySelectorAll(".square");

const currentPlayer = document.getElementById("current-player"); 
const reset = document.querySelector('#reset')

function gameLoop(event) {
    const square = event.target;
    
    
    if (square.textContent !== "") return;

    count();

    if (currentPlayer && currentPlayer.textContent === "O") {
        square.textContent = "O";
        currentPlayer.textContent = "X";
    } else {
        square.textContent = "X";
        if (currentPlayer) {
            currentPlayer.textContent = "O"; 
        }
    }
}

for (const square of squares) {
    console.log('squares', square);
    square.addEventListener('click', gameLoop); 
}

if(reset) {
    reset.addEventListener('click', () => {
        squares.forEach(square => square.textContent = "");
        counter= 0;
        if (currentPlayer) currentPlayer.textContent = "X";
    });
}





