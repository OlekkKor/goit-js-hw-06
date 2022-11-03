const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", () => {
  if (textInput.value.length != textInput.dataset.length) {
    return (textInput.style.borderColor = "#f44336");
  }
  return (textInput.style.borderColor = "#4caf50");
});
