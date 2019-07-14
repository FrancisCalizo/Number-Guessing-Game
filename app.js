const guessInput = document.getElementById('guess-input');
const submitBtn = document.getElementById('submit');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const game = document.getElementById('game');

let gameOver;
let winningNum;
let guessesLeft;
let userGuess;

window.addEventListener('load', e => {
  resetGame();
});

submitBtn.addEventListener('click', e => {
  if (!gameOver) {
    // Check If guess is correct
    userGuess = guessInput.value;

    if (userGuess == winningNum) {
      gameOver = true;
      console.log('You won');
    } else {
      guessesLeft--;
      console.log(`You have ${guessesLeft} guesses left.`);
      if (guessesLeft == 0) {
        console.log(`You have three kings, you lose. `);
        gameOver = true;
      }
    }
  } else {
    resetGame();
  }

  e.preventDefault();
});

function resetGame() {
  winningNum = getWinningNum(
    parseInt(minNum.textContent),
    parseInt(maxNum.textContent)
  );

  guessesLeft = 3;
  gameOver = false;
}

function getWinningNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
