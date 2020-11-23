const refs = {
  categories: document.querySelector("#categories"),
  categoriesItems: categories.querySelectorAll(".item"),
};

const c = refs.categoriesItems.length;
console.log(`В списке ${c} категории.`);

for (const item of refs.categoriesItems) {
  console.log(
    `Категория: ${item.childNodes[1].textContent}. Количество элементов: ${
      item.querySelectorAll("li").length
    }`
  );
}
