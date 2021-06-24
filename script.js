"use strict";
/*
console.log(document.querySelector(".message").textContent);

document.querySelector(".message").textContent = "Correct Number!🎉";
document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 20;

document.querySelector(".guess").value = 13;

*/
const random = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let guess;
console.log(random);
document.querySelector(".again").addEventListener("click", function () {
  guess = Number(document.querySelector(".guess").value);
  document.querySelector(".guess").value = "";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector("h1").textContent = "Guess My Number!";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "20rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = 0;
  score = 20;
});
document.querySelector(".check").addEventListener("click", function () {
  guess = Number(document.querySelector(".guess").value);
  if (guess == 0) {
    document.querySelector(".message").textContent = "No Number⛔️";
  } else if (random === guess) {
    document.querySelector(".message").textContent = "Correct Number🎉";
    document.querySelector(".number").textContent = guess;
    document.querySelector(".score").textContent = score;
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector("h1").textContent = "Cool, Awesome🥇";
    if (score > highScore) {
      document.querySelector(".highscore").textContent = score;
    } else {
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (score > 0) {
    document.querySelector(".message").textContent = `${
      random > guess ? "TOO LOW📈" : "TOO HIGH📉"
    }`;
    score--;
    document.querySelector(".score").textContent = score;
  } else {
    document.querySelector(".message").textContent = "You lost the game😭";
  }
});
