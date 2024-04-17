/*
Write a function getComputerChoice() that returns either ‘Rock’, ‘Paper’ or ‘Scissors’
Write a function that plays a single round of RPS.
The function should take two parameters - the playerSelection and computerSelection - return a string that declares the winner "You Lose! Paper beats Rock"
The output of the function should be case-insensitive.

Algorithm:
    Scissor beats Paper
    Paper beats Rock
    Rock beats Scissor
*/

let choice = ['rock', 'paper', 'scissors'];

// Get user's input choice and return it
function getPlayerChoice() {

  let playerChoice = prompt('Choose between "Rock", "Paper" or "Scissors"');
  if (choice.includes(playerChoice.toLowerCase())) {
    return playerChoice.toLowerCase();
  }

  return getPlayerChoice();

}

// Get computer's random choice and return it
function getComputerChoice() {
  let computerChoice = choice[Math.floor(Math.random() * choice.length)];
  return computerChoice;
}

// Output the computer and user's choice
function getPicks(playerChoice, computerChoice) {
  console.log("You picked: " + playerChoice);
  console.log("Computer picked: " + computerChoice);
}


// Play round between user and computer
function playRound(playerSelection, computerSelection) {

  // Win condition check
  if (playerSelection === "scissors" && computerSelection === "paper" ||
    playerSelection === "rock" && computerSelection === "scissors" ||
    playerSelection === "paper" && computerSelection === "rock") {
    getPicks(playerSelection, computerSelection);
    return `You win! ${playerSelection[0].toUpperCase() + playerSelection.slice(1)} beats ${computerSelection[0].toUpperCase() + computerSelection.slice(1)}`;
  }

  // Lose condition check
  if (computerSelection === "scissors" && playerSelection === "paper" ||
    computerSelection === "rock" && playerSelection === "scissors" ||
    computerSelection === "paper" && playerSelection === "rock") {
    getPicks(playerSelection, computerSelection);
    return `You lost! ${computerSelection[0].toUpperCase() + computerSelection.slice(1)} beats ${playerSelection[0].toUpperCase() + playerSelection.slice(1)}`;
  }

  getPicks(playerSelection, computerSelection);
  return "It's a draw!";

}

/*
Write a NEW function called playGame()
Use the previous function inside of this one to play a five round game that keeps score and reports a winner or loser at the end.
Use prompt() to get input from the user.
*/

function playGame() {

  let rounds = 5;
  let playerPoints = 0;
  let computerPoints = 0;

  // Loop through rounds
  for (let i = 0; i < rounds; i++) {
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    const result = playRound(playerChoice, computerChoice);

    console.log(result);

    if (result.includes('You win')) {
      playerPoints++;
    } else {
      computerPoints++;
    }

  }

  if (playerPoints > computerPoints) {
    console.log("Congratulations, you won!");
  }

  if (playerPoints < computerPoints) {
    console.log("Unfortunately, you lost.");
  }

  return "It's a draw!";

}

playGame();
