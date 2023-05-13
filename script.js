//This game will play against the computer

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

//Create nodelist called buttons for all buttons with class="btn"
//Then loop through nodelist to add "click" event-listener
//When clicked, playRound function is called
const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => button.addEventListener("click", playRound))

//Initialize scores:
let playerScore = 0;
let computerScore = 0;

function playRound(e) {
    let playerSelection = e.target.value;
    let computerSelection = getComputerChoice();

    console.log(playerSelection);
    console.log(computerSelection);

    if (playerScore === 4 && computerScore === 4) {
        compareMatchPointTie(playerSelection, computerSelection);
    }
    else if (playerScore === 4) {
        compareMatchPointPlayer(playerSelection, computerSelection);
    }
    else if (computerScore === 4) {
        compareMatchPointComputer(playerSelection, computerSelection);
    }
    else compare(playerSelection, computerSelection);
}

// compare functions
function compare(playerSelection, computerSelection) {

    if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore += 1;
        outcome.textContent = "You lose. Rock beats paper";
        playerS.textContent = playerScore;
        computerS.textContent = computerScore;
        return computerScore;
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore += 1;
        playerS.textContent = playerScore;
        computerS.textContent = computerScore;
        outcome.textContent = "You lose. Scissors beats rock";
        return computerScore;
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore += 1;
        playerS.textContent = playerScore;
        computerS.textContent = computerScore;
        outcome.textContent = "You lose. Rock beats scissors";
        return computerScore;
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore += 1;
        playerS.textContent = playerScore;
        computerS.textContent = computerScore;
        outcome.textContent = "You win. Rock beats scissors";
        return playerScore;
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore += 1;
        playerS.textContent = playerScore;
        computerS.textContent = computerScore;
        outcome.textContent = "You win. Paper beats rock";
        return playerScore;
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore += 1;
        playerS.textContent = playerScore;
        computerS.textContent = computerScore;
        outcome.textContent = "You win. Scissors beats paper";
        return playerScore;
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

function compareMatchPointPlayer (playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore += 1;
        outcome.textContent = "You lose. Rock beats paper";
        playerS.textContent = playerScore;
        computerS.textContent = computerScore;
        return computerScore;
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore += 1;
        playerS.textContent = playerScore;
        computerS.textContent = computerScore;
        outcome.textContent = "You lose. Scissors beats rock";
        return computerScore;
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore += 1;
        playerS.textContent = playerScore;
        computerS.textContent = computerScore;
        outcome.textContent = "You lose. Rock beats scissors";
        return computerScore;
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore += 1;
        playerS.textContent = playerScore;
        computerS.textContent = computerScore;
        outcome.textContent = "You win. Rock beats scissors";
        gameOver.textContent = "GAME OVER - PLAYER WINS";
        return playerScore;
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore += 1;
        playerS.textContent = playerScore;
        computerS.textContent = computerScore;
        outcome.textContent = "You win. Paper beats rock";
        gameOver.textContent = "GAME OVER - PLAYER WINS";
        return playerScore;
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore += 1;
        playerS.textContent = playerScore;
        computerS.textContent = computerScore;
        outcome.textContent = "You win. Scissors beats paper";
        gameOver.textContent = "GAME OVER - PLAYER WINS";
        return playerScore;
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

function compareMatchPointComputer (playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore += 1;
        outcome.textContent = "You lose. Rock beats paper";
        playerS.textContent = playerScore;
        computerS.textContent = computerScore;
        gameOver.textContent = "GAME OVER - COMPUTER WINS";
        return computerScore;
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore += 1;
        playerS.textContent = playerScore;
        computerS.textContent = computerScore;
        outcome.textContent = "You lose. Scissors beats rock";
        gameOver.textContent = "GAME OVER - COMPUTER WINS";
        return computerScore;
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore += 1;
        playerS.textContent = playerScore;
        computerS.textContent = computerScore;
        outcome.textContent = "You lose. Rock beats scissors";
        gameOver.textContent = "GAME OVER - COMPUTER WINS";
        return computerScore;
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore += 1;
        playerS.textContent = playerScore;
        computerS.textContent = computerScore;
        outcome.textContent = "You win. Rock beats scissors";
        return playerScore;
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore += 1;
        playerS.textContent = playerScore;
        computerS.textContent = computerScore;
        outcome.textContent = "You win. Paper beats rock";
        return playerScore;
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore += 1;
        playerS.textContent = playerScore;
        computerS.textContent = computerScore;
        outcome.textContent = "You win. Scissors beats paper";
        return playerScore;
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

function compareMatchPointTie (playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore += 1;
        outcome.textContent = "You lose. Rock beats paper";
        playerS.textContent = playerScore;
        computerS.textContent = computerScore;
        gameOver.textContent = "GAME OVER - COMPUTER WINS";
        return computerScore;
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore += 1;
        playerS.textContent = playerScore;
        computerS.textContent = computerScore;
        outcome.textContent = "You lose. Scissors beats rock";
        gameOver.textContent = "GAME OVER - COMPUTER WINS";
        return computerScore;
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore += 1;
        playerS.textContent = playerScore;
        computerS.textContent = computerScore;
        outcome.textContent = "You lose. Rock beats scissors";
        gameOver.textContent = "GAME OVER - COMPUTER WINS";
        return computerScore;
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore += 1;
        playerS.textContent = playerScore;
        computerS.textContent = computerScore;
        outcome.textContent = "You win. Rock beats scissors";
        gameOver.textContent = "GAME OVER - PLAYER WINS";
        return playerScore;
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore += 1;
        playerS.textContent = playerScore;
        computerS.textContent = computerScore;
        outcome.textContent = "You win. Paper beats rock";
        gameOver.textContent = "GAME OVER - PLAYER WINS";
        return playerScore;
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore += 1;
        playerS.textContent = playerScore;
        computerS.textContent = computerScore;
        outcome.textContent = "You win. Scissors beats paper";
        gameOver.textContent = "GAME OVER - PLAYER WINS";
        return playerScore;
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