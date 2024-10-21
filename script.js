// declare 2 variable for player and computer score
let playerScore = 0;
let computerScore = 0;

// create computer choice function random choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const index = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[index];

    return computerChoice;
}

// declare 2 variable for player and computer selection
let playerSelection;
let computerSelection;

// create function playRound with player and computer selection, apply if else statement
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It's a tie! You both picked ${playerSelection}`;
    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            computerScore++;
            return `You lose! Computer picked ${computerSelection}, You picked ${playerSelection}`;
        } else if (computerSelection === "scissors") {
            playerScore++;
            return `You win! You picked ${playerSelection}, Computer picked ${computerSelection}`;
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            computerScore++;
            return `You lose! Computer picked ${computerSelection}, You picked ${playerSelection}`;
        } else if (computerSelection === "rock") {
            playerScore++;
            return `You win! You picked ${playerSelection}, Computer picked ${computerSelection}`;
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            computerScore++;
            return `You lose! Computer picked ${computerSelection}, You picked ${playerSelection}`;
        } else if (computerSelection === "paper") {
            playerScore++;
            return `You win! You picked ${playerSelection}, Computer picked ${computerSelection}`;
        }
    }
}

// declare the DOM for buttons and others
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const resultRound = document.querySelector("#resultRound");
const resultGame = document.querySelector("#resultGame");
const playAgain = document.querySelector("#play-again");

// create a variable that will disable the play again button
playAgain.disabled = true;

// create a playGame function with pick as parameter
// also access the buttons, it will be disabled once the score reaches to 5
function playGame(pick) {
    computerSelection = getComputerChoice();

    resultRound.textContent = playRound(pick, computerSelection);

    humanScore.textContent = "Human: " + playerScore;
    robotScore.textContent = "Computer: " + computerScore;

    if (playerScore == 5) {
        resultGame.textContent = "Victory is yours!";
        resultRound.textContent = "";
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
        playAgain.disabled = false;
    } else if (computerScore == 5) {
        resultGame.textContent = "You lost to a computer?! Wanna try again?";
        resultRound.textContent = "";
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
        playAgain.disabled = false;
    }
}

// add an event listener to the play again button that will reset the scores, text and should disable the rock, paper and scissors buttons
playAgain.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    resultGame.textContent = '';
    resultRound.textContent = 'Let\'s play';
    humanScore.textContent = "Human: 0";
    robotScore.textContent = "Computer: 0";
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
    playAgain.disabled = true;
});

// add an event listener to the choices, rock paper and scissors then implement the playGame function
rockBtn.addEventListener('click', () => {
    playGame("rock");
});

paperBtn.addEventListener('click', () => {
    playGame("paper");
});

scissorsBtn.addEventListener('click', () => {
    playGame("scissors");
});