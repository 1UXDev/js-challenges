console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  pizzaSize1 = pizzaInput1.value;
  pizzaSize2 = pizzaInput2.value;
  updatePizzaDisplay(pizza1, pizzaSize1);
  calculatePizzaGain(pizzaSize1, pizzaSize2);
  updateOutputColor();
});

pizzaInput2.addEventListener("input", () => {
  pizzaSize1 = pizzaInput1.value;
  pizzaSize2 = pizzaInput2.value;
  updatePizzaDisplay(pizza2, pizzaSize2);
  calculatePizzaGain(pizzaSize1, pizzaSize2);
  updateOutputColor();
});

// Task 1
// define the function calculatePizzaGain here
function calculatePizzaGain(diameter1, diameter2) {
  let pizza1 = (Math.PI * (diameter1 / 2)) ** 2;
  let pizza2 = (Math.PI * (diameter2 / 2)) ** 2;
  output.innerHTML = Math.round(((pizza2 - pizza1) / pizza1) * 100);
  console.log(pizza1, pizza2);
}
//calculatePizzaGain(12, 15);

// Task 2
// define the function updatePizzaDisplay here
function updatePizzaDisplay(pizzaElement, newSize) {
  pizzaElement.style.width = (newSize / 24) * 100 + "px";
}

// Task 3
// define the function updateOutputColor here
function updateOutputColor(size1, size2) {
  if (pizzaInput1.value >= pizzaInput2.value) {
    outputSection.style.backgroundColor = "var(--red)";
  } else {
    outputSection.style.backgroundColor = "var(--green)";
  }
}
