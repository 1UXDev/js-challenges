console.clear();

/*
1: Create the data for a book in an online store. Create variables for the following data:
  - the book title
  - the author
  - the rating
  - the number of sales
*/

let book = {
  title: "Journey to Gaia 13",
  author: "Isaac Asimov",
  rating: 8,
  sales: 1087654567,
};
// --v-- write your code here --v--

// --^-- write your code here --^--

/*
2: Log all variables to the console, for example:

Title: The Lord of the Javascript
Author: Mario
Rating: 4.2
Sales: 120

Increase the number of sales and change the rating of the book afterwards.
Then log all variables to the console again.
*/

// --v-- write your code here --v--
console.log("Title: " + book.title);
console.log("Author: " + book.author);
console.log("Rating: " + book.rating);
console.log("Sales: " + book.sales);

// --^-- write your code here --^--

/*
3: This code is quite repetitive and hard to read.
 - Write a function called logBookData which console logs all
   variables when it is called.
 - Then replace the console logs above with this function.
 - Now increase the number of sales 2 more times and log the data after each increase.
*/

// --v-- write your code here --v--
function myBookData(x) {
  console.log(x + ": " + book[x]);
}
myBookData("title");
myBookData("author");
myBookData("rating");
myBookData("Sales");
// --^-- write your code here --^--
