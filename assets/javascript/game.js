var alphaBet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guesses = [];
/* next line can be used to test computer guesses without using the console.  see var html at bottom to show html in doc. */
//var compGuesses = []; 

var computerGuess = alphaBet[Math.floor(Math.random() * alphaBet.length)];

document.onkeyup = function(event) {
    console.log("new guess " + computerGuess);
    var userGuess = event.key;
    guesses.push(userGuess);
    //compGuesses.push(computerGuess);
    // correct guesses, repeat computerGuess?
    if (userGuess === computerGuess) {
        guessesLeft = 10;
        guesses = [];
        wins++;
        computerGuess = alphaBet[Math.floor(Math.random() * alphaBet.length)];
        console.log("new guess " + computerGuess);
    }
    // incorrect guesses
    else {
        guessesLeft--;
    }
    // out of guesses, repeat computerGuess?
    if (guessesLeft <= 0) {
        guessesLeft = 10;
        losses++;
        guesses = [];
        computerGuess = alphaBet[Math.floor(Math.random() * alphaBet.length)];
        console.log("new guess " + computerGuess);
    }

    var html =
        "<p>Wins: " + wins + "<p>" +
        "<p>Losses: " + losses + "<p>" +
        "<p>Your Guesses: " + guesses + "<p>" +
        "<p>Guesses Left: " + guessesLeft + "<p>"
    /*+
                   "<p>Computer guessed: " + compGuesses + "<p>"*/
    ;

    document.querySelector(".gameText").innerHTML = html;

};
