const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listRef = document.body.querySelector("#ingredients");

function makeIngredientsList(items) {
  return items.map((item) => {
    const itemEl = document.createElement("li");
    itemEl.classList.add("item");
    itemEl.textContent = item;
    return itemEl;
  });
}

listRef.append(...makeIngredientsList(ingredients));
