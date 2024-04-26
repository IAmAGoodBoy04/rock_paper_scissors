// rock=0
// paper=1
// scissors=2

function getComputerChoice(){
    return Math.floor(Math.random()*3);
}

function convertToText(number){
    if(number===0){
        return "rock";
    }
    else if(number === 1){
        return "paper";
    }
    else{
        return "scissors";
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
            reply:`You both chose ${convertToText(computerChoice)}, Draw`,
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
let times_played=0;
let sc_player=0;
let sc_comp=0;

let pmaincont=document.querySelector(".player.main_container");
let cmaincont=document.querySelector(".computer.main_container");

let bboxPlayer=document.querySelector(".big_box.player");
let bboxComp=document.querySelector(".big_box.computer");
bboxPlayer.innerHTML="<p>Please select one</p>";
bboxComp.innerHTML="<p>Waiting for you</p>";
let scp=document.querySelector(".score.player");
let scc=document.querySelector(".score.computer");
let re=document.querySelector(".result");
scp.textContent=`Score : ${sc_player}`;
scc.textContent=`Score : ${sc_comp}`;

let option=document.querySelectorAll(".options.player>img")
option.forEach((opt)=>{
    opt.addEventListener("click",function optionclick(){
        if(opt.classList.contains("Rock")){
            playGame(0);
        }
        else if(opt.classList.contains("Paper")){
            playGame(1);
        }
        else{ 
            playGame(2);
        }
    })
})

document.body.addEventListener("keypress",(e)=>{
    if(e.key==="Enter"){
        cleanup();
    }
});

function playGame(playerSelection){
    bboxPlayer.innerHTML=`<img src="./resources/SVGs/${convertToText(playerSelection)}.svg" height="200px" width="auto"></img>`;
    let computerChoice=getComputerChoice();
    re.textContent="The computer chose : "+convertToText(computerChoice)+"\r\n";
    bboxComp.innerHTML=`<img src="./resources/SVGs/${convertToText(computerChoice)}.svg" height="200px" width="auto"></img>`;
    result = playRound(playerSelection,computerChoice);
    sc_player+=result.score;
    sc_comp+=(1-result.score);
    scp.textContent=`Score : ${sc_player}`;
    scc.textContent=`Score : ${sc_comp}`;
    re.textContent=re.textContent+result.reply;
    if(result.score==1){
        pmaincont.classList.remove("lose");
        cmaincont.classList.remove("win");
        pmaincont.classList.add("win");
        cmaincont.classList.add("lose");
    }
    else if(result.score==0.5){
        pmaincont.classList.remove("lose");
        cmaincont.classList.remove("win");
        pmaincont.classList.remove("win");
        cmaincont.classList.remove("lose");
    }
    else{
        pmaincont.classList.remove("win");
        cmaincont.classList.remove("lose");
        pmaincont.classList.add("lose");
        cmaincont.classList.add("win");
    }
    times_played++;
    if(times_played===5){
        if(sc_player===2.5){
            re.textContent+=`\r\n\r\nYou drew with the computer 2.5-2.5`;
            re.classList.add("draw");
        }
        else if(sc_player>2.5){
            re.textContent+=`\r\n\r\nYou won against the computer ${sc_player}-${sc_comp}`;
            re.classList.add("win");
        }
        else{
            re.textContent+=`\r\n\r\nYou lost against the computer ${sc_player}-${sc_comp}`;
            re.classList.add("lose");
        }
        re.textContent+="\r\nReload page to play again";
        document.body.replaceWith(document.body.cloneNode(true));//to remove eventlisteners
    }
    else{
        re.textContent+="\r\n\r\nPress Enter to reset GUI"
    }
}

function cleanup(){
    re.textContent="";
    pmaincont.classList.remove("lose");
    cmaincont.classList.remove("win");
    pmaincont.classList.remove("win");
    cmaincont.classList.remove("lose");
    bboxPlayer.innerHTML="<p>Please select one</p>";
    bboxComp.innerHTML="<p>Waiting for you</p>";
}

