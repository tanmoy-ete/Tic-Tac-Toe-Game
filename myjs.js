let newGame= document.querySelector(".new");
let boxes= document.querySelectorAll(".box");
let reset= document.querySelector(".reset");
let winner= document.querySelector("#winner");
let msg= document.querySelector(".messege");
let turn= true;
let count = 0;

let winningArray= [
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
          if(turn) {
            box.innerText = "O";
            turn= false;
          } else {
            box.innerText = "X";
            turn= true;
          } 
          box.disabled = true;
          count++; 

          let isWinner = checkWin(); 
         
          
          if ( count=== 9 && !isWinner) {
            gameDraw();
          }
    })
})

const resetGame= () => {
    count = 0;
    turn = true;
    enableBoxes();
    msg.classList.add("hide");
};

const disableBoxes = () => {
    for (let box of boxes) {
      box.disabled = true;
    }
};

const gameDraw =() => {
   
        winner.innerText= `The game is Draw!!!`;
        msg.classList.remove("hide");
        disableBoxes();
    
};

const enableBoxes = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
    }
};

const showWinner = (win) => {
    winner.innerText= `Congratulations! Winner is ${win}`;
    msg.classList.remove("hide");
    disableBoxes();
};

const checkWin = () => {
    for (let pattern of winningArray) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2!= "" && pos3 != ""){
            if(pos1===pos2 && pos2===pos3 ){
                showWinner(pos1);
                return true;
            }
        
        }
}
};

reset.addEventListener("click", resetGame);
newGame.addEventListener("click" , resetGame);