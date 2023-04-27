console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let data = new FormData(event.target); //form would also work
  let dataObj = Object.fromEntries(data);
  console.log(dataObj);

  // get data from the Object
  const NOTOPTIMALfirstName = data.get("firstName"); // possible Solution but not optimal
  const firstName = dataObj.firstName;
  const ageBadnessSum = parseInt(dataObj.age) + parseInt(dataObj.badness);
  console.log("age badness sum of " + firstName + " is: " + ageBadnessSum);
});
