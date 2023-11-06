const buttonDec = document.querySelector(`button[data-action="decrement"]`);
const buttonInc = document.querySelector(`button[data-action="increment"]`);
const number = document.querySelector(`#value`);
let counterValue = 0;
buttonDec.addEventListener(`click`, function () {
  counterValue -= 1;
  number.textContent = counterValue;
});
buttonInc.addEventListener(`click`, function () {
  counterValue += 1;
  number.textContent = counterValue;
});
