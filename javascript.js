//initialize needed variables
let playerSelection;
let playerScore = 0;
let computerSelection;
let computerScore = 0;
let roundResult;
let playOptions = ['rock','paper','scissors'];

//function the randomly selects the computers choice
function getComputerChoice() {
    //generate random decimal from 0 to 1, multiply by 3 for r,p,s and then round down to obtain index
    const randomIndex = Math.floor(Math.random()*3);
    //using obtained index, retreive computer choice from options
    return playOptions[randomIndex];
}

//function to prompt the user for their choice
function getPlayerChoice() {
    //initialize user choice to something not possible
    let userInput = "";
    //while user inputs anything but rock paper or scissors, keep prompting
    while (!playOptions.includes(userInput)) {
        userInput = prompt('Rock, Paper or Scissors?:').toLocaleLowerCase();
    }
    return userInput;
}

//function to play a round
function playRound(computerSelection, playerSelection) {
    //if the player picks the same as the computer its a tie
    if (playerSelection == computerSelection) {
        return `You picked ${playerSelection} and the computer picked ${computerSelection}, it's a tie!`;
    }
    //win conditions for the player
    else if ((playerSelection == 'rock' && computerSelection == 'scissors')||
    (playerSelection == 'paper' && computerSelection == 'rock')||
    (playerSelection == 'scissors' && computerSelection == 'paper')) {
        playerScore = ++playerScore;
        return `You picked ${playerSelection} and the computer picked ${computerSelection}, you win!`;
    }
    //if its not a tie and the player didnt win, then they lose
    else {
        computerScore = ++computerScore;
        return `You picked ${playerSelection} and the computer picked ${computerSelection}, you lose!`;
    }
   
}

//function to play a game
function game() {
    //start game counter at 0, run for 5 rounds
    let gameCounter = 0;
    while (gameCounter < 5) {
        //get computer choice
        computerSelection = getComputerChoice();
        console.log(computerSelection);
        //get player choice
        playerSelection = getPlayerChoice();
        console.log(playerSelection);
        //check for round winner
        roundResult = playRound(computerSelection, playerSelection);
        console.log(roundResult);
        console.log(playerScore);
        console.log(computerScore);
        //increase round counter
        gameCounter = ++gameCounter;
    }
    //after 5 rounds, check scores and report the winner
    if (playerScore == computerScore) {
        return `You won ${playerScore} rounds and the computer won ${computerScore}, the game is a ties!`;
    }   
    else if (playerScore > computerScore) {
        return `You won ${playerScore} rounds and the computer won ${computerScore}, you win the game! :)`;
    }
    else if (playerScore < computerScore) {
        return `You won ${playerScore} rounds and the computer won ${computerScore}, you lose the game! :(`;
    }
}

let gameResult = game()
console.log(gameResult)









