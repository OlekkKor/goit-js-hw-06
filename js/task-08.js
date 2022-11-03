const form = document.querySelector(".login-form");

const email = document.querySelector('input[name = "email"]');
const password = document.querySelector('input[name = "password"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!password.value || !email.value) {
    return alert("Необхідно заповнити всі значення Email та Password");
  }

  if (password.value && email.value) {
    const obj = {
      email: email.value,
      password: password.value,
    };
    console.log(obj);
  }
  event.currentTarget.reset();
});
