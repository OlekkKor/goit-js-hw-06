const category = document.querySelector("#categories");

const itemCategory = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemCategory.length}`);

itemCategory.forEach((el) => {
  console.log(`Category: ${el.firstElementChild.textContent}`);
  console.log(`Elements: ${el.lastElementChild.children.length}`);
});

// const title = document.querySelectorAll("h2");

// console.log(`Category: ${title[0].textContent}`);
// console.log(`Elements: ${itemCategory[0].lastElementChild.children.length}`);

// console.log(`Category: ${title[1].textContent}`);
// console.log(`Elements: ${itemCategory[1].lastElementChild.children.length}`);

// console.log(`Category: ${title[2].textContent}`);
// console.log(`Elements: ${itemCategory[2].lastElementChild.children.length}`);
