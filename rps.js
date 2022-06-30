let roundMessage;
const btn = document.querySelectorAll(".btn");

btn.forEach((button) => {
    button.addEventListener('click', () => {
        let playerChoice = button.id;
        console.log(playRound(playerChoice, computerPlay()));
    })
});


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

//function game() {
//     let playerPoint = 0
//     let computerPoint = 0
//     //for (let i = 0; i < 5; i++) {
//     //    playRound(prompt(), computerPlay());
//         roundSlice = roundMessage.slice(0,5);

//         switch (roundSlice) {
//             case ("You w"):
//                 playerPoint++;
//                 break;
//             case ("You l"):
//                 computerPoint++;
//                 break;
//             case ("Draw!"):
//                 break;
//         }
//         console.log(roundMessage)
//         console.log("Player: ",playerPoint," | Computer: ",computerPoint);
//     }
//     if (playerPoint > computerPoint) {
//         console.log("Game over. You win!")
//     } else if (computerPoint > playerPoint) {
//         console.log("Game over. You lose!")
//     } else {
//         console.log("Game over. It's a tie!")
//     }
// }