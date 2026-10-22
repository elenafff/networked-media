const express = require("express");
const nunjucks = require("nunjucks");

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

nunjucks.configure("views", {
  autoescape: true,
  express: app,
});
app.set("view engine", "njk");

app.get("/", (request, response) => {
  response.render("baseLayout.njk", {
    serverData: "this is text from my server!!!",
  });
});

app.listen(8080, () => {
  console.log("http://localhost:8080");
});
