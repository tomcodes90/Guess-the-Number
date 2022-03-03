const btn = document.getElementById("btn");
const triesLeftElement = document.getElementById("triesLeft");
const input = document.getElementById("inputField");
let randomNumber = Math.floor(Math.random() * 10) + 1;
let triesLeft = 3;
let triesCounter = document.getElementById("triesCounter");
const gameMessage = document.getElementById("gameMessage");
const restart = document.getElementById("restartBtn");
triesCounter.textContent = triesLeft;
console.log(randomNumber);

btn.addEventListener("click", function () {
  const guessNumber = parseInt(input.value);
  if (guessNumber === randomNumber) {
    gameMessage.textContent = "You guessed the right number!";
    gameMessage.classList.remove("hideMessage");
    gameMessage.style.backgroundColor = "green";
    restart.classList.remove("hideMessage");
    btn.classList.add("hideMessage");
  } else {
    gameMessage.textContent = "Your guess is wrong!";
    gameMessage.classList.remove("hideMessage");
    triesLeft -= 1;
    triesCounter.textContent = triesLeft;
  }
  if (triesLeft === 0) {
    gameMessage.textContent = "You lost! Try again!";
    gameMessage.classList.remove("hideMessage");
    restart.classList.remove("hideMessage");
    btn.classList.add("hideMessage");
  }
});
restart.addEventListener("click", function () {
  gameMessage.classList.add("hideMessage");
  restart.classList.add("hideMessage");
  btn.classList.remove("hideMessage");
  gameMessage.style.backgroundColor = "red";
  return (
    (randomNumber = Math.floor(Math.random() * 10) + 1),
    (triesCounter.textContent = 3),
    (triesLeft = 3)
  );
});
