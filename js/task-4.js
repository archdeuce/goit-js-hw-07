const refs = {
  counter: document.querySelector("#counter"),
  incrementBtn: counter.querySelector('button[data-action="increment"]'),
  decrementBtn: counter.querySelector('button[data-action="decrement"]'),
  value: counter.querySelector("#value"),
};

console.log("incrementBtn", refs.value);

let counterValue = 0;

const incrementValue = () => {
  counterValue++;
  refs.value.textContent = counterValue;
};

const decrementValue = () => {
  counterValue--;
  refs.value.textContent = counterValue;
};

refs.incrementBtn.addEventListener("click", incrementValue);
refs.decrementBtn.addEventListener("click", decrementValue);
