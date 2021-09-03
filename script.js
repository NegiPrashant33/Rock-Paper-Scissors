//Function for the computer to randomly select it's option
function computerPlay() {
    const options = ['Rock', 'Paper', 'Scissors'];
    const random = options[Math.floor(Math.random() * options.length)];
    return random;
}

let playerCount = 0;
let computerCount = 0;

const btn = document.querySelectorAll('.buttons button');
let playerSelection = '';
btn.forEach((options) => {
    options.addEventListener('click', function() {
        let option = options.getAttribute('id');
        if (option === 'rock-btn') {
            playerSelection = 'Rock';
            game();
        }
        else if (option == 'paper-btn') {
            playerSelection = 'Paper';
            game();
        }
        else if (option === 'scissors-btn') {
            playerSelection = 'Scissors';
            game();
        }
    });
});


//Function to keep count of the winner and 
//display the current winner of the round
const score = document.querySelector('.score');
const player = document.querySelector('.player');
const computer = document.querySelector('.computer');

function playRound(playerSelection, computerSelection) {

    if ((playerSelection === 'Rock' && computerSelection === 'Scissors') || (playerSelection === 'Paper' && computerSelection === 'Rock')
     || (playerSelection === 'Scissors' && computerSelection === 'Paper')) {

        playerCount += 1;
        score.textContent = `You Won!`;
        player.textContent = `Player: ${playerCount}`
     }

     else if ((playerSelection === "Paper" && computerSelection === "Scissors") || (playerSelection === "Rock" && computerSelection === "Paper")
        || (playerSelection === "Scissors" && computerSelection === "Rock")) {

            computerCount += 1;
            score.textContent = "You Lost!";
            computer.textContent = `Computer: ${computerCount}`;
        }

    else if (playerSelection === computerSelection) {

            score.textContent = "It's a Tie!";
    }
}

//Hand sign comparison 
const playerChoice = document.querySelector('#player-choice');
const computerChoice = document.querySelector('#computer-choice');

function compareSign(playerSelection, computerSelection) {

    if (playerSelection === 'Rock') {
        playerChoice.className = 'fas fa-hand-rock fa-5x';
    }
    else if (playerSelection === 'Paper') {
        playerChoice.className = 'fas fa-hand-paper fa-5x';
    }
    else if (playerSelection === 'Scissors') {
        playerChoice.className = 'fas fa-hand-scissors fa-5x';
    }

    if (computerSelection === 'Rock') {
        computerChoice.className = 'fas fa-hand-rock fa-5x';
    }
    else if (computerSelection === 'Paper') {
        computerChoice.className = 'fas fa-hand-paper fa-5x';
    }
    else if (computerSelection === 'Scissors') {
        computerChoice.className = 'fas fa-hand-scissors fa-5x';
    }
}

//Popup Modal 
let winnerDeclared = false
const result = document.querySelector('.result-display');
const modalContainer = document.querySelector('.modal-container');

function displayModal(playerCount, computerCount) {
    modalContainer.classList.add('show')

    if (playerCount === 5) {
        result.textContent = "You Won the Game!"
        winnerDeclared = true;
    }
    else if (computerCount === 5) {
        result.textContent = "You Lost the Game!"
        winnerDeclared = true;
    }

}

const close = document.querySelector('.close');
close.addEventListener('click', () => {
    modalContainer.classList.remove('show');
});

// Restart Game
const restartBtn = document.querySelector('.restart-button');

restartBtn.addEventListener('click', function() {
    playerCount = 0;
    computerCount = 0;
    score.textContent = "Score";
    player.textContent = "Player: 0";
    computer.textContent = "Computer: 0";
    modalContainer.classList.remove('show');    
    playerChoice.className = '';
    computerChoice.className = '';  
});




function game() {
    if (winnerDeclared === false) {
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        compareSign(playerSelection, computerSelection);
    }
    

    if (playerCount === 5 || computerCount === 5) {
        displayModal(playerCount, computerCount);
    }
}

