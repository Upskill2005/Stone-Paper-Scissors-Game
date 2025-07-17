let userScore=0;
let compScore=0;
let msg=document.querySelector("#msg");
        let score=document.querySelector("#score");
        let comp=document.querySelector("#comp-score");

const choices= document.querySelectorAll(".choice");
const drawGame=()=>{
        console.log("Game was draw")
        msg.innerHTML="<p>Game was Draw</p>";
}
const Restart=()=>{
    alert(`Final Score is: user ${userScore} and COMP ${compScore}`);
    userScore=0;
    compScore=0;
    score.innerText=`${userScore}`
        comp.innerText=`${compScore}`;

}
const ShowWin=(userwin)=>{
    if(userwin){
        console.log("You won the game");
        msg.innerHTML="<p>You WIn</p>";
        userScore++;
        score.innerText=`${userScore}`
    }
    else{
        console.log("You Lose");
        compScore++;
        msg.innerHTML="<p>You lose</p>";
        comp.innerText=`${compScore}`;
    }
    if(userScore===5||compScore===5){
        Restart();
    }
}

const playGame=(userchoice)=>{
    console.log("User Choice is:",userchoice)
    let options=["rock","paper","scissors"];
    const pick=Math.floor(Math.random()*3);
    let genComp=options[pick];
    console.log("Comp choice is:",genComp);
    //case for draw
    let userwin=true;
    if(userchoice===genComp){
      drawGame();}
    else{
        if(userchoice==="rock"){
            userwin=genComp==="scissors"?true:false;
        }
        else if(userchoice==="scissors"){
            userwin=genComp==="paper"?true:false;
        }
        else if(userchoice==="paper"){
            userwin=genComp==="rock"?true:false;
        }
    };
    ShowWin(userwin);
};

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        let userchoice= choice.getAttribute("id");
        playGame(userchoice);
    })
});
