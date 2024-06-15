let roundWinner = [];
let buttons = document.querySelectorAll("button");
console.log(buttons);
let scoreboard = document.getElementById("scoreboard");
let pc = document.getElementById("pc");
let user = document.getElementById("user");

let reset = () => {
  roundWinner = [];
  scoreboard.innerText = "Let's start!";
  pc.innerText = 0;
  user.innerText = 0;
};

let computerChoice = function () {
  const variantePosibile = ["rock", "paper", "scissors"];
  return variantePosibile[Math.floor(Math.random() * variantePosibile.length)];
};

let winner = function (computerChoice, playerChoice) {
  let computerChoiceInput = document.getElementById("computer-choice");
  let playerChoiceInput = document.getElementById("player-choice");
  computerChoiceInput.value = computerChoice;
  playerChoiceInput.value = playerChoice;
  if (
    (computerChoice === "rock" && playerChoice === "paper") ||
    (computerChoice === "scissors" && playerChoice === "rock") ||
    (computerChoice === "paper" && playerChoice === "scissors")
  ) {
    roundWinner.push("Player");
  } else if (
    (computerChoice === "rock" && playerChoice === "scissors") ||
    (computerChoice === "scissors" && playerChoice === "paper") ||
    (computerChoice === "paper" && playerChoice === "rock")
  ) {
    roundWinner.push("Computer");
  } else {
    roundWinner.push("Tie");
  }
};

buttons.forEach((buton) => {
  buton.addEventListener("click", function () {
    if (this.id === "reset") {
      return reset();
    }
    winner(computerChoice(), this.id);
    let computerWins =
      roundWinner.filter((round) => round === "Computer").length === 3;
    let computerWinsNr = roundWinner.filter(
      (round) => round === "Computer"
    ).length;
    let playerWins =
      roundWinner.filter((round) => round === "Player").length === 3;
    let playerWinsNr = roundWinner.filter((round) => round === "Player").length;

    if (computerWins) {
      scoreboard.innerText = "Computer wins!";
      console.log("Computer wins!");
      roundWinner = [];
    }
    if (playerWins) {
      scoreboard.innerText = "You win!";
      console.log("You win!");
      roundWinner = [];
    }
    pc.innerText = computerWinsNr;
    user.innerText = playerWinsNr;
  });
});
