let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);

const userInput = document.getElementById('userInput');
const submit = document.getElementById('submit');
const previousGuess = document.getElementById('previousGuess');
const remainigAttempt = document.getElementById('remainigAttempt');
const history = document.getElementsByClassName('history')[0];
const HiorLow = document.getElementById('HiorLow');

let prevNum = [];
let remain = 0;
let passGame = true;
const p = document.createElement('p');

if (passGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    let guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please Enter a valid number.");
  } else if (guess < 1) {
    alert("Please enter a number greater than 1.");
  } else if (guess > 100) {
    alert("Please enter a number less than 100.");
  } else {
    prevNum.push(guess);
    displayGuess(guess);
    if (remain >= 10) {
      displayMessage(`Game Over. The Random Number was ${randomNumber}`);
      endGame();
    } else {
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`🎉 You guessed it right! 🎉`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`📉 Too low!`);
  } else {
    displayMessage(`📈 Too high!`);
  }
}

function displayGuess(guess) {
  userInput.value = "";
  previousGuess.innerHTML += `${guess}, `;
  remain++;
  remainigAttempt.innerHTML = `${10 - remain}`;
}

function displayMessage(message) {
  HiorLow.innerHTML = `<span>${message}</span>`;
}

function endGame() {
  userInput.setAttribute('disabled', '');
  p.innerHTML = `<span id="newGame" style="cursor:pointer; color:blue;">Start New Game</span>`;
  history.appendChild(p);
  passGame = false;
  document.getElementById('newGame').addEventListener('click', startGame);
}

function startGame() {
  randomNumber = parseInt(Math.random() * 100 + 1);
  console.log(randomNumber);
  prevNum = [];
  remain = 0;
  previousGuess.innerHTML = "";
  remainigAttempt.innerHTML = "10";
  HiorLow.innerHTML = "";
  userInput.removeAttribute("disabled");
  if (p.parentElement) {
    p.parentElement.removeChild(p);
  }
  passGame = true;
}
