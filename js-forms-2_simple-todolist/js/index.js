console.clear();

const form = document.querySelector('[data-js="form"]');
const todoList = document.querySelector('[data-js="todoList"]');

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(form.elements.headline.value);
  console.log(form.elements.task.value);

  let newTask = document.createElement("li");
  newTask.innerHTML = `
  <h2>${form.elements.headline.value}</h2>
  <p>${form.elements.task.value}</p>
  `;

  todoList.append(newTask);

  form.reset();
  form.elements.headline.focus();
});
