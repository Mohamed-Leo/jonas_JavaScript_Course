"use strict";

// get elements---
const players = document.querySelectorAll(".player-box"),
diceImageDiv = document.querySelector(".dice-image"),
diceImage = document.querySelector(".dice-image img"),
rollBtn = document.getElementById('rollBtn'),
holdBtn = document.getElementById('holdBtn'),
resetGame = document.getElementById('resetGame');

// currentScore
let currentScore = 0;

// totalScore
let player1TotalScore = 0 , player2TotalScore = 0;

// winner totalScore
let winnerTotalScore = 20;

let playing = true;




// diceImageShow-------
const diceImageShow = (rollNumber) => {
    diceImage.src = `images/dice${rollNumber}.png`;
    diceImageDiv.classList.add("show-dice-image");
};


// rollBtn click action---
rollBtn.addEventListener("click" , () => {
    // check before playing----
    if(!playing) return;
    // get random number for roll--
    const rollNumber = Math.floor(Math.random() * 6) + 1;
    // update dice image--
    diceImageShow(rollNumber);

    // check on the rollNumber---
    if(rollNumber !== 1) changeTheCurrentScore(rollNumber);
    else switchPlayer();
});



// holdBtn click action-----
holdBtn.addEventListener("click" , () => {
    // check before playing----
    if(!playing) return;
    changeTheTotalScore();
    switchPlayer();
});



// changeTheCurrentScore
const changeTheCurrentScore = (rollNumber = 0) => {
    // increase the currentScore--
    currentScore += rollNumber;

    // loop to get the active player and the wanted player span----
    let activPlayer = Array.from(players).filter(player => player.classList.contains("active"));
    // change the activePlayer value to the span child
    activPlayer = activPlayer[0].lastElementChild.children[1];
    activPlayer.innerText = currentScore;
}


// changeTheTotalScore
const changeTheTotalScore = () => {

    // loop to get the active player and the wanted player total score----
    let activPlayer = Array.from(players).filter(player => player.classList.contains("active"));


    // check for the player to add his total---
    if(activPlayer[0].id === "player1") {
        // increase the player1TotalScore--
        player1TotalScore += currentScore;
        // update the player1TotalScore--
        let activPlayerTotal = activPlayer[0].children[1];
        activPlayerTotal.innerText = player1TotalScore;

        // check the winner, show the winner and stop playing---
        winnerPlayer(activPlayer[0] , player1TotalScore);
    }
    else {
        // increase the player2TotalScore--
        player2TotalScore += currentScore;
        // update the player1TotalScore--
        let activPlayerTotal = activPlayer[0].children[1];
        activPlayerTotal.innerText = player2TotalScore;

        // check the winner, show the winner and stop playing---
        winnerPlayer(activPlayer[0] , player2TotalScore);
    }
}


// switchPlayer
const switchPlayer = () => {
    // change the currentScore to 0
    currentScore = 0;
    changeTheCurrentScore();

    // change the active player----
    players.forEach(player => {
        if(player.classList.contains("active")) player.classList.remove("active");
        else player.classList.add("active");
    });
};




// winnerPlayer------
const winnerPlayer = (player , playerTotalScore) => {
    // check on the winner player---
    if(playerTotalScore >= winnerTotalScore) {
        player.classList.add("winner");
        // update the text---
        player.firstElementChild.textContent = `${player.id} is the winner`;
        // change playing to false
        playing = false;
        // hide the dice image---
        diceImageDiv.classList.remove("show-dice-image");
    }
}




// reset the game---
resetGame.addEventListener("click" , () => {
    currentScore = 0;
    player1TotalScore = 0;
    player2TotalScore = 0;
    playing = true;

    // loop to remove winner----
    players.forEach(player => {
        player.classList.remove("winner");
        player.classList.remove("active");
        // change the inner text of the h2 in every player box and the total score----
        player.children[0].textContent = `${player.id}`;
        player.children[1].textContent = 0;

        if(player.id === "player1") player.classList.add("active");
    })
});