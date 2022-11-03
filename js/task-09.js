function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector(".change-color");
const color = document.querySelector(".color");

button.addEventListener("click", () => {
  color.textContent = getRandomHexColor();
  return (button.parentNode.parentNode.style.backgroundColor =
    getRandomHexColor());
});
