let choices = ["ROCK", "PAPER", "SCISSORS"];

let playerwinner = false;
let computerwinner = false;
let tie = false;

let playerscore = 0;
let computerscore = 0;

function computerPlay() {
  let random = Math.floor(Math.random() * 3);

  return choices[random];
}

function playRound(player, computer) {
  if (player === computer) {
    tie = true;
    return tie;
  }

  if (player === "ROCK" && computer === "SCISSORS") {
    playerwinner = true;
    return playerwinner;
  }
  if (player === "SCISSORS" && computer === "ROCK") {
    computerwinner = true;
    return computerwinner;
  }
  if (player === "PAPER" && computer === "SCISSORS") {
    computerwinner = true;
    return computerwinner;
  }
  if (player === "SCISSORS" && computer === "PAPER") {
    playerwinner = true;
    return playerwinner;
  }
  if (player === "ROCK" && computer === "PAPER") {
    computerwinner = true;
    return computerwinner;
  }
  if (player === "PAPER" && computer === "ROCK") {
    playerwinner = true;
    return playerwinner;
  }
}

function playerchecker(player, computer) {
  if (playerwinner === true) {
    window.alert(`You win ${player} beats ${computer}`);
  }
  if (computerwinner === true) {
    window.alert(`You lose ${computer} beats ${player}`);
  }
  if (tie === true) {
    window.alert("TIE");
  }
}

function game(player, computer) {
  for (let i = 0; i < 5; i++) {
    playerchoice();
    playRound(p.toUpperCase(), c);
    playerchecker(p.toUpperCase(), c);
    c = computerPlay();

    if (playerwinner === true) {
      playerscore++;
    }
    if (computerwinner === true) {
      computerscore++;
    }
    if (tie === true) {
    }
    playerwinner = false;
    computerwinner = false;
    tie = false;
  }
  if (playerscore > computerscore) {
    console.log("Player wins");
  }
  if (playerscore < computerscore) {
    console.log("Computer wins");
  } else {
    console.log("It is a tie");
  }
}
let c = computerPlay();
let p;

function playerchoice() {
  p = prompt("What do you choose?");
  if (choices.includes(p.toUpperCase()) === false) {
    window.alert("You must choose between paper, scissors or rock");
    playerchoice();
  } else {
    return p;
  }
}

game(p, c);
