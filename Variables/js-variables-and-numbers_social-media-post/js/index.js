console.clear();

window.onload = function () {
  const title = "Have you heard about Flexbox?";
  const text =
    "It's a powerful CSS layout system that makes it easier to create dynamic and responsive web layouts. With Flexbox, you can easily align and distribute content within a container, adjust the order of elements, and even create complex layouts without the need for floats or positioning. So if you're looking to up your web design game, definitely check out Flexbox! ";
  const likes = 294;
  const user = "Hans Zimmer";
  const isReported = false;

  console.log(title + text + likes + user + isReported);

  var likes2 = likes + 1;

  console.log(title + text + likes2 + user + isReported);

  document.getElementById("title").innerHTML = title;
  document.getElementById("text").innerHTML = text;
  document.getElementById("likes").innerHTML = likes2;
  document.getElementById("user").innerHTML = user;
  if (isReported === false) {
    document.getElementById("reported").innerHTML = "✅";
  } else {
    document.getElementById("reported").innerHTML = "❌";
  }
};
/*
1. Create the data for a small social media post. Create a const variable for each data point listed below.:
	- a title
	- a text
	- the number of likes
	- the user who created the post
	- a boolean called isReported
*/

// --v-- write your code here --v--

// --^-- write your code here --^--

/*
2. Log all variables to the console. Increase the likes by one and log the amount of likes again. Adapt your code from 1.1 if necessary.
*/

// --v-- write your code here --v--

// --^-- write your code here --^--
