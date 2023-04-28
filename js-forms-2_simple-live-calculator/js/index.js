console.clear();

const firstInput = document.querySelector('[data-js="firstValue"]');
const secondInput = document.querySelector('[data-js="secondValue"]');
const result = document.querySelector('[data-js="result"]');

/* firstInput.addEventListener("input", () => {
  multiplier();
});

secondInput.addEventListener("input", () => {
  multiplier();
});

*/

//Shorter way, but this way you cannot need the (~parameter~) that is usually after the eventlistener event (but you dont need this here)
firstInput.addEventListener("input", multiplier);
secondInput.addEventListener("input", multiplier);

function multiplier() {
  result.textContent = firstInput.value * secondInput.value;
}
