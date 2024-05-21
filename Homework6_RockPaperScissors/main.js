function rules() {
  let choice = ["ROCK", "PAPER", "SCISSORS"];
  let random = Math.floor(Math.random() * 3);
  if (random === 0) {
    result = choice[2];
  } else if (random === 1) {
    result = choice[1];
  } else {
    result = choice[0];
  }
  return result;
}

let computer = rules();
let player = rules();

function gamePlay() {
  console.log(`Computer's choice: ${computer}`);
  console.log(`Player's choice: ${player}`);
  if (computer === "ROCK" && player === "PAPER") {
    console.log("Player wins");
  }
  if (computer === "ROCK" && player === "SCISSORS") {
    console.log("Computer wins");
  }
  if (computer === "PAPER" && player === "ROCK") {
    console.log("Computer wins");
  }
  if (computer === "PAPER" && player === "SCISSORS") {
    console.log("Player wins");
  }
  if (computer === "SCISSORS" && player === "PAPER") {
    console.log("Computer wins");
  }
  if (computer === "SCISSORS" && player === "ROCK") {
    console.log("Player wins");
  }
  if (computer === player) {
    console.log("Try again");
  }
}
gamePlay();
gamePlay();
gamePlay();
gamePlay();
gamePlay();
