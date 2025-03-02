let currentPlayer = "X";
let gameActive = true;
var array = [null, null, null, null, null, null, null, null, null];

function handleClick(element){
    if(gameActive && array[element.id] == null){
    document.getElementById(element.id).innerText = currentPlayer;
    array[element.id] = currentPlayer;
    checkWinner();
    if(gameActive){
        currentPlayer = currentPlayer === "X" ? "0" : "X";
    }else{
        document.getElementById("0").className = "hoverDisabled";
        document.getElementById("1").className = "hoverDisabled";
        document.getElementById("2").className = "hoverDisabled";
        document.getElementById("3").className = "hoverDisabled";
        document.getElementById("4").className = "hoverDisabled";
        document.getElementById("5").className = "hoverDisabled";
        document.getElementById("6").className = "hoverDisabled";
        document.getElementById("7").className = "hoverDisabled";
        document.getElementById("8").className = "hoverDisabled";
    }
    }else{return}
}

function checkWinner(element){
    let result = document.getElementById("result");
    if( array[0]==array[1] && array[1]==array[2] && array[0]!=null ||
        array[3]==array[4] && array[4]==array[5] && array[3]!=null ||
        array[6]==array[7] && array[7]==array[8] && array[6]!=null ||
        array[0]==array[3] && array[3]==array[6] && array[0]!=null ||
        array[1]==array[4] && array[4]==array[7] && array[1]!=null ||
        array[2]==array[5] && array[5]==array[8] && array[2]!=null ||
        array[0]==array[4] && array[4]==array[8] && array[0]!=null ||
        array[2]==array[4] && array[4]==array[6] && array[2]!=null
    ){
        result.innerText = "Player " + currentPlayer + " wins !!";
        gameActive = false;
    }
    else{
        for(let i=0; i<array.length; i++){
            if(array[i] == null){
                return;
            }
        }
        result.innerText = "It's a draw!!";
        gameActive = false;
    }
}

function resetGame(){
    for(let i=0; i<array.length; i++){
        array[i] = null;
        document.getElementById(i).innerText = "";
    }
    result.innerText = "";
    gameActive = true;
    currentPlayer = "X";
}
