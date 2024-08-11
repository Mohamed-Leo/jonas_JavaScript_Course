"use strict";

// get elements----
const againBtn = document.getElementById('again'),
checkBtn = document.getElementById('check'),
guessInput = document.querySelector('.guess'),
message = document.querySelector('.message'),
scoreSpan = document.querySelector('.score'),
highscoreSpan = document.querySelector('.highscore'),
unknownIcon = document.querySelector('.unknownIcon');



// get random number -----------
let randomNumber;
const getRandomNumber = () => randomNumber = Math.trunc(Math.random() * 20) + 1;
getRandomNumber();



// score and highScore---
let score = 20, highScore = 0;


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
    else if (guessedNumber > 20 || guessedNumber < 1) wrongGuess("outRange");
    else if(guessedNumber > randomNumber) wrongGuess("bigger");
    else wrongGuess("smaller");
}



function correctGuess() {
    // check first if the score > highScore
    if(score > highScore) {
        highScore = score
        highscoreSpan.textContent = highScore;
        message.textContent = '🎉 Correct Number';
        // change the body backgroundColor
        document.body.style.backgroundColor = "#4cd137";
        // change the unknownIcon textContent--
        unknownIcon.textContent = randomNumber;
    }
    else {
        message.textContent = '🎉 Correct Number';
        // change the body backgroundColor
        document.body.style.backgroundColor = "#4cd137";
        // change the unknownIcon textContent--
        unknownIcon.textContent = randomNumber;
    }
}



function wrongGuess(errorMessage) {
    // check first if the score is 0 
    if(!score) {
        message.textContent = '💥 You lost the game';
        // change the body backgroundColor
        document.body.style.backgroundColor = "##c0392b";
        return;
    }


    // decrease the score by one
    score--;

    if(errorMessage === "bigger") {
        message.textContent = '📉 Too high';
        scoreSpan.textContent = score;
    }
    else if (errorMessage === "smaller") {
        message.textContent = '📈 Too low';
        scoreSpan.textContent = score;
    }
    else {
        message.textContent = '🚫 Out of range';
        scoreSpan.textContent = score;
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
    // reset score and change the score textContent--
    score = 20;
    scoreSpan.textContent = score;
    // change the highscore textContent--
    highscoreSpan.textContent = highScore;
}