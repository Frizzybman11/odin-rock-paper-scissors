function playRound(playerSelection, computerSelection) {
    switch (playerSelection, computerSelection) {
        case ("Rock", "Rock"):
            roundMessage = "Draw! Try again!";
            break;
        case ("Rock", "Paper"):
            roundMessage = "You lose! Paper beats Rock!";
            break;
        case ("Rock", "Scissors"):
            roundMessage = "You win! Rock beats Scissors!";
            break;
        case ("Paper", "Paper"):
            roundMessage = "Draw! Try again!";
            break;
        case ("Paper", "Rock"):
            roundMessage = "You win! Paper beats Rock!";
            break;
        case ("Paper", "Scissors"):
            roundMessage = "You lose! Scissors beats Paper!";
            break;
        case ("Scissors", "Scissors"):
                roundMessage = "Draw! Try again!";
                break;
        case ("Scissors", "Rock"):
            roundMessage = "You lose! Rock beats Scissors!";
            break;
        case ("Scissors", "Paper"):
            roundMessage = "You win! Scissors beats Paper!";
            break;
    }
    return roundMessage
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
