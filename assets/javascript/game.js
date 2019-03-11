

function randomLetterGen(){
    var alphabetalLetters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return alphabetalLetters.charAt(Math.floor(Math.random()*alphabetalLetters.length));
}

function guessingGame(userGuess){
    var wins = 0;
    var losses = 0;
    var guessesLeft = 10;
    //variables to hold dispplays on screem
    var winsText = document.getElementById("wins");
    var lossesText = document.getElementById("losses");
    var guessesLeftText = document.getElementById("guessesLeft");
    var randomLetter = randomLetterGen();
    console.log(randomLetter);
    
    
    if (userGuess===randomLetter){
        wins++;
    
    }
    else{
        losses++;
        guessesLeft--;
    }

    console.log(wins);
    console.log(losses);
    console.log(guessesLeft);
    
    
    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "losses: " + losses;
    guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
    console.log(userGuess);

    
}

document.onkeyup = function(event) {
    // Determines which key was pressed.
    
    var userGuess = event.key;
    //console.log(userGuess);
    guessingGame(userGuess);
    
}

    




