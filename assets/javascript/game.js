// Declare array for possible computer choices
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var compGuess;
var userAllGuess = [];
var win = 0;
var loss = 0;
var guessRemain = 9;

// Create a function to generate a random computer guess
function computerGuess() {
    compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log("computer guess: " + compGuess);
};

// Call the function for the initial guess
computerGuess();

// Listen for input and format the case properly, then place into userAllGuess array
document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.which).toLowerCase();
    userAllGuess.push(userGuess);
    console.log("user guess: " + userGuess);

// Determine if guess matches computer and increment appropriate counter
// If win, reset the guessRemain counter, clear the userAllGuess array and call the function to generate a new computer guess
    if (userGuess === compGuess) {
        win++;
        guessRemain = 9;
        userAllGuess = [];
        computerGuess();
    }

// Let the user keep guessing until no guesses remain
    else if (guessRemain > 1) {
        guessRemain--;
    }

// The user loses. Reset the guessRemain counter, clear the userAllGuess array and call the function for a new computer guess
    else {
        loss++;
        guessRemain = 9;
        userAllGuess = [];
        computerGuess();
    }

// Update results on screen
document.getElementById("divWin").innerHTML = win;
document.getElementById("divLoss").innerHTML = loss;
document.getElementById("divGuessRemain").innerHTML = guessRemain;
document.getElementById("spanGuessInput").innerHTML = userAllGuess;

};