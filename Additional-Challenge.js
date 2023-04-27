let phrase = "i fear too early, for my mind misgives";

const newphrase = phrase
  .split(" ")
  .map((word) => word[0].toUpperCase() + word.substring(1))
  .join(" ");

console.log(newphrase);
/* for (i = 0; i < phrase.length; i++) {
  if (phrase[i] === " ") {
    phrase[i - 1] = phrase[i - 1].toUpperCase();
  }

  console.log(phrase[i]);
} */

/* let newphrase = phrase.split(" ")[1][0].toUpperCase();
console.log(newphrase);
 */
// Capitalize every first letter of each word for a given sentence.
// In this case the output should be:
// I Fear Too Early, For My Mind Misgives

/* let phrase1 = phrase.split(" ");
let phrase3 = [];
for (i = 0; i < phrase1.length; i++) {
  let phrase2 = phrase1[i].split("");
  phrase2.shift();
  phrase2.unshift(phrase1[i][0].toUpperCase());
  phrase2.join;
  //console.log(phrase2);
  phrase3[i] = phrase2;
}

phrase3.join(",");
console.log(phrase3);
 */
/* -----------------------------------------------
let output = "";
const words = phrase.split(" ");
for (const word of words) {
  // output += word[0].toUpperCase() + word;
  output += word.charAt(0).toUpperCase() + word;

  console.log(output);
}

console.log(output);
-------------------------------------------------- */
/* 
for (i = 0; i < phrase.split(" ").length; i++) {
  phrase.split(" ")[i][0] = phrase.split(" ")[i][0].toUpperCase();
} */

//console.log(phrase);
