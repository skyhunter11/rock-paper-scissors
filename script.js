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

//Assigns random integer from getRandomIntInclusive(min, max) to "Rock", "Paper", or "Scissors"
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
//Returns 1, 2, or 3 randomly
function getRandomIntInclusive(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

function getPlayerChoice () {
    return prompt("Enter 'Rock', 'Paper', or 'Scissors'.");
}

//Compares computerSelection to playerSelection and returns result
function playRound () {

    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();


    if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("You lose. Rock beats paper")
        return "computerWins";
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log("You lose. Scissors beats rock")
        return "computerWins";
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("You lose. Rock beats scissors")
        return "computerWins";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("You win. Rock beats scissors")
        return "playerWins";
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You win. Paper beats rock")
        return "playerWins";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("You win. Scissors beats paper")
        return "playerWins";
    }
    else if (playerSelection === computerSelection) {
        console.log("It's a tie")
        return "tieGame";
    }
    else {
        console.log("Invalid input")
        return null;
    }
}

//Calls playRound() until 5 games (not counting ties) have been played. Tracks scores. Reports winner after 5 games
function game() {

    let playerScore = 0;
    let computerScore = 0;
    let tieGames = 0;
    let totalGames = 0;

    while (totalGames < 5) {
        roundResult = playRound();
        if (roundResult === "computerWins") {
            computerScore++;
        }
        else if (roundResult === "playerWins") {
            playerScore++;
        }
        else if (roundResult === "tieGame") {
            tieGames++;
            totalGames--
        }
        else totalGames--;
        totalGames++;
    }

    if (computerScore > playerScore) {
        console.log(`The computer wins ${computerScore}:${playerScore}`)
    }
    else console.log(`The player wins ${playerScore}:${computerScore}` )
}

game();