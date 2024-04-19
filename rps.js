// rock=0
// paper=1
// scissors=2

function getComputerChoice(){
    return Math.floor(Math.random()*3);
}

function convertToText(number){
    if(number===0){
        return "Rock";
    }
    else if(number === 1){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}

function convertToNumber(text){
    if(text === "rock"){
        return 0;
    }
    else if(text==="paper"){
        return 1;
    }
    else if(text==="scissors" || text==="scissor"){
        return 2;
    }
    else{
        return -1;
    }
}

function playRound(playerSelection, computerChoice){
    if(playerSelection===-1){
        return {
            reply:("Invalid Input"),
            score:0.5,
        };
    }
    if(playerSelection===computerChoice){
        return {
            reply:"Computer chose "+convertToText(computerChoice)+" too,"+"Draw",
            score:0.5,
        };
    }
    else if((playerSelection+1)%3==computerChoice){
        return {
            reply:"You lose! "+convertToText(computerChoice)+" beats "+convertToText(playerSelection),
            score:0
        };
    }
    else{
        return {
            reply:"You Win! "+convertToText(computerChoice)+" beats "+convertToText(playerSelection),
            score:1
        };
    }
}

function playGame(){
    let playerSelection = convertToNumber(prompt("Enter your choice : ").trim().toLowerCase());
    let computerChoice=getComputerChoice();
    alert("\nThe computer chose : "+convertToText(computerChoice)+"\n");
    result = playRound(playerSelection,computerChoice);
    alert(result.reply);
    return result.score;
}
let score=0;
for(i=0;i<5;i++){
    score+=playGame();
}
if(score==0){
    alert(`You drew with the computer 2.5-2.5`);
}
else if(score>2.5){
    alert(`You won against the computer ${score}-${5-score}`);
}
else{
    alert(`You lost against the computer ${score}-${5-score}`);
}