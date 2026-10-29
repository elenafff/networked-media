// setting varaible express/nunjucks for the packages
const express = require("express");
const nunjucks = require("nunjucks");

// app is express server that uses express library variable
const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

nunjucks.configure("views", {
  autoescape: true,
  express: app,
});
app.set("view engine", "njk");

let residents = [];

// render home page
app.get("/", (request, response) => {
  // regular homepage rendering
  response.render("home.njk");
});
// render quiz page
app.get("/quiz", (request, response) => {
  response.render("quiz.njk");
});
// render characters page
app.get("/characters", (request, response) => {
  response.render("characters.njk");
});
// render town map page
app.get("/townmap", (request, response) => {
  // setting counter variables to count number of emotions added
  let anxietyCount = 0;
  let calmCount = 0;
  let joyCount = 0;
  let angerCount = 0;

  for (let resident of residents) {
    if (resident.emotion === "anxiety") anxietyCount++;
    if (resident.emotion === "calm") calmCount++;
    if (resident.emotion === "joy") joyCount++;
    if (resident.emotion === "anger") angerCount++;
  }

  response.render("townmap.njk", {
    allResidents: residents,
    anxietyCount: anxietyCount,
    calmCount: calmCount,
    joyCount: joyCount,
    angerCount: angerCount,
  });
});
// render town rules page
app.get("/townrules", (request, response) => {
  response.render("townrules.njk");
});
// sending result of submit quiz
app.post("/submit-quiz", (request, response) => {
  let answers = [
    request.body.q1,
    request.body.q2,
    request.body.q3,
    request.body.q4,
    request.body.q5,
  ];
  // counting number of times each choices selected
  let countA = 0;
  let countB = 0;
  let countC = 0;
  let countD = 0;

  for (let singleAnswer of answers) {
    if (singleAnswer === "A") countA++;
    if (singleAnswer === "B") countB++;
    if (singleAnswer === "C") countC++;
    if (singleAnswer === "D") countD++;
  }
  // setting current emotion as anxiety, and comparing the countB, C, D with countA to change currentEmotion
  let currentEmotion = "anxiety";
  let highestCount = countA;

  if (countB > highestCount) {
    highestCount = countB;
    currentEmotion = "calm";
  }
  if (countC > highestCount) {
    highestCount = countC;
    currentEmotion = "joy";
  }
  if (countD > highestCount) {
    highestCount = countD;
    currentEmotion = "anger";
  }

  request.body.emotion = currentEmotion;
  residents.push(request.body);
  response.render("result.njk", { newResident: request.body });
});
// render location pages
app.get("/townmap/convenience-store", (request, response) => {
  // setting counter variable for header that includes the number of residents living in the place
  let count = 0;
  for (let resident of residents) {
    if (resident.emotion == "anxiety") count++;
  }
  response.render("convenience-store.njk", {
    allResidents: residents,
    count: count,
  });
});
// same as convenience store
app.get("/townmap/river", (request, response) => {
  let count = 0;
  for (let resident of residents) {
    if (resident.emotion == "calm") count++;
  }
  response.render("river.njk", { allResidents: residents, count: count });
});

app.get("/townmap/theme-park", (request, response) => {
  let count = 0;
  for (let resident of residents) {
    if (resident.emotion == "joy") count++;
  }
  response.render("theme-park.njk", { allResidents: residents, count: count });
});

app.get("/townmap/tower", (request, response) => {
  let count = 0;
  for (let resident of residents) {
    if (resident.emotion == "anger") count++;
  }
  response.render("tower.njk", { allResidents: residents, count: count });
});

app.listen(8080, () => {
  console.log("http://localhost:8080");
});
