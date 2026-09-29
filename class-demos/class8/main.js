// this is a comment
// syntax is //
// document (an object) to reference html
// Objects uses curly braces {}
// When accessing things in objects, use periods e.g. pet.name
alert("Javascript!");
console.log("log this information to the console");

// global variables
let colors = ["#D741A7", "#3A1772", "#5398BE", "#F2CD5D", "#DEA54B"];
// shorthand for waiting for the whole webpage to load
// could be useful when multiple images/large files embeded
// window.onload is similar to setup/draw in p5.js
// all of our code SHOULD go inside of the window.onload
window.onload = () => {
  console.log("page has loaded");

  // get element by id
  // retrieves a SINGLE js element using an id
  // an id should be grabbing only 1 element
  let mainElement = document.getElementById("main");
  mainElement.style.color = "white";
  console.log(mainElement);

  // query selector
  // retrieves a SINGLE element using the CSS selector
  let firstParagraph = document.querySelector("p");
  let blueParagraph = document.querySelector(".blue");
  document.querySelector("#main");

  firstParagraph.textContent = "I have updated the text with js.";
  blueParagraph.style.backgroundColor = "navy";

  // query sleector for ID works the same as getElementById
  let containerDiv = document.querySelector("#blue-div");
  for (let i = 0; i < 60; i++) {
    // 1. declare what type of element we are creating
    // createElement: function tpo create an element "span"
    let newSpan = document.createElement("span");
    // 2. modify that element / content
    newSpan.textContent = "new span";
    newSpan.classList.add("all-spans");
    // generate a random color
    let c = Math.floor(Math.random() * colors.length);
    newSpan.style.backgroundColor = colors[c];
    // 3. add the created element to the page
    // anywhere on the bottom of the html: document.body
    // in a specific container: select that element
    containerDiv.appendChild(newSpan);
  }
  // set interval is built-in to js
  // 2 parameters:
  // 1. callback
  // 2. amount of time in ms
  let rotation = 0;
  setInterval(() => {
    console.log("two seconds have passed");
    // two ways to retrieve all the elements of a class
    // document.getElementsByClassName("all-spans")
    let allSpans = document.querySelectorAll(".all-spans");
    console.log(allSpans);
    // shorthand for(let s = 0; s < allSpans.length; s++)
    for (let s of allSpans) {
      // $: string literal for concentation
      s.style.transform = `rotate(${rotation}deg)`;

      // `backtick is the above tab next to 1
      rotation++;
      console.log(s.style.transform);
    }
  }, 2000);

  // setInterval(function() {}, 2000);
  // setInterval(intervalFunction, 2000);
};
// helper functions go after window.onload {}
function intervalFunction() {}
