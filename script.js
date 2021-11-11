//generate a randomnumber
let randomNumber = Math.floor(Math.random() * 100) + 1;
//Declarations
let count = 1;
let guesses = document.querySelector(".guesses");
let input = document.querySelector(".guessField");
let submit = document.querySelector(".guessSubmit");
let lastResult = document.querySelector(".lastResult");
let lowOrHi = document.querySelector(".lowOrHi");
let startGameBtn = document.querySelector(".startGameBtn");
let resultParas = document.querySelectorAll(".resultParas");

//

//comparing the guess with our random number;
//Start New game
const compareResult = () => {
  console.log(randomNumber);
  let guessedNumber = Number(input.value);
  if (count === 1) {
    guesses.textContent = " Previous Guesses :";
  }
  guesses.textContent = guesses.textContent + guessedNumber + " ";
  if (randomNumber === guessedNumber) {
    console.log("correct");
    correctGuessedNumber();
    resetGame();
  } else if (count === 10) {
    submit.disabled = true;
    lastResult.textContent = "Game OVer";
    lastResult.style.backgroundColor = "red";
    lastResult.style.color = "white";
    resetGame();
  } else {
    lastResult.textContent = "wrong!";
    lastResult.style.backgroundColor = "red";
    lastResult.style.color = "white";
    if (guessedNumber < randomNumber) {
      console.log("low");
      lowOrHi.textContent = "your guess is too low";
    } else if (guessedNumber > randomNumber) {
      console.log("high");
      lowOrHi.textContent = "your guess was too high";
    }
  }
  count++;
  input.value = "";
  input.focus(); //This line uses the focus() method to automatically put the text cursor into the <input> text field as soon as the page loads
};
const resetGame = () => {
  let resetGameBtn = document.createElement("button");
  resetGameBtn.textContent = "Start New Game";
  startGameBtn.appendChild(resetGameBtn);
  resetGameBtn.addEventListener("click", reset);
};

const correctGuessedNumber = () => {
  submit.disabled = true;
  lastResult.textContent = "Congratulations you won the game.";
  lastResult.style.backgroundColor = "green";
  lastResult.style.color = "white";
  lowOrHi.textContent = "";
};
const reset = () => {
  count = 1;
  for (let i = 0; i < resultParas.length; i++) {
    resultParas[i].textContent = "";
  }
  submit.disabled = false;
  lastResult.style.backgroundColor = "white";
  resetGameBtn.parentNode.removeChild(resetGameBtn);
  input.value = "";
  randomNumber = Math.floor(Math.random() * 100) + 1;
};

submit.addEventListener("click", compareResult);
