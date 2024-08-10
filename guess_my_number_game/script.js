"use strict";

// get elements----
const againBtn = document.getElementById('again'),
checkBtn = document.getElementById('check'),
guessInput = document.querySelector('.guess'),
message = document.querySelector('.message'),
score = document.querySelector('.score'),
highscore = document.querySelector('.highscore'),
unknownIcon = document.querySelector('.unknownIcon');




// numberArray-------
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// randomNumber---
let randomNumber;

// get random number -----------
const getRandomNumber = () => randomNumber = numberArray[Math.floor(Math.random() * numberArray.length)];
getRandomNumber();


// check -----
checkBtn.addEventListener('click' , _ => {
    // get the input value---
    const guessedNumber = parseInt(guessInput.value);
    
    // check on value---
    if(guessedNumber) checkGuessedNumber(guessedNumber);
    else message.textContent = 'Please enter a number';
});



function checkGuessedNumber(guessedNumber) {
    // check if the value is the same with randomNumber-
    if(guessedNumber === randomNumber) correctGuess();
    else if (guessedNumber > 20 || guessedNumber < 1) wrongGuess("outRange")
    else if(guessedNumber > randomNumber) wrongGuess("bigger")
    else wrongGuess("smaller");
}



function correctGuess() {
    message.textContent = '🎉 Correct Number';
    // change the body backgroundColor
    document.body.style.backgroundColor = "#4cd137";
    // increase the highscore--
    highscore.textContent = Number(highscore.textContent) + randomNumber;
    // change the unknownIcon textContent--
    unknownIcon.textContent = randomNumber;
}



function wrongGuess(errorMessage) {
    if(errorMessage === "bigger") {
        message.textContent = '📉 Too high';
        // decrease the score by one
        score.textContent = parseInt(score.textContent) - 1;
    }
    else if (errorMessage === "smaller") {
        message.textContent = '📈 Too low';
        // decrease the score by one
        score.textContent = parseInt(score.textContent) - 1;
    }
    else {
        message.textContent = '🚫 Out of range';
        // decrease the score by one
        score.textContent = parseInt(score.textContent) - 1;
    }
}


// restart game----
againBtn.addEventListener('click' , () => {
    playAgain();
    // reset the randomNumber---
    getRandomNumber();
})


// playAgain--
function playAgain() {
    // change the body backgroundColor
    document.body.style.backgroundColor = "#222";
    // empty input-
    guessInput.value = '';
    // change the message textContent--
    message.textContent = 'start guessing...';
    // change the unknownIcon textContent--
    unknownIcon.textContent = '?';
    // change the score textContent--
    score.textContent = 20;
    // change the highscore textContent--
    highscore.textContent = 0;
}