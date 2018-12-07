
var gtl = "";
var wins = 0;
var losses = 0;
var letterGuess = 0;

var winsElement = document.getElementById("wins");
var lossesElement = document.getElementById("losses");
var guessesLeftElement = document.getElementById("guessesLeft");
var guessesSoFarElement = document.getElementById("currentGuesses");
var gtl = "";
var alphabet = "abcdefghijklmnopqrstuvwxyz";

generateRandomLetter();

function generateRandomLetter(){
    while (gtl.length < 1) {
        gtl = alphabet[Math.floor(Math.random() * alphabet.length)];
    } 
    console.log(gtl);
}

document.onkeypress = function(e){
    console.log(e.key);
    letterGuess++;
    guessesLeftElement.innerText = 10 - letterGuess;
    guessesSoFarElement.append(e.key + ",");

    if (e.key == gtl) {
        wins++;
        winsElement.innerText = wins;

        gtl = "";
        generateRandomLetter();
        guessesSoFarElement.innerText="";

    }
    else{
        if(letterGuess>=10){
            losses++;
            lossesElement.innerText = losses;
            gtl = "";
            generateRandomLetter();
            letterGuess=0;
            guessesSoFarElement.innerText="";
        }
    }
}
