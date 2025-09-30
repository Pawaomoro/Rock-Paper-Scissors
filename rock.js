 const options=["PAPER","ROCK","SCISSORS"];
         //declaring a function that get computer choice
        function getComputerChoice() {
            const random=options[Math.floor(Math.random()*options.length)];
            return random;
}
        let playerScore=0;
        let compScore=0;
//getComputerChoice();
        document.addEventListener("DOMContentLoaded",function(){
            const Btn=document.getElementById("choiceBtn");
            const compDisplay=document.getElementById("computerChoice");
            const humanDisplay=document.getElementById("yourChoice");
            const butonRock=document.getElementById("rockBtn");
            const butonPaper=document.getElementById("paperBtn");
            const butonScissors=document.getElementById("scissorsBtn");
            const resultMessage=document.getElementById("result");
            const myResult=document.getElementById('yourResult');
            const compResult=document.getElementById("computerResult");

            function playground(playchoice){
            const compChoice=getComputerChoice();

            //display choices
            compDisplay.textContent=compChoice
            humanDisplay.textContent=playchoice;

            //DETERMINE THE WINNER
            let winner='';

            //winner selection
            if(playchoice==compChoice){
                resultMessage.textContent="ITS A DRAW";
                winner="draw";
            }else if(playchoice==="SCISSORS"&&compChoice==="ROCK"){
                resultMessage.textContent="YOU LOSE! Rock smashes scissors";
                winner="computer"
            }else if(playchoice==="ROCK"&&compChoice==="SCISSORS"){
                resultMessage.textContent="You WIN! rock smashes scissors";
                winner="player"
            }else if(playchoice==="PAPER"&&compChoice==="SCISSORS"){
                resultMessage.textContent="You LOSE! scissors cuts paper";
                winner="computer"
            }else if(playchoice==="SCISSORS"&&compChoice==="PAPER"){
                resultMessage.textContent="You WIN scissors cuts paper"
                winner="player"
            }else if(playchoice==="ROCK"&&compChoice==="PAPER"){
                resultMessage.textContent="You LOSE! Paper covers rock";
                winner="computer"
            }else if(playchoice==="PAPER"&&compChoice==="ROCK"){
                resultMessage.textContent="You WIN! Paper covers rock"
                winner="player"
            }   
            return winner;
        }

        function updateScore(winner){
           if(winner==="player"){
            playerScore++
            myResult.textContent=playerScore;
           }else if(winner==="computer"){
            compScore++;
            compResult.textContent=compScore;
           } 
    }

           

           butonRock.addEventListener("click",function(){
            const winner=playground("ROCK");  
            updateScore(winner);
           });

           butonPaper.addEventListener("click",function(){
            const winner=playground("PAPER");
            updateScore(winner);
           });

           butonScissors.addEventListener("click",function(){
            const winner=playground("SCISSORS");
            updateScore(winner);
           });
        })