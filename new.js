// Centralize JavaScript Management
// At most 1 JavaScript file containing all JavaScript code

// 1. Work with constants for reliability
const RELIABILITY_CONSTANT = "This is a constant for reliability";

// 2. Modify web pages for interaction
// Find and use at least 1 element by ID, at least 1 by class name,
// at least 1 by tag name, and add at least 1 new attribute to an element
// and change how at least 1 element looks with CSS
const myElement = document.getElementById("my-element");
const classElements = document.getElementsByClassName("my-class");
const tagElements = document.getElementsByTagName("p");

myElement.setAttribute("data-custom", "custom-value");
myElement.style.fontWeight = "bold";

// 3. Direct code flow for logic
// Use at least 1 `else if` statement to choose between options
const userInput = 5;
if (userInput > 10) {
  console.log("User input is greater than 10");
} else if (userInput > 5) {
  console.log("User input is greater than 5");
} else {
  console.log("User input is 5 or less");
}

// 4. React to user actions for engagement
// Create at least 1 reaction for at least 1 `onclick` event,
// at least 1 `onload` event, and at least 1 `onmouseover` event
myElement.addEventListener("click", function() {
  console.log("Button clicked!");
});

window.addEventListener("load", function() {
  console.log("Page loaded!");
});

myElement.addEventListener("mouseover", function() {
  console.log("Mouse over element!");
});

// 5. Modularize and organize your code with reusable functions
function customFunction(arg1, arg2) {
  return arg1 + arg2;
}

const result = customFunction(2, 3);
console.log("Result of custom function:", result);

// 6. Automate repetition for simplicity
// Integrate at least one looping structure into your project to handle repetitive tasks
for (let i = 0; i < 5; i++) {
  console.log("Repetitive task iteration:", i);
}

// 7. Organize data for efficiency
// At least 1 iterated array with accessed and used elements in it
const myArray = [1, 2, 3, 4, 5];
for (let i = 0; i < myArray.length; i++) {
  console.log("Array element:", myArray[i]);
}

// 8. Schedule tasks for interactive experiences
// Implement at least, either 1 'setTimeout' or 1 'setInterval' for an action in your project,
// and appropriately use 'clearTimeout' or 'clearInterval' to stop it after use
const timeoutId = setTimeout(function() {
  console.log("Timeout executed!");
}, 3000);

clearTimeout(timeoutId);