const container = document.querySelector('.container');
const counterContainer = document.querySelector('.counter-container');
const incrementBtn = document.querySelector('.increment-button');
const decrementBtn = document.querySelector('.decrement-button');
const resetBtn = document.querySelector('.reset-button')
let count = 0;


incrementBtn.addEventListener('click', incrementCounter);
decrementBtn.addEventListener('click', decrementCounter);
resetBtn.addEventListener('click', reset);

function incrementCounter() {
  count++;
  counterContainer.innerText = count;

  if (decrementBtn.disabled === true) {
    decrementBtn.disabled = false;
  }

  if (count === 10) {
   incrementBtn.disabled = true;
  }
}

function decrementCounter() {
  count--;
  counterContainer.innerText = count;

  if (incrementBtn.disabled === true) {
    incrementBtn.disabled = false;
  }

  if (count < 1) {
    decrementBtn.disabled = true;
  }
}

function reset() {
  count = 0;
  counterContainer.innerText = count;
  incrementBtn.disabled = false;
  decrementBtn.disabled = true;
}
