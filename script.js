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
const reset = document.querySelector('#reset');
const messageText = document.getElementById("message"); // Text element for game status/messages

let board = ["", "", "", "", "", "", "", "", ""];
let gameOver = false;

// 8 winning lines array
const winningLines = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6]  
];

function switchPlayer() {
    if (currentPlayer) {
        currentPlayer.textContent = currentPlayer.textContent === "X" ? "O" : "X";
    }
}

function checkWinner() {
    for (const combination of winningLines) {
        const [a, b, c] = combination;
        
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            console.log(`Player ${board[a]} Wins!`);
            gameOver = true;
            if (messageText) messageText.textContent = `Player ${board[a]} Wins!`;
            return board[a];
        }
    }

    if (!board.includes("")) {
        console.log("It's a draw!");
        gameOver = true;
        if (messageText) messageText.textContent = "It's a draw!";
        return "Draw";
    }

    return null;
}

function playTurn(event) {
    const square = event.target;
    const index = Array.from(squares).indexOf(square);

    // Only proceed if gameOver is false and the clicked square is empty
    if (gameOver === false && board[index] === "") {
        count();

        const activeSymbol = currentPlayer ? currentPlayer.textContent : "X";

        // Fill the square and board state
        board[index] = activeSymbol;
        square.textContent = activeSymbol;

        // Check for winner first, then switch player if game continues
        const winner = checkWinner();
        if (!winner) {
            switchPlayer();
        }
    }
}

function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    gameOver = false;
    counter = 0;
    
    squares.forEach(square => square.textContent = "");
    
    if (currentPlayer) {
        currentPlayer.textContent = "X";
    }

    if (messageText) {
        messageText.textContent = "";
    }
    
    console.log("Game reset!");
}

// Event Listeners
squares.forEach(square => {
    square.addEventListener('click', playTurn);
});

if (reset) {
    reset.addEventListener('click', resetGame);
}