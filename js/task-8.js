const refs = {
  divBoxes: document.querySelector("#boxes"),
  controls: document.querySelector("controls"),
  quantity: controls.querySelector("input"),
  renderBtn: controls.querySelector('button[data-action="render"]'),
  destroyBtn: controls.querySelector('button[data-action="destroy"]'),
};

let quantity = 0;

function renderMarkup() {
  refs.divBoxes.innerHTML = createBoxes(quantity);
  console.log(refs.divBoxes);
}

function createBoxes(amount) {
  let markup = "";

  for (let i = 0; i < amount; i++) {
    const scale = 30 + i * 10;
    markup += `<div style="height: ${scale}px; width: ${scale}px; background-color: rgb(${getRandomInt(
      255
    )},${getRandomInt(255)},${getRandomInt(255)});"></div><br/>`;
  }

  return markup;
}

function destroyBoxes() {
  refs.divBoxes.innerHTML = "";
}

function getQuantity() {
  quantity = Number(refs.quantity.value);
}

function getRandomInt(maxNumber) {
  return Math.floor(Math.random() * Math.floor(maxNumber));
}

refs.quantity.addEventListener("change", getQuantity);
refs.renderBtn.addEventListener("click", renderMarkup);
refs.destroyBtn.addEventListener("click", destroyBoxes);
