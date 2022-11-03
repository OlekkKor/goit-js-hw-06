const inputEl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

inputEl.addEventListener("input", () => {
  const inputValue = inputEl.value;
  console.log(inputValue);
  text.style.fontSize = `${inputValue}px`;
});
