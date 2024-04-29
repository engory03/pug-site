const form = document.getElementById("order-form");
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");

// Burger menu
burger.addEventListener("click", () => {
  nav.classList.toggle("active");
  burger.classList.toggle("active");
});

// Form
function submitForm(event) {
  event.preventDefault();

  const formData = new FormData(form);
  let data = {};

  for (var [key, value] of formData.entries()) {
    console.log(key, value);
    data[key] = value;
  }

  fetch("https://my-own-library.vercel.app/api/auth/signin", {
    method: "POST",

    // JSON data
    body: JSON.stringify(data),

    // form data
    // body: formData,
  });
}

form.addEventListener("submit", submitForm);
