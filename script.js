let currentPlayer = 'X';
let arr = Array(9).fill(null);

const clickSound = document.getElementById("clickSound");

function updateStatus(message) {
    document.getElementById("status").innerText = message;
}

function checkWin() {
    const winCombos = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ];

    for(const combo of winCombos){
        const [a,b,c] = combo;
        if(arr[a] && arr[a] === arr[b] && arr[a] === arr[c]){
            updateStatus(`Player ${currentPlayer} Wins 🎉`);
            combo.forEach(i => document.getElementById(i).style.color = "#00ffff");
            return true;
        }
    }

    if(!arr.includes(null)){
        updateStatus("It's a Draw 🤝");
        return true;
    }

    return false; // game not over
}

function handleClick(el){
    const id = parseInt(el.id);
    if(arr[id] !== null) return; // cell already filled

    clickSound.currentTime = 0;
    clickSound.play();

    arr[id] = currentPlayer;
    el.innerText = currentPlayer;

    const gameOver = checkWin();

    if(!gameOver){
        // switch player
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        updateStatus(`Player ${currentPlayer}'s turn`);
    }
    // if gameOver → status already set by checkWin, do not change
}

function restartGame() {
    currentPlayer = 'X';
    arr = Array(9).fill(null);
    updateStatus(`Player ${currentPlayer}'s turn`);

    document.querySelectorAll(".col").forEach(cell => {
        cell.innerText = "";
        cell.style.color = "#fff";
    });
}
