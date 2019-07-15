const guessInput = document.getElementById('guess-input');
const submitBtn = document.getElementById('submit');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const game = document.getElementById('game');
const note = document.getElementById('note');

let gameOver;
let winningNum;
let guessesLeft;

window.addEventListener('load', e => {
  resetGame();
});

submitBtn.addEventListener('click', e => {
  if (!gameOver) {
    // Player has Won!
    if (guessInput.value == winningNum) {
      gameOver = true;
      note.textContent = `${winningNum} is correct!`;
      note.style.color = 'green';
      guessInput.style.borderColor = 'green';
      submitBtn.value = 'Play Again?';
      guessInput.disabled = true;
    } else {
      guessesLeft--;

      if (guessesLeft == 0) {
        // Player is a loser, Gameover!
        gameOver = true;
        guessInput.disabled = true;
        note.textContent = `You have no more guesses. The correct answer was ${winningNum}.`;
        submitBtn.value = 'Play Again?';
        guessInput.style.borderColor = 'red';
        note.style.color = 'red';
      } else {
        // Wrong guess, but not gameover
        note.textContent = `${
          guessInput.value
        } is not correct. You have ${guessesLeft} guesses left.`;
        note.style.color = 'red';
        guessInput.value = '';
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
  guessInput.disabled = false;
  submitBtn.value = 'Submit';
  note.textContent = '';
  note.style.color = 'black';
  guessInput.value = '';
  guessInput.style.borderColor = 'black';
}

function getWinningNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
