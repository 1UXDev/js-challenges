console.clear();

const input = document.querySelector('[data-js="toUpperCase"]');

input.addEventListener("input", () => {
  let myValue = input.value.split(" ").map((letter) => letter.toUpperCase());
  input.value = myValue.join(",");
});

/* 
//simpler solution in the eventListener:
let rawText=input.value;
let formattedText=rawText.toUpperCase()
input.value=formattedText; */
