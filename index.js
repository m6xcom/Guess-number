const startButt = document.querySelector("#start");
const confirmButt = document.querySelector("#confirm");
const moreButt = document.querySelector("#more");
const lessButt = document.querySelector("#less");
const resetButt = document.querySelector("#reset");
const numbersSpan = document.querySelector(".yourNumber");
const guessTitle = document.querySelector("#guess-title");

let lower;
let higher;
let totalSteps;
let currentNumber;

const startGuessing = () => {
  totalSteps = 1;
  lower = 0;
  higher = 100;
  currentNumber = Math.floor((higher + lower) / 2);
  startButt.classList.add("hidden");
  guessTitle.textContent = "Is it your number?";
  guessTitle.classList.remove("hidden");
  confirmButt.classList.remove("hidden");
  moreButt.classList.remove("hidden");
  lessButt.classList.remove("hidden");
  resetButt.classList.remove("hidden");
  numbersSpan.textContent = currentNumber;
};

const more = () => {
  totalSteps += 1;
  lower = currentNumber + 1;
  currentNumber = Math.floor((higher + lower) / 2);
  numbersSpan.textContent = currentNumber;
};

const less = () => {
  totalSteps += 1;
  higher = currentNumber - 1;
  currentNumber = Math.floor((higher + lower) / 2);
  numbersSpan.textContent = currentNumber;
};

const guessed = () => {
  guessTitle.textContent = `Your number was guessed for ${totalSteps} attempt(s)`;
  confirmButt.setAttribute("disabled", "true");
  moreButt.setAttribute("disabled", "true");
  lessButt.setAttribute("disabled", "true");
};

const resetGuessing = () => {
  currentNumber = 0;
  startButt.classList.remove("hidden");
  guessTitle.classList.add("hidden");
  confirmButt.classList.add("hidden");
  moreButt.classList.add("hidden");
  lessButt.classList.add("hidden");
  resetButt.classList.add("hidden");
  confirmButt.removeAttribute("disabled");
  moreButt.removeAttribute("disabled");
  lessButt.removeAttribute("disabled");
  numbersSpan.textContent = "--";
};

startButt.addEventListener("click", startGuessing);
resetButt.addEventListener("click", resetGuessing);
moreButt.addEventListener("click", more);
lessButt.addEventListener("click", less);
confirmButt.addEventListener("click", guessed);
