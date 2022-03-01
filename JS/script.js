'use strict';

// Elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const current0El = document.querySelector('.current--0');
const current1El = document.querySelector('.current--1');
const score0El = document.querySelector('.score--0');
const score1El = document.querySelector('.score--1');
const btnRollEl = document.querySelector('.btn--roll');
const btnHoldEl = document.querySelector('.btn--hold');
const btnNewEl = document.querySelector('.btn--new');
const diceEl = document.querySelector('.dice');

// State variables
let currentScore = 0;
let scores = [0, 0];
let activePlayer = 0;
let playing = true;
const winningScore = 100;

// Initializer
const init = function () {
    currentScore = 0;
    scores = [0, 0];
    activePlayer = 0;
    playing = true;
    
    current0El.textContent = currentScore;
    current1El.textContent = currentScore;
    score0El.textContent = scores[0];
    score1El.textContent = scores[1];

    diceEl.classList.add('hidden');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
};

init();

// Functions
const switchPlayer = function () {
    currentScore = 0;
    document.querySelector(`.current--${activePlayer}`).textContent = currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

// Main logic
btnRollEl.addEventListener('click', function () {
    if (playing) {
        const randomNum = Math.trunc(Math.random() * 6) + 1;
        diceEl.classList.remove('hidden');
        diceEl.src = `./Resources/${randomNum}_dots.png`;

        if (randomNum === 1) {
            switchPlayer();
        } else {
            currentScore += randomNum;
            document.querySelector(`.current--${activePlayer}`).textContent = currentScore;
        }
    }
});

btnHoldEl.addEventListener('click', function () {
    if (playing) {
        scores[activePlayer] += currentScore;
        document.querySelector(`.score--${activePlayer}`).textContent = scores[activePlayer];
    }

    if (scores[activePlayer] >= winningScore) {
        playing = false;
        document.querySelector('.dice').classList.add('hidden');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    } else {
        switchPlayer();
    }
});

btnNewEl.addEventListener('click', init);