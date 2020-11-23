const refs = {
  inputField: document.querySelector("#name-input"),
  outputField: document.querySelector("#name-output"),
};

const stranger = "незнакомец";
let userInput = "";

const readUserInput = () => {
  userInput = refs.inputField.value;

  if (userInput.trim() === "") {
    insertName(stranger);
  } else {
    insertName(userInput);
  }
};

const insertName = (name) => {
  refs.outputField.innerHTML = name;
};

refs.inputField.addEventListener("change", readUserInput);
