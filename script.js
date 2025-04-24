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

console.log(getComputerChoice());

function getHumanChoice() {
    return prompt("Rock, paper, or scissors?").toLocaleLowerCase();
}

console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;