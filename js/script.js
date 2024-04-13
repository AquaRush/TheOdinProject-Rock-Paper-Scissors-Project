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

// Output the computer and user's choice
function getPicks() {
  console.log("You picked: " + playerSelection);
  console.log("Computer picked: " + computerSelection);
}

// Get user's input choice and return it
function getPlayerChoice() {
  let playerChoice = prompt('Choose between "Rock", "Paper" or "Scissors"');

  if (choice.includes(playerChoice.toLowerCase())) {
    return playerChoice.toLowerCase(); 
  } 

  getPlayerChoice();

}

// Get computer's random choice and return it
function getComputerChoice() {
  let computerChoice = choice[Math.floor(Math.random() * choice.length)];
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {

  // Win condition check
  if (playerSelection === "scissors" && computerSelection === "paper" ||
    playerSelection === "rock" && computerSelection === "scissors" ||
    playerSelection === "paper" && computerSelection === "rock") {
    getPicks();
    return "You win!";
  }

  // Lose condition check
  if (computerSelection === "scissors" && playerSelection === "paper" ||
    computerSelection === "rock" && playerSelection === "scissors" ||
    computerSelection === "paper" && playerSelection === "rock") {
    getPicks();
    return "You lost.";
  }

  getPicks();
  return "It's a draw!";

}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));


/*
Write a NEW function called playGame()
Use the previous function inside of this one to play a five round game that keeps score and reports a winner or loser at the end.
Use prompt() to get input from the user.
*/