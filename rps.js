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
        return "Invalid Input\n";
    }
    if(playerSelection===computerChoice){
        return "Computer chose "+convertToText(computerChoice)+" too,"+"Draw";
    }
    else if((playerSelection+1)%3==computerChoice){
        return "You lose! "+convertToText(computerChoice)+" beats "+convertToText(playerSelection);
    }
    else{
        return "You Win!! "+convertToText(playerSelection)+" beats "+convertToText(computerChoice);
    }
}

function playGame(){
    let playerSelection = convertToNumber(prompt("Enter your choice : ").trim().toLowerCase());
    let computerChoice=getComputerChoice();
    alert("\nThe computer chose : "+convertToText(computerChoice)+"\n");
    alert(playRound(playerSelection,computerChoice));
}

for(i=0;i<5;i++){
    playGame();
}