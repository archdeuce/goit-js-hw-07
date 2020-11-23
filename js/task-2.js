const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const refs = {
  ingredients: document.querySelector("#ingredients"),
};

const markup = ingredients.map((item) => `<li>${item}</li>`).join("");

refs.ingredients.insertAdjacentHTML("beforeend", markup);
