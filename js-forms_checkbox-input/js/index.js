console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const checkBox = document.querySelector("#tos"); // could also be accessed as form.elements.tos inside the eventlistener
const success = document.querySelector(".success");

hideError(tosError);
hideError(success);

function hideError(elem) {
  elem.setAttribute("hidden", "");
}

function showError(elem) {
  elem.removeAttribute("hidden");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // --v-- write your code here --v--
  if (checkBox.checked) {
    //could also do it without the else statement through if(!checkbox.checked)
    data = new FormData(event.target);
    dataObj = Object.fromEntries(data);
    console.log(dataObj);
    showError(success);
  } else {
    showError(tosError);
    return;
  }
  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  alert("Form submitted");
});
