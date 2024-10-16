function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const choice = choices[randomIndex];

    return choice;
}

function getHumanChoice() {
    const userInput = prompt("Please select a weapon. Rock, Paper or Scissors");
    return userInput;
}

let humanScore = 0;
let computerScore = 0;
let tieScore = 0;

function playGame() {
    for (let i = 1; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    function playRound(humanChoice, computerChoice) {
        humanChoice.toLowerCase();
        computerChoice.toLowerCase();
    
        if (
            humanChoice === "rock" && computerChoice === "scissors" ||
            humanChoice === "paper" && computerChoice === "rock" ||
            humanChoice === "scissors" && computerChoice === "paper"
        ) {
            console.log(`You win! You chose ${humanChoice} and computer chose ${computerChoice}`);
            humanScore++;
        } else if (
            computerChoice === "rock" && humanChoice === "scissors" ||
            computerChoice === "paper" && humanChoice === "rock" ||
            computerChoice === "scissors" && humanChoice === "paper"
        ) {
            console.log(`You lose! Computer chose ${computerChoice} and You chose ${humanChoice}`);
            computerScore++;
        } else {
            console.log(`It's a tie! You chose ${humanChoice} and computer also chose ${computerChoice}`);
            tieScore++;
        }
    }

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    if (humanScore > computerScore) {
        console.log(`You win with the score ${humanScore} to ${computerScore}`);
        humanScore = 0;
        computerScore = 0;
        tieScore = 0;
    } else if (humanScore < computerScore) {
        console.log(`You lose with the score ${humanScore} to ${computerScore}`);
        humanScore = 0;
        computerScore = 0;
        tieScore = 0;
    } else {
        console.log(`It's a tie with the score ${humanScore} to ${computerScore}`);
        humanScore = 0;
        computerScore = 0;
        tieScore = 0;
    }
}

playGame();