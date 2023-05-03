//Psudo Code Outline:

//This game will play against the computer

//Begin with a function called "getComputerChoice"
//This function will randomly return "rock", "paper", or "scissors"
    //To return "rock", "paper", or "scissors" randomly, generate a random number between 1 and 3 (or 0 and 2)
//This function will make the computers move. It ties rock,paper,scissors to the random number between 1 and 3
//Make function that called "playRound"
    //playRound takes playerSelection from button clicked by user, and calls getComputerChoice for computerSelection
    //playRound compares playerSelection to computerSelection. It returns a string declaring the winner
//Write function called "game"
    //Call "playRound" inside of game to play a 5 round game. After 5 rounds "game" will declares a winner and loser.



const score = document.querySelector("#score");



//Assigns random integer from getRandomIntInclusive(min, max) to "Rock", "Paper", or "Scissors"
function getComputerChoice () {
    switch (getRandomIntInclusive(1,3)) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        default:
            return "scissors";
    }
}
//Returns 1, 2, or 3 randomly
function getRandomIntInclusive(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

//Reads value from clicked button, and assigns that value to playerSelection
//Create nodelist called buttons for all buttons with class="btn"
//Then loop through nodelist to add "click" event-listenet
//If clicked, then playerSelection is set to the clicked buttons "value"
//Then playRound is called with playerSelection passed in as an argument
const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => button.addEventListener("click", () => {
    let playerSelection = button.value;
    playRound(playerSelection);
}));


//playRound takes playerSelection as an argument
//playRound calls getComputerChoice to get computerSelection
//playRound compares playerSelection with computerSelection and returns result
//Result statement is passed as textContent into the score div

//Initialize scores:
let playerScore = 0;
let computerScore = 0;

function playRound (playerSelection) {

    let computerSelection = getComputerChoice();

    if (playerSelection === "rock" && computerSelection === "paper") {
        outcome.textContent = "You lose. Rock beats paper";
        computerScore += 1;
        playerS.textContent = playerScore;
        computerS.textContent = computerScore;
        return "computerWins";
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore += 1;
        playerS.textContent = playerScore;
        computerS.textContent = computerScore;
        outcome.textContent = "You lose. Scissors beats rock";
        return "computerWins";
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore += 1;
        playerS.textContent = playerScore;
        computerS.textContent = computerScore;
        outcome.textContent = "You lose. Rock beats scissors";
        return "computerWins";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore += 1;
        playerS.textContent = playerScore;
        computerS.textContent = computerScore;
        outcome.textContent = "You win. Rock beats scissors";
        return "playerWins";
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore += 1;
        playerS.textContent = playerScore;
        computerS.textContent = computerScore;
        outcome.textContent = "You win. Paper beats rock";
        return "playerWins";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore += 1;
        playerS.textContent = playerScore;
        computerS.textContent = computerScore;
        outcome.textContent = "You win. Scissors beats paper";
        return "playerWins";
    }
    else if (playerSelection === computerSelection) {
        outcome.textContent = "It's a tie";
        return "tieGame";
    }
    else {
        outcome.textContent = "Invalid input";
        return null;
    }

}


//DO NOT NEED ANY OF THIS BECAUSE PLAYROUND IS CALLED BY EVENT LISTENER
//Calls playRound() until 5 games (not counting ties) have been played. Tracks scores. Reports winner after 5 games
function game() {

    let playerScore = 0;
    let computerScore = 0;
    let tieGames = 0;
    let totalGames = 0;


    if (computerScore > playerScore) {
        console.log(`The computer wins ${computerScore}:${playerScore}`)
    }
    else console.log(`The player wins ${playerScore}:${computerScore}` )
}

game();



