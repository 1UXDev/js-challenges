console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');
let i = 0;

addButton.addEventListener("click", () => {
  // Exercise: Append a new entry to the toast messages container
  const newToast = document.createElement("li");
  i += 1;
  newToast.classList.add("toast-container__message");
  newToast.textContent = `Roast the Toast #${i}`;
  toastContainer.append(newToast);
});

clearButton.addEventListener("click", () => {
  // Exercise: Clear the stack of toast messages
  toastContainer.innerHTML = "";
  i = 0;
});

/*
<ol class="toast-container" data-js="toast-container">
      <li class="toast-container__message">I'm a toast message.</li>
    </ol>
*/
