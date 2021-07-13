// a function where the computer randomly selects an option
// out of Rock , Paper and Scissors
function computerPlay() {
    const options = ['Rock', 'Paper', 'Scissors'];
    const random = options[Math.floor(Math.random() * options.length)];
    return random;
}


// to keep count of the winners of each round
let player = 0;
let computer = 0;

// function to determine the winner of the round 
function playRound(playerSelection, computerSelection) {

    if ((playerSelection == 'rock' && computerSelection == 'Scissors') || (playerSelection == 'paper' && computerSelection == 'Rock') ||
     (playerSelection == 'scissors' && computerSelection == 'Paper')) {
         player = player + 1;
         return `You win!! ${playerSelection} beats ${computerSelection}. Score ${player} - ${computer}`
    }
    else if ((playerSelection == 'rock' && computerSelection == 'Paper') || (playerSelection == 'paper' && computerSelection == 'Scissors') ||
     (playerSelection == 'scissors' && computerSelection == 'Rock')) {
            computer = computer + 1;
            return `You Lose!! ${computerSelection} beats ${playerSelection}. Score ${player} - ${computer}`
        }
    else {
        return `It's a Tie!! Score ${player} - ${computer}`
    }
}


// function to play the game and declare the winner of the game
function game() {

    let round = 5;

    while (round > 0) {
        const playerSelection = prompt('Enter your choice Rock, Paper, or Scissors to play the game', '').toLowerCase();
        const computerSelection = computerPlay();
        alert(playRound(playerSelection, computerSelection));
        round = round - 1;
    }

    if (player > computer) {
        alert("You Won the game!");
    }
    else if ( player < computer) {
        alert("You Lost the game!");
    }
    else {
        alert("The game is tied.");
    }
}

game();
