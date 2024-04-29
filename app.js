const form = document.getElementById("order-form");
const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
  burger.classList.toggle("active");
});

function submitForm(event) {
  event.preventDefault();
  //   console.log(event);
  //   console.log(event.target);

  //   for (var [key, value] of data.entries()) {
  //     console.log(key, value);
  //   }

  const data = new FormData();
  data.append("name", nameInput.value);
  data.append("phone", phoneInput.value);
  console.log(nameInput.value, phoneInput.value);

  fetch("https://my-own-library.vercel.app/api/auth/signin", {
    method: "POST",
    body: JSON.stringify({ name: nameInput.value, phone: phoneInput.value }),
  });
}

form.addEventListener("submit", submitForm);
