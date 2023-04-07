//Psudo Code Outline:

//This game will play against the computer

//Begin with a function called "getComputerChoice"
//This function will randomly return "Rock", "Paper", or "Scissors"
    //To return "Rock", "Paper", or "Scissors" randomly, generate a random number between 1 and 3 (or 0 and 2)
//This function will make the computers move

function getComputerChoice () {
    return getRandomIntInclusive(1,3);
}

function getRandomIntInclusive(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}


  