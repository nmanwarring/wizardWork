const express = require("express");

es6Renderer = require("express-es6-template-engine");

app = express();

app.engine("html", es6Renderer);
app.set("view engine", "html");
app.get("/", (req, res) => {
  res.render("home", {
    locals: { header1: "RPG's" },
    partials: { title: "RPG's vs FPS" },
  });
});
// app.get("/", (req, res) => {
//   res.render("linkedPage", {
//     locals: { header2: "FPS" },
//     partials: { title: "RPG's VS FPS" },
//   });
// });
app.listen(3000);
console.log();
