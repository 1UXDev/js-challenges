console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

const darkBtn = document.querySelector('[data-js="dark-mode-button"]');
const lightBtn = document.querySelector('[data-js="light-mode-button"]');
const toggleBtn = document.querySelector('[data-js="toggle-button"]');

darkBtn.addEventListener("click", () => {
  bodyElement.classList.add("dark");
  console.log("darkmode activated");
});

lightBtn.addEventListener("click", () => {
  bodyElement.classList.remove("dark");
  console.log("lightmode activated");
});

toggleBtn.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
  console.log("darkmode toggled");
});
