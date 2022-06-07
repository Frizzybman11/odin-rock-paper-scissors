function randomNum() {
    let randomNum = Math.random()*100;
    let num = randomNum.toFixed(0);
    return num
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
