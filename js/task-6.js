const refs = {
  inputField: document.querySelector("#validation-input"),
};

const correctQuantity = Number(refs.inputField.dataset.length);

const checkInput = () => {
  const inputLength = refs.inputField.value.length;

  if (inputLength === correctQuantity) {
    setValidInput();
  } else {
    setInvalidInput();
  }
};

const setValidInput = () => {
  refs.inputField.classList.remove("invalid");
  refs.inputField.classList.add("valid");
};

const setInvalidInput = () => {
  refs.inputField.classList.remove("valid");
  refs.inputField.classList.add("invalid");
};

refs.inputField.addEventListener("blur", checkInput);
