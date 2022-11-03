const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const items = document.querySelector("#ingredients");
const array = [];

ingredients.forEach((element) => {
  const list = document.createElement("li");
  list.classList.add("item");
  list.textContent = element;
  array.push(list);
});

items.append(...array);
