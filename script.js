let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// This function will be called at the start of each new round in order to generate the new secret target number.
const generateTarget = () =>{
    // This function should return a random integer between 0 and 9.
    target = Math.floor(Math.random() * 10);
}