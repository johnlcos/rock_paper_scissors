//initialize needed variables
let playerSelection;
let computerSelection;
let roundResult;
let playOptions = ['rock','paper','scissors'];

//initialize players choice buttons
const btnRock = document.querySelector('.btn-rock');
const btnPaper = document.querySelector('.btn-paper');
const btnScissors = document.querySelector('.btn-scissors');

//initialize player and computer scores
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');

//initialize game updates
const gameUpdates = document.querySelector('.game-updates');

//function the randomly selects the computers choice
function getComputerChoice() {
    //generate random decimal from 0 to 1, multiply by 3 for r,p,s and then round down to obtain index
    const randomIndex = Math.floor(Math.random()*3);
    //using obtained index, retreive computer choice from options
    return playOptions[randomIndex];
}

//function to play a round
function playRound(computerSelection, playerSelection) {
    console.log(playerSelection);
    console.log(computerSelection);
    //if the player picks the same as the computer its a tie
    if (playerSelection == computerSelection) {
        gameUpdates.textContent = `You picked ${playerSelection} and the computer picked ${computerSelection}, it's a tie!`;
    }
    //win conditions for the player
    else if ((playerSelection == 'rock' && computerSelection == 'scissors')||
    (playerSelection == 'paper' && computerSelection == 'rock')||
    (playerSelection == 'scissors' && computerSelection == 'paper')) {
        let counter = parseInt(playerScore.textContent);
        counter++;
        playerScore.textContent = counter;
        gameUpdates.textContent = `You picked ${playerSelection} and the computer picked ${computerSelection}, you win!`;
    }
    //if its not a tie and the player didnt win, then they lose
    else {
        let counter = parseInt(computerScore.textContent);
        counter++;
        computerScore.textContent = counter;
        gameUpdates.textContent = `You picked ${playerSelection} and the computer picked ${computerSelection}, you lose!`;
    }
    gameOver()
}

//add event listeners to each button and play a round
btnRock.addEventListener('click', () => {playRound(getComputerChoice(),'rock')});
btnPaper.addEventListener('click', () => {playRound(getComputerChoice(),'paper')});
btnScissors.addEventListener('click', () => {playRound(getComputerChoice(),'scissors')});

//function to check if game over
function gameOver() {   
    //if player or computer has won 5 rounds, report and start new game   
    if (parseInt(playerScore.textContent) == 5) {
        gameUpdates.textContent = `You won ${playerScore.textContent} rounds and the computer won ${computerScore.textContent}, you win the game! :)`;
        computerScore.textContent = 0;
        playerScore.textContent = 0;
    }
    else if (parseInt(computerScore.textContent) == 5) {
        gameUpdates.textContent = `You won ${playerScore.textContent} rounds and the computer won ${computerScore.textContent}, you lose the game! :(`;
        computerScore.textContent = 0;
        playerScore.textContent = 0;
    }
}










