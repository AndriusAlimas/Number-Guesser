let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// This function will be called at the start of each new round in order to generate the new secret target number.
const generateTarget = () =>{
    // This function should return a random integer between 0 and 9.
  return Math.floor(Math.random() * 10);
}

const compareGuesses = (userGuess,computerGuess,secretTarget) =>{
    /* Determines which player (human or computer) wins based on which guess is closest to the target.
     If both players are tied, the human user should win.
     */

    // convert string to integers
    userGuess = parseInt(userGuess);
    computerGuess = parseInt(computerGuess);
    secretTarget = parseInt(secretTarget);

    // check who is closest to target and make sure its positive number
    let userClose = Math.abs(secretTarget - userGuess);
    let computerClose = Math.abs(secretTarget - computerGuess);
  
    // if user closest then return true otherwise false
    (userClose > computerClose)? true : false;
}