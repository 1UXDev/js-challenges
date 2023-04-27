console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function addition(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  let data = new FormData(event.target);
  let dataObj = Object.fromEntries(data);

  let result = eval(
    `${dataObj.operator}(${dataObj.numberA}, ${dataObj.numberB})`
  );
  //dataObj.numberA dataObj.operator dataObj.numberB
  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
