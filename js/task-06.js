const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", () => {
  if (textInput.value.length != textInput.dataset.length) {
    textInput.classList.remove('valid');
    textInput.classList.add('invalid');
  } else {
    textInput.classList.add('valid');
    textInput.classList.remove('invalid');
  }
});
