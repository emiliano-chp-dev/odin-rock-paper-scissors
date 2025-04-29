function getComputerChoice() {
    let computerChoice = '';
    let randomInt = getRandomInt(3);

    if (randomInt === 0) {
        computerChoice = 'rock';
    } else if (randomInt === 1) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }

    return computerChoice;
}

function getRandomInt (num) {
    return Math.floor(Math.random() * num);
}

function getHumanChoice() {
    return prompt("Rock, paper, or scissors?");
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice, computerChoice) {
        let roundResult = "";
    
        if (humanChoice.toLowerCase() === computerChoice) {
            roundResult = "It's a draw!";
        } else if (humanChoice.toLowerCase() === "rock" && computerChoice === "paper") {
            roundResult = "You lose! Paper beats rock.";
            computerScore++;
        } else if (humanChoice.toLowerCase() === "rock" && computerChoice === "scissors") {
            roundResult = "You win! Rock beats scissors.";
            computerScore++;
        } else if (humanChoice.toLowerCase() === "paper" && computerChoice === "rock") {
            roundResult = "You win! Paper beats rock.";
            humanScore++;
        } else if (humanChoice.toLowerCase() === "paper" && computerChoice === "scissors") {
            roundResult = "You lose! Scissors beats paper.";
            computerScore++;
        } else if (humanChoice.toLowerCase() === "scissors" && computerChoice === "rock") {
            roundResult = "You lose! Rock beats scissors.";
            computerScore++;
        } else if (humanChoice.toLowerCase() === "scissors" && computerChoice === "paper") {
            roundResult = "You win! Scissors beats paper."
            humanScore++;
        }
    
        return roundResult;
    }

    // let roundCounter = 1;
    // while (roundCounter <= 5) {
    //     console.log(playRound(getHumanChoice(), getComputerChoice()));
    //     ++roundCounter;
    // }
}

playGame();
