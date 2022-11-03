const area = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
const def = output.textContent;

area.addEventListener("input", (event) => {
  if (!event.currentTarget.value) {
    console.log(def);
    return (output.textContent = def);
  }
  console.log(output.textContent);
  return (output.textContent = event.currentTarget.value);
});
