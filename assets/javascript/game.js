
//declaring global variables 
var userGuess = "";
var guessesSoFar = [];
var ComGuess = "";
var wins = 0;
var losses = 0;
var guessesLeft = 10;

//variables to hold dispplays on screem. Basically variables to accesss the html tags
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessesLeftText = document.getElementById("guessesLeft");
var randomLetter = randomLetterGen();
var guessesSoFarText = document.getElementById("guessesSoFar");

//function that generates the random letters used to compare with user input
function randomLetterGen() {
    var alphabetalLetters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    ComGuess = alphabetalLetters.charAt(Math.floor(Math.random() * alphabetalLetters.length));
}

function guessingGame(userGuess) {

    // var  guessesSoFarText   = document.getElementById("userGuess").value;
    console.log(randomLetter);

    winsText.textContent = wins;
    lossesText.textContent = losses;
    guessesLeftText.textContent = guessesLeft;
    guessesSoFarText.textContent = guessesSoFar.join(",");
    console.log(userGuess);

}

document.onkeyup = function (event) {
   
    // Determines which key was pressed.
    userGuess = event.key;
    //console.log(userGuess);
    guessingGame(userGuess);
    guessesLeft--;
    guessesLeftText.textContent = guessesLeft;
    guessesSoFar.push(userGuess);
    console.log(guessesSoFar);

    if (userGuess === randomLetter) {
        wins++;
        guessesLeft = 10;
        winsText.textContent = wins;
        guessesLeftText.textContent = guessesLeft;


    }
    //  else{
    //     guessesLeft--;
    //     guessesLeftText.textContent = guessesLeft;

    // }

    // conditional statememt that tells the guessesLeft to reset to it's initial setting when the guessesLeft reaches 0
    if (guessesLeft === 0) {
        losses++;
        guessesLeft = 10;
        lossesText.textContent = losses;

        guessesSoFar.length = 0
        guessesLeftText.textContent = guessesLeft;
        
    }


    console.log(wins);
    console.log(losses);
    console.log(guessesLeft);

    //this .join() method is used to insert the comma in the array. 
    guessesSoFarText.textContent = guessesSoFar.join(",");
    console.log(userGuess);
}
    //calling the function that generates the random letters
    randomLetterGen();

    //function for resetting game
function gameReset() {
    wins = 0;
    losses = 0;
    guessesLeft = 10;
    guessesSoFar.length=0
    winsText.textContent = wins;
    lossesText.textContent = losses;
    guessesLeftText.textContent = guessesLeft;
    guessesSoFarText.textContent = guessesSoFar;

};

