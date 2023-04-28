console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');

likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const h1 = document.createElement("h1");
const article = document.createElement("article");
const p = document.createElement("p");
const footer = document.createElement("footer");
const span = document.createElement("span");
const button = document.createElement("button");

article.classList.add("post");
p.classList.add("post__content");
span.classList.add("post__username");
footer.classList.add("post__footer");
button.classList.add("post__button");

h1.textContent = "Juliens Social Media Post";
p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. ";
span.textContent = "mntzd";
button.textContent = "♥ Like";
button.type = "button";
button.setAttribute("data-js", "like-button2");

document.body.append(h1, article);
article.append(p, footer);
footer.append(span, button);

const likeButton2 = document.querySelector('[data-js="like-button2"]');
likeButton2.addEventListener("click", handleLikeButtonClick);
