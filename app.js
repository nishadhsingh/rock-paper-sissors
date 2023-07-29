const ROCK = "ROCK";
const PAPER = "PAPER";
const SISSORS = "SISSORS";
const CHANCES = 5;

let computerWins = "You Lose!";
let playerWins = "You Win!";

let gamestart = false;
const text = "Here man .. can you test out my A.I ... It's supposed to be unbeatable...\n";
const win_text = " your code is shit Mr.hacker-man!! .. do it again \n";
const lose_text = "Pfff .. i guess it works... \n";
const text2 = "Sure man";
let score_user = 0;
    let score_c = 0;
    let i =0;
let win;





function info_update(ele,t)
{
    ele.innerText = t;
}
function info()
{
    const textHolder = document.querySelector(".board_text");
    setTimeout(info_update,1500,textHolder,text);
    
    const textHolder2 = document.querySelector(".board_text2");
    setTimeout(info_update,3000,textHolder2,text2);

    gamestart = true;
  
}

function userChoice(event)
{
    if(gamestart)
    {
       
        let val = event.originalTarget.value.toUpperCase();
        game(val);

    }
}



function checkWin()
{
    if(!gamestart)
    {
        const updateMsg = document.querySelector(".board_result");
        let result = score_c > score_user ? "Computer_Wins": score_user > score_c ? "User_Wins": "DRAW";
        console.log(result);
        updateMsg.innerText = result === "Computer_Wins"? lose_text : result === "User_Wins"? win_text : "DRAW i guess it worsks maybe";
        return;
    }
    return;
}

function game(input)
{
    
        if(i<CHANCES){
        win = playRound(input,getComputerChoice());
        win === computerWins? score_c = score_c+1: win === playerWins ? score_user = score_user + 1 : score_user = score_user;
        computerscore = document.querySelector(".cumputerscore");
        userscore = document.querySelector(".userscore");
        info_update(computerscore," My A.I  Score:"+score_c);
        info_update(userscore,"YOU Score:"+score_user);  
        console.log(win);
        console.log(score_c,score_user);
        i++;
        if(i>=CHANCES)
        {
            gamestart =false;
            checkWin();
        }
        }
    

        
    
}

function getUserChoice(choice=playerSelection)
{
    if(typeof choice != "string")
    {
        throw TypeError;
    }

    let input = choice.toUpperCase();
    return input === ROCK? ROCK : input === PAPER ? PAPER : SISSORS; 


}


function playRound(playerSelection, computerSelection) {
    console.log({score_c,score_user,playerSelection,computerSelection});
    
    if(playerSelection === computerSelection)
    {
        return "DRAW";
    }
    switch(playerSelection)
    {
        
        case ROCK:
            if(computerSelection===SISSORS)
            {
                console.log(playerWins , playerSelection , " beats", computerSelection)
                return playerWins;
            }
            else
            {
                console.log(computerWins , computerSelection + " beats" ,playerSelection)
                return computerWins;
            }
            break;
        case PAPER:
        if(computerSelection===SISSORS)
            {
                console.log(computerWins , computerSelection , " beats" , playerSelection)
                return computerWins;
            }
            else
            {
                console.log(playerWins , playerSelection , " beats" ,computerSelection)
                return playerWins;
            }
            break;
        case SISSORS:
            if(computerSelection===ROCK)
            {
                console.log(playerWins , playerSelection , " beats" ,computerSelection)
                return playerWins;
            }
            else
            {
                console.log(computerWins, computerSelection ," beats" , playerSelection)
                return computerWins ;
            }
            break;
        default:
            return "OOps This should not happen";
    }


  }

  function getRandomArbitrary(min, max) {
    return Math.round(~~(Math.random() * (max - min) + min));
}

  function getComputerChoice()
  {
        let ran = getRandomArbitrary(0,3);
        switch(ran)
        {
            case 0:
                return ROCK;
                break;
            case 1:
                return PAPER;
                break;
            case 2:
                return SISSORS;
                break;
            default:
                return ROCK;
        }
  }

  info();
  
