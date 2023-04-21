console.clear();

const operand1 = 12;
const operand2 = 4;

/*
Mathematical operations
*/
const addButton = document.querySelector('[data-js="add"]');
const subtractButton = document.querySelector('[data-js="subtract"]');
const multiplyButton = document.querySelector('[data-js="multiply"]');
const divideButton = document.querySelector('[data-js="divide"]');
const exponentButton = document.querySelector('[data-js="exponent"]');
const moduloButton = document.querySelector('[data-js="modulo"]');

addButton.addEventListener("click", () => {
  let addthis = operand1 + operand2;
  console.log(addthis);
});

subtractButton.addEventListener("click", () => {
  let substractthis = operand1 - operand2;
  console.log(substractthis);
});

multiplyButton.addEventListener("click", () => {
  let multiplythis = operand1 * operand2;
  console.log(multiplythis);
});

divideButton.addEventListener("click", () => {
  let dividethis = operand1 / operand2;
  console.log(dividethis);
});

exponentButton.addEventListener("click", () => {
  let raisethis = operand1 ** operand2;
  console.log(raisethis);
});

moduloButton.addEventListener("click", () => {
  let remainderthis = operand1 / operand2;
  console.log(remainderthis);
});

/*
Update the first operand

Please don't forget to think about the declaration of the variable "operand1".
*/
const increaseByOneButton = document.querySelector(
  '[data-js="increase-by-one"]'
);
const increaseByFiveButton = document.querySelector(
  '[data-js="increase-by-five"]'
);
const decreaseByOneButton = document.querySelector(
  '[data-js="decrease-by-one"]'
);
const decreaseByFiveButton = document.querySelector(
  '[data-js="decrease-by-five"]'
);
const multiplyByTwoButton = document.querySelector(
  '[data-js="multiply-by-two"]'
);
const divideByTwoButton = document.querySelector('[data-js="divide-by-two"]');

increaseByOneButton.addEventListener("click", () => {
  let o1increased = +operand1;
  console.log(o1increased);
});

increaseByFiveButton.addEventListener("click", () => {
  let o1increased5 = operand1 + 5;
  console.log(o1increased5);
});

decreaseByOneButton.addEventListener("click", () => {
  let o1decreased = -operand1;
  console.log(o1decreased);
});

decreaseByFiveButton.addEventListener("click", () => {
  let o1decreased5 = operand1 - 5;
  console.log(o1decreased5);
});

multiplyByTwoButton.addEventListener("click", () => {
  let o1multiply2 = operand1 * 2;
  console.log(o1multiply2);
});

divideByTwoButton.addEventListener("click", () => {
  let o1divide2 = operand1 / 2;
  console.log(o1divide2);
});
