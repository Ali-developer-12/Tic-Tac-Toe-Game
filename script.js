
let currentPlayer='X';
let arr=Array(9).fill(null);
function checkWin(){

    if(
        (arr[0] !== null && arr[0] == arr[1] && arr[1] == arr[2]) ||
        (arr[3] !== null && arr[3] == arr[4] && arr[4] == arr[5]) ||
        (arr[6] !== null && arr[6] == arr[7] && arr[7] == arr[8]) ||
        (arr[0] !== null && arr[0] == arr[3] && arr[3] == arr[6]) ||
        (arr[1] !== null && arr[1] == arr[4] && arr[4] == arr[7]) ||
        (arr[2] !== null && arr[2] == arr[5] && arr[5] == arr[8]) ||
        (arr[0] !== null && arr[0] == arr[4] && arr[4] == arr[8]) ||
        (arr[2] !== null && arr[2] == arr[4] && arr[4] == arr[6])
        
    ){
        document.getElementById("status").innerText = `${currentPlayer} is Win 🎉`;
        return;
    }

    if(!arr.some((e)=>e===null)){
        document.getElementById("status").innerText = "Draw Game 🤝";
        return;
    }
}

function handleClick(el){
    const id=parseInt(el.id);
    console.log("Ali Raza")
    if(arr[id] !== null) return;
    arr[id]=currentPlayer;
    el.innerText=currentPlayer;
    checkWin();
    currentPlayer=currentPlayer=== 'X' ? 'O' : 'X';
    
    
}


function restartGame() {
    currentPlayer = 'X';         
    arr = Array(9).fill(null);  
    document.getElementById("status").innerText = ""; 

    // board clear
    document.querySelectorAll(".col").forEach(cell => {
        cell.innerText = "";
    });
}
