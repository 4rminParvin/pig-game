'use strict';

// Elements
const btnRollEl = document.querySelector('.btn--roll');
const currentScore0El = document.querySelector('.current--0');

// State variables
let currentScore0 = 0;

// Main logic
btnRollEl.addEventListener('click', function () {
    const randomNum = Math.trunc(Math.random() * 6) + 1;
    console.log(randomNum);
    currentScore0 += randomNum;
    currentScore0El.textContent = currentScore0;
});

