// window.onload is shorthand for this (always first thing in Javascript)
window.addEventListener("load", () => {
  //document.body is the selector to retrieve the body html element

  // function mousePressed(){
  //  print(mouseX, mouseY);
  // } in p5 is equivalent to this:

  //   e is a parameter in the anonymous arrow function
  // it is automatically populated by js and contains all of the information about the event
  document.body.addEventListener("click", (e) => {
    console.log(e);
    console.log("document.body was clicked");
    // console.log(e.clientX +""+e.clientY);
    console.log(`${e.clientX},${e.clientY}`);
  });
  //   using ids are good for js!!!
  // anytime we have an interaction, using an id is best practice
  let textDiv = document.getElementById("text");
  //   keypresses need to be on the document itself!
  document.addEventListener("keydown", (e) => {
    console.log("key pressed!");
    console.log(e.key);

    // adding the key that was typed to the div on my page
    textDiv.textContent += e.key;
    if (e.key == " ") {
      textDiv.textContent += "!";
    }
  });
});
