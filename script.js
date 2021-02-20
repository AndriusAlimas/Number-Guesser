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

    if(userGuess < 0 || userGuess > 9){
      alert("PLEASE MAKE SURE YOU PUT NUMBERS From 0 to 9! We set now to 0 this round!");
      userGuess = 0; // set to default
    }
    // check who is closest to target and make sure its positive number
    let userClose = getAbsoluteDistance(secretTarget,userGuess);
    let computerClose = getAbsoluteDistance(secretTarget,computerGuess);
  
    // if user closest then return true otherwise false
    let result =  (userClose <= computerClose)?  true : false;
    return result;
}

// increase the winner’s score after each round, depending on winner if its human or computer
const updateScore = winner => (winner === 'human')?humanScore++ : computerScore++;

const advanceRound = () => currentRoundNumber++;

const getAbsoluteDistance = (secret,guess) => {
  // convert string to integers
  secret = parseInt(secret);
  guess = parseInt(guess);

  return Math.abs(secret - guess);
}