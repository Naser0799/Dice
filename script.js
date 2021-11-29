"use strict";
const score0EL = document.querySelector("#score--0");
const score1EL = document.getElementById("score--1");
const current0EL = document.getElementById("current--0");
const current1EL = document.getElementById("current--1");

const diceEL = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const btnNew = document.querySelector(".btn--new");
//Starting conditions
score0EL.textContent = 0;
score1EL.textContent = 0;
diceEL.classList.add("hidden");
let currentScore = 0;
//Rolling dice functionality
btnRoll.addEventListener("click", function () {
  //Generating rNDOM DICE ROLL
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  //Display dice
  diceEL.classList.remove("hidden");
  diceEL.src = `dice-${dice}.png`;
  //3. Check for rolled dice 1
  if (dice !== 1) {
    currentScore += dice;
    current0EL.textContent = currentScore;
  } else {
  }
});
