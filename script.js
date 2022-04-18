// function computerChoice () {
   
//     let random = Math.random();
//     if (random < 0.33) {
//         random = ("rock");
//     }
    
//     else if (random <= 0.66 && random > 0.33) {
//         random = ("paper");
//     }

//     else if (random < 1 && random > 0.66) {
//         random = ("scissors");
//     }
  
//     return random;
// }  


function game (player, computer) {

  
    if (player === "rock") {
        if (computer ==="rock") {
             tie;
        }
        else if (computer === "scissor") {
            userScore++;
             win;
          
        }
        else {
            computerScore++;
             lose;
            
        }
    
    }

if (player === "paper") {
    if (computer ==="paper") {
         tie;
    }
    else if (computer === "scissor") {
        computerScore++;
         lose;
        
    }
    else{
        userScore++;
         win;
        
    }

}


if (player === "scissor") {
    if (computer ==="scissor") {
         tie;
    }
    else if (computer === "paper") {
        userScore++;
         win;
       
    }
    else {
        computerScore++;
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


