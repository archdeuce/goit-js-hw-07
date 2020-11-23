const refs = {
  inputField: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

const changeFontSize = () => {
  refs.text.style.fontSize = refs.inputField.value + "px";
};

refs.inputField.addEventListener("input", changeFontSize);
