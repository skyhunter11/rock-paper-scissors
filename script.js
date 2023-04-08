//Psudo Code Outline:

//This game will play against the computer

//Begin with a function called "getComputerChoice"
//This function will randomly return "Rock", "Paper", or "Scissors"
    //To return "Rock", "Paper", or "Scissors" randomly, generate a random number between 1 and 3 (or 0 and 2)
//This function will make the computers move. It ties ties rock,paper,scissors to the random number between 1 and 3
//Make function that called "playRound"
    //This function takes the playerSelection and the computerSelection as parameters
    //This function compares playerSelection to computerSelection. It returns a string declaring the winner
//Write function called "game".
    //Call "playRound" inside of game to play a 5 round game. After 5 rounds "game" will declares a winner and loser.

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

function getPlayerChoice () {
    return prompt("Enter 'Rock', 'Paper', or 'Scissors'.");
}

function playRound () {

    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();

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
        return "You win. Scissors beats paper";
    }
    else if (playerSelection === computerSelection) {
        return "It's a tie";
    }
    else return "Invalid input";
}

function game() {
    console.log(playRound());
}

game();

function getRandomIntInclusive(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}