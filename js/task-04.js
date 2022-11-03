const addNum = document.querySelector('button[data-action="increment"]');
const removeNum = document.querySelector('button[data-action="decrement"]');
const value = document.querySelector("#value");

const addValue = addNum.addEventListener("click", () => {
  let addNumberValue = Number(value.textContent) + 1;
  console.log(addNumberValue);
  return (value.textContent = addNumberValue);
});

const removeValue = removeNum.addEventListener("click", () => {
  let removeNumberValue = Number(value.textContent) - 1;
  console.log(removeNumberValue);
  if (removeNumberValue < 0) {
    return (value.textContent = 0);
  }
  return (value.textContent = removeNumberValue);
});

console.log(value.textContent);
