/*
  JAVASCRIPT
''-main programming labngyage supported by web browser
  -single-threaded
  -use the Document Object Midel (DOM) interface
  to interact with HTML elements and CSS
*/

// randomly generate a color
// change the color of the heading

function randomColor() {
  // use rgb() color mode
  // statement end with semi-colons, not necessary if the only statement in a line
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  // use JS template string to inject variables into a String
  let colorValue = `rgb(${r} ${g} ${b})`;
  return colorValue;
}

// print to the console
console.log(randomColor());

// select the element we want to modify
let titleElement = document.getElementById("page-title");
titleElement.style.color = randomColor();

const RESPONSES = [
  "Maybe",
  "Perhaps",
  "Absolutely",
  "It does not appear that way",
  "Not a Chance",
  "If you're lucky"
];

// you can also select elements using querySelector
// allows you to use a css selector to match an element
// querySelectorAll - if multiple slements match, it gives you a list of the elements

// first para to addEventListener is the name of the evenbt you want ot trigger an action
// the second param is a function that executes when that action happens
// an arrow function in JS has no name, just exists in the context where it is executing
document.querySelector("#ask-btn").addEventListener("click", () => {
  // generate a random nunber between 0 and the length of responses
  let randomIndex = Math.floor(Math.random() * RESPONSES.length);
  // use that number to index the list to get a random response
  let randomResponse = RESPONSES[randomIndex];
  // change the text of our response p element to displahy our response
  document.querySelector("#response").innerText = "Response: " + randomResponse;
});

const PHOTOS = [
  "https://www.pbs.org/wnet/nature/files/2021/05/frog-1280x720.png",
  "https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-superJumbo.jpg",
  "https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg"
];

let index = 0;

document.querySelector(".painting").src = PHOTOS[index];

// TODO: add an event listener to both the previous and next buttons
document.querySelector("#prev").addEventListener("click", () => {
  index -= 1;
  document.querySelector("#next").disabled = false;
  if (index === 0) {
    index--;
    document.querySelector("#prev").disabled = true;
  }
  document.querySelector(".painting").src = PHOTOS[index];
});

function goToNext() {
  index += 1;
  document.querySelector("#prev").disabled = false;
  if (index === PHOTOS.length - 1) {
    document.querySelector("#next").disabled = true;
  }
  document.querySelector(".painting").src = PHOTOS[index];
}

document.querySelector("#next").addEventListener("click", goToNext);
// depending on which button is clicked, increment or decrement the index
// disable a button if clicking it would result in index out of bounds
