console.log("Welcome to Tic Tac Toe")

let music = new Audio("./music.mp3")
let turn = new Audio('./ting.mp3')
let gameover= new Audio('./gameover.mp3')

let turn = "X"

// function to change turn
const changeTurn = ()=>{
    return turn === "X" ? "0":"X"
}

// function to check for a win
const checkWin = () =>{

}

// Game Logic

let boxed = document.getElementsByClassName("box");
Array.from(boxed).forEach(element) =>{
    
}