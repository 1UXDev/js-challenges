console.clear();

const animalStrings = [
  "cat",
  "dog",
  "elephant",
  "rabbit",
  "lion",
  "tiger",
  "horse",
  "giraffe",
  "zebra",
  "penguin",
  "polar bear",
  "panda",
  "koala",
  "kangoroo",
  "monkey",
  "sloth",
  "hippo",
  "rhino",
];

const hippoExists = animalStrings.find((animal) => animal === "hippo");
// returns "hippo"

// Hint: You can pass the starting index as second parameter.
const catStartingFromIndexFiveExists = animalStrings.includes("cat", 4);
//returns false

// Hint: Besides the array method, check out the string method `startsWith()`.
const firstAnimalStartingWithLetterP = animalStrings.findIndex((animal) => {
  return animal.startsWith("p");
});
// returns 9

const firstAnimalStartingWithLetterPCOPY = animalStrings[0].startsWith("p");
// returns false

const indexOfGiraffe = animalStrings.indexOf("giraffe");
//returns 7

// Note:
// - Sorting strings is slightly more complicated than sorting numbers.
// - You will need if-statements and return values of -1, 1, and 0.
// - Check out MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// Hint: There is no need to upper-/lowercase the strings before sorting them.
// Hint: sort() mutates the original array, which is bad.
// -> Use animals.slice().sort(...) to make a copy.
const animalsSortedAlphabetically = animalStrings.sort();
console.log(animalsSortedAlphabetically);

// Hint: Guess what? There is a string method called `endsWith()`.
let newArr = [];
let anyAnimalEndsWithLetterZ = animalStrings.forEach((animal) => {
  if (animal.endsWith("o")) {
    newArr.push(animal);
  }
});
//console.log(newArr);

/*
animalStrings.findIndex((animal) => {
  return animal.endsWith("z");
}); */
//returns -1

const everyAnimalHasMoreThanTwoLetters =
  /* animalStrings.reduce((a, b) => a + b).length / animalStrings.length >= 2
    ? console.log(true)
    : console.log(false); */
  animalStrings.map((animal) => animal.length).reduce((a, b) => a + b) /
    animalStrings.length >
  2
    ? true
    : false;

// Hint: There are several ways to go here. Let's focus on two options:
// Option 1: Concatenate all characters with `reduce()` and check for the `length` property of the result.
// Option 2: Use `map()` to create an array with the length values of all strings,
// 				then sum them up with `reduce()` (keyword: method chaining)
const sumOfAllAnimalCharacters = null;

export {
  hippoExists,
  catStartingFromIndexFiveExists,
  firstAnimalStartingWithLetterP,
  indexOfGiraffe,
  animalsSortedAlphabetically,
  anyAnimalEndsWithLetterZ,
  everyAnimalHasMoreThanTwoLetters,
  sumOfAllAnimalCharacters,
};
