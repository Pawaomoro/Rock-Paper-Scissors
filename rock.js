const options=["paper","rock","scissors"];
//declaring a function that get computer choice
function getComputerChoice() {
 const random=options[Math.floor(Math.random()*options.length)];
 return random;

}
getComputerChoice();

function getHumanChoice() {
    let validateInput=false;
    while (validateInput==false) {
         const prompt = require('prompt-sync')();
         const humanChoice=prompt("Enter your choice?(rock or paper or scissors)");
         if (humanChoice==null) {
            continue;  
         }
        let humanChoiceInLower=humanChoice.toLowerCase();
        if (options.includes(humanChoiceInLower)) {
            validateInput=true;
            return humanChoiceInLower;   
    }         
    }    
}
//console.log(getHumanChoice());
//declaring a function to play a sigle round
function playRound(humanSelection,computerChoice) {
    const computer=getComputerChoice();
    const human=getHumanChoice();
   // const targetValue="ROCK";
    if (human.toLocaleLowerCase()===computer.toLowerCase()) {
        return "its a draw"
    }else if (computer.toLowerCase()=="rock"&&human.toLocaleLowerCase()=="scissors") {
            return "Rock smashes scissors you lose!"
            
        } else if (computer.toLowerCase()=="scissors"&&human.toLocaleLowerCase()==="rock") {
            return "you win scissors beats rock"
            
        } else if (computer.toLowerCase()=="scissors"&&human.toLocaleLowerCase()=="paper") {
            return "You lose scissors cuts paper"
            
        } else if (computer.toLowerCase()=="paper"&&human.toLocaleLowerCase()=="scissors") {
            return "You win paper beats scissor"
            
        } else if (computer.toLowerCase()=="paper"&&human.toLocaleLowerCase()=="rock") {
            return "You lose paper covers rock"
            
        } else if (computer.toLowerCase()=="rock"&&human.toLocaleLowerCase()=="paper") {
            return "You win paper covers rock"
            
        } 
        
    }
const humanSelection=getHumanChoice();
const computerChoice=getComputerChoice();
console.log(playRound(humanSelection,computerChoice));

function game() {
    let scorePlayer=0;
    let computerScore=0;
    for (let i = 0; i < 5; i++) {
        const humanSelection=getHumanChoice();
        const computerChoice=getComputerChoice();
        console.log(getComputerChoice());
        console.log("player "+scorePlayer+" vs computer "+computerScore);
        if ((playRound(humanSelection,computerChoice)===("You win paper beats scissor"))||(playRound(humanSelection,computerChoice)===("You win paper covers rock"))||(playRound(humanSelection,computerChoice)===("you win scissors beats rock"))) {
            scorePlayer++;
            
        }else if ((playRound(humanSelection,computerChoice)===("You lose paper covers rock"))||(playRound(humanSelection,computerChoice)===("You lose scissors cuts paper"))||(playRound(humanSelection,computerChoice)===("Rock smashes scissors you lose!"))) {
            computerScore++;  
        } 
    }  
    console.log("Game over");
    if (scorePlayer>computerScore) {
            console.log("Congrats you win");
        
         }else if(scorePlayer<computerScore){
            console.log("You lose better try your luck next time");
         }else{
            console.log("Its a tire");
         }    
}
console.log(game());

