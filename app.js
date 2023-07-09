const ROCK = "ROCK";
const PAPER = "PAPER";
const SISSORS = "SISSORS";
const CHANCES = 5;

let computerWins = "You Lose!";
let playerWins = "You Win!";

function game()
{
    let score_user = 0;
    let score_c = 0;
    for(i = 0 ; i<CHANCES;i++)
    {
        win = playRound(getUserChoice(prompt("please enter your input")),getComputerChoice())
        win === computerWins? score_c = score_c+1: win === playerWins ? score_user = score_user + 1 : score_user = score_user;
        console.log(win);
        console.log(score_c,score_user);
    }
    return score_c > score_user ? "Computer_Wins": score_user > score_c ? "User_Wins": "DRAW";
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
  function getRandomArbitrary(min, max) {
    return Math.round(~~(Math.random() * (max - min) + min));
}
