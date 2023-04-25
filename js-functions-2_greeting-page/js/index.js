console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: you can get the current time: new Date().getHours() )

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');
const today = new Date();
let hour = today.getHours();
console.log(today, hour);
console.log(today.getDay());
console.log(typeof today.getDay());

function getGreeting() {
  if (hour > 22) {
    return "Good Night";
  } else if (hour > 18) {
    return "Good Evening";
  } else if (hour > 12) {
    return "Good Afternoon";
  } else if (hour > 6) {
    return "Good Morning";
  } else {
    return "Good Night";
  }
}

function getDayColor() {
  if (today.getDay() === 1) {
    return "darkgray";
  } else if (today.getDay() === 6 || today.getDay() === 7) {
    return "hotpink";
  } else {
    return "lightblue";
  }
}

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
