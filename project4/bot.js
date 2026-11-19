require("dotenv").config();

const m = require("masto");

const masto = m.createRestAPIClient({
  url: "https://networked-media.itp.io/",
  accessToken: process.env.TOKEN,
});

async function makeStatus(text) {
  const status = await masto.v1.statuses.create({
    status: text,
    visibility: "public",
  });
}

setInterval(async () => {
  let url = "http://146.190.218.125:6003/get-data";
  // classmate list
  let classmates = [
    "@Elena",
    "@Anita",
    "@Caitlyn",
    "@Anna",
    "@Sam",
    "@Tommy",
    "@Mike",
    "@Wing",
    "@Lam",
    "@Lisa",
    "@Yatong",
    "@Jennifer",
    "@Ali",
    "@May",
    "@Tess",
    "@Kiki",
  ];

  let hour = new Date().getHours();
  // bot sleeping 4 hours
  if (hour >= 5 && hour < 9) {
    console.log("bot is sleeping");
  } else {
    let response = await fetch(url);
    let json = await response.json();
    // randomly naming 2 classmates
    let namedClassmate1 = classmates[Math.floor(Math.random() * 16)];
    let namedClassmate2 = classmates[Math.floor(Math.random() * 16)];
    // while named the same classmate twice, name another classmate
    while (namedClassmate2 === namedClassmate1) {
      namedClassmate2 =
        classmates[Math.floor(Math.random() * classmates.length)];
    }
    // randomly picking an activiy from the database
    let randomActivity = json[Math.floor(Math.random() * json.length)];
    // post content
    let post =
      "BREAKING NEWS: " +
      namedClassmate1 +
      " is " +
      randomActivity.activity +
      " right now and " +
      namedClassmate2 +
      " wants to join.";

    // bot testing
    console.log(post);
    makeStatus(post);
  }
  // 4 posts in each hour
}, 900000);
