//Psudo Code Outline:

//This game will play against the computer

//Begin with a function called "getComputerChoice"
//This function will randomly return "Rock", "Paper", or "Scissors"
    //To return "Rock", "Paper", or "Scissors" randomly, generate a random number between 1 and 3 (or 0 and 2)
//This function will make the computers move

function getComputerChoice () {
    switch (getRandomIntInclusive(1,3)) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        default:
            return "Scissors";
    }
}

function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === "rock" && computerSelection === "paper") {
        return "You loose. Paper beats rock";
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You loose. Scissors beats paper";
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You loose. Rock beats scissors";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win. Rock beats scissors";
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win. Paper beats rock";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win. Scissors beats rock";
    }
    else return "Its a tie";
}

const playerSelection = "rock"
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection,computerSelection))

function getRandomIntInclusive(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}


  