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
