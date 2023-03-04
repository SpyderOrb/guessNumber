'use strict';

// MAIN GAME LOGIC
// Number between 1 and 20
const randomNumberFrom1To20 = () => Math.trunc(Math.random() * 20) + 1;
let secretNumber = randomNumberFrom1To20();
let score = 20;
let highscore = 0;

// Functions
const displayMessage = message =>
  (document.querySelector('.message').textContent = message);

const displayNumber = number =>
  (document.querySelector('.number').textContent = number);

const displayScore = score =>
  (document.querySelector('.score').textContent = score);

const displayValue = guessValue =>
  (document.querySelector('.guess').value = guessValue);

const displayHighscore = highscore =>
  (document.querySelector('.highscore').textContent = highscore);

const styleBackgroundAndWidth = (color, numberWidth) => {
  document.querySelector('body').style.backgroundColor = color;
  document.querySelector('.number').style.width = numberWidth;
};

// Event Listener for button Check!
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('❌ No number!');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    displayNumber(secretNumber);
    styleBackgroundAndWidth('#60b347', '30rem');

    if (score > highscore) {
      highscore = score;
      displayHighscore(highscore);
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('💔 You lost the game!');
      displayScore(0);
    }
  }
});

// Event Listener for button Again!
document.querySelector('.again').addEventListener('click', () => {
  // Restoring the initial vaues of the score and number variables.
  secretNumber = randomNumberFrom1To20();
  score = 20;
  // Restoring the initial conditions of the message, number, score and guess input field.
  displayMessage('Start guessing...');
  displayNumber('?');
  displayScore(20);
  displayValue('');
  // Restoring the original background color
  styleBackgroundAndWidth('#222', '15rem');
});
