let roundMessage;
let gameStatus = "Incomplete";
let playerPoint = 0;
let computerPoint = 0;
let playerChoice;
let roundCount = 0;
let victor = "";

const btn = document.querySelectorAll(".btn");
const results = document.querySelector("#results");
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");

const gameOver = document.createElement('div');
gameOver.textContent = "Game Over!";

const reset = document.createElement('button');
reset.textContent = "Reset";

//RPS Game
btn.forEach((button) => {
    button.addEventListener('click', () => {
        if (roundCount != 5 && gameStatus == "Incomplete") {
            playerChoice = button.id;
            roundMessage = playRound(playerChoice, computerPlay());
            roundSlice = roundMessage.slice(0,5);
            switch (roundSlice) {
                case ("You w"):
                    results.textContent = roundMessage;
                    roundCount++;
                    playerPoint++;
                    playerScore.textContent = "Player Score: " + playerPoint;
                    break;
                case ("You l"):
                    results.textContent = roundMessage;
                    roundCount++;
                    computerPoint++;
                    computerScore.textContent = "Computer Score: " + computerPoint;
                    break;
                case ("Draw!"):
                    results.textContent = roundMessage;
                    roundCount++;
                    break;
            }
        }
        if (roundCount === 5) {
            if (playerPoint > computerPoint) {
                victorMessage = "You win!";
            } else if (computerPoint > playerPoint) {
                victorMessage = "Computer wins!";
            } else {
                victorMessage = "It's a tie!";
            }
            gameStatus = "Complete";
            gameOver.textContent = "Game Over! " + victorMessage;
            results.appendChild(gameOver);
            results.appendChild(reset);
            return;
        }
    })
});

reset.addEventListener('click', () => {
    playerPoint = 0;
    playerScore.textContent = "Player Score: " + playerPoint;
    computerPoint = 0;
    computerScore.textContent = "Computer Score: " + computerPoint;
    roundCount = 0;
    results.removeChild(gameOver);
    results.removeChild(reset);
    results.textContent = "";
    gameStatus = "Incomplete";
})

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    switch ([playerSelection, computerSelection].join(',')) {
        case ("rock,rock"):
            roundMessage = "Draw! Try again!";
            return roundMessage
            break;
        case ("rock,paper"):
            roundMessage = "You lose! Paper beats Rock!";
            return roundMessage
            break;
        case ("rock,scissors"):
            roundMessage = "You win! Rock beats Scissors!";
            return roundMessage
            break;
        case ("paper,paper"):
            roundMessage = "Draw! Try again!";
            return roundMessage
            break;
        case ("paper,rock"):
            roundMessage = "You win! Paper beats Rock!";
            return roundMessage
            break;
        case ("paper,scissors"):
            roundMessage = "You lose! Scissors beats Paper!";
            return roundMessage
            break;
        case ("scissors,scissors"):
            roundMessage = "Draw! Try again!";
            return roundMessage
            break;
        case ("scissors,rock"):
            roundMessage = "You lose! Rock beats Scissors!";
            return roundMessage
            break;
        case ("scissors,paper"):
            roundMessage = "You win! Scissors beats Paper!";
            return roundMessage
            break;
    }
}

function computerPlay() {
    let randomNum = Math.random()*100;
    let num = randomNum.toFixed(0);
    if (num < 33) {
        return "Rock"
    } else if (num < 66) {
        return "Paper"
    } else {
        return "Scissors"
    }
}