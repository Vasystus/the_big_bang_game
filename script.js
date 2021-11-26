// Grab the buttons from the page

const userButtons = document.querySelectorAll(".move_button");

// Get the computer-choice and outcome elements from HTML

const sheldonChoice = document.querySelector("#sheldon_choice");
const outcomeText = document.querySelector(".outcome_text");

// When the user chooses a move:

// Assign the user's choice to a variable

const getUserChoice = (event) => {
  return event.target.innerText;
};

// Generate a move for the computer

const getSheldonChoice = () => {
  const choices = ["rock", "paper", "scissors", "lizard", "Spock"];
  const index = Math.floor(Math.random() * 5);
  sheldonChoice.innerText = choices[index];
  return choices[index];
};

// Work out the winner

const calculateWinner = (event) => {
  const userChoice = getUserChoice(event);
  const shellyChoice = getSheldonChoice();

  // Check if there is a tie
  if (userChoice === shellyChoice) {
    return "All hail Sam Kass! It's a tie!";
  } else if((userChoice === 'scissors' && shellyChoice === 'paper') 
    || ( userChoice === 'rock' && shellyChoice === 'scissors') 
    || ( userChoice === 'paper' && shellyChoice === 'rock') 
    || (userChoice === 'rock' && shellyChoice === 'lizard') 
    || (userChoice === 'lizard' && shellyChoice === 'Spock' ) 
    || (userChoice === 'Spock' && shellyChoice === 'scissors') 
    || (userChoice === 'scissors' && shellyChoice === 'lizard') 
    || ( userChoice === 'lizard' && shellyChoice === 'paper') 
    || (userChoice === 'paper' && shellyChoice === 'Spock') 
    || (userChoice === 'Spock' && shellyChoice === 'rock')){
    return "Congratulations! You won!";
  }
  else {
    return "Bazinga! Sheldon won!";
  }
}

// Display the winner
function updateDOM(event) {
  outcomeText.textContent = calculateWinner(event);
}

// Write a function to add an eventlistener to an element

userButtons.forEach((element) => {
  element.addEventListener("click", updateDOM);
});