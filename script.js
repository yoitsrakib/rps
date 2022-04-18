const pChoice = document.querySelector('.playerc');
const cChoice = document.querySelector('.compc');
const pScore = document.querySelector('.pscore');
const cScore = document.querySelector('.cscore');

pChoice.style.color = "yellow"
cChoice.style.color = "yellow"

function game (player, computer) {

  
    if (player === "rock") {
        if (computer ==="rock") {
             tie;
             pScore.innerHTML = userScore;
             cScore.innerHTML = computerScore;
             pChoice.innerHTML = player;
             cChoice.innerHTML = computer;
        }
        else if (computer === "scissor") {
            userScore++;
            pScore.innerHTML = userScore;
            cScore.innerHTML = computerScore;
            pChoice.innerHTML = player;
            cChoice.innerHTML = computer;
             win;
          
        }
        else {
            computerScore++;
            // pScore.innerHTML = userScore;
            cScore.innerHTML = computerScore;
            pChoice.innerHTML = player
            cChoice.innerHTML = computer;
             lose;
            
        }
    
    }

if (player === "paper") {
    if (computer ==="paper") {
        pScore.innerHTML = userScore;
        cScore.innerHTML = computerScore;
        pChoice.innerHTML = player;
        cChoice.innerHTML = computer;
         tie;
    }
    else if (computer === "scissor") {
        computerScore++;
        // pScore.innerHTML = userScore;
        cScore.innerHTML = computerScore;
        // pChoice.innerHTML = player;
        cChoice.innerHTML = computer;
         
         lose;
        
    }
    else{
       userScore++;
        pScore.innerHTML = userScore;
        // cScore.innerHTML = computerScore;
        pChoice.innerHTML = player;
        cChoice.innerHTML = computer;
         win;
        
    }

}


if (player === "scissor") {
    if (computer ==="scissor") {
        pScore.innerHTML = userScore;
        cScore.innerHTML = computerScore;
        pChoice.innerHTML = player;
        cChoice.innerHTML = computer;
         tie;
    }
    else if (computer === "paper") {
        userScore++;
        pScore.innerHTML = userScore;
        // cScore.innerHTML = computerScore;
        pChoice.innerHTML = player;
        cChoice.innerHTML = computer;
       
         win;
       
    }
    else {
        computerScore++;
        // pScore.innerHTML = userScore;
        cScore.innerHTML = computerScore;
        pChoice.innerHTML = player;
        cChoice.innerHTML = computer;
         lose;
        
    }

}

}


let tie = "it's a tie";
let win = "you win";
let lose = "you lose";
let userScore = parseInt(0);
let computerScore = parseInt(0);


const computerOptions = ["rock", "paper", "scissor"]

const options = document.querySelectorAll('.container button');



options.forEach(option => {
    option.addEventListener('click', function() {
        const computerNumber = Math.floor(Math.random()*3);
        const computerChoice = computerOptions[computerNumber];
        // console.log(computerChoice)
        //  console.log(this.textContent);
        game (this.textContent,computerChoice);
  
console.log ("You picked : " + this.textContent);
console.log ("Computer picked : " + computerChoice);
console.log ("Your score = " +userScore);
 console.log ("Computer score = " +computerScore);

 


})


})
;



