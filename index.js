const express = require("express");

const es6Renderer = require("express-es6-template-engine");

const app = express();

app.engine("html", es6Renderer);
app.set("view engine", "html");

app.get("/rpg", (req, res) => {
  res.render("main", {
    locals: { header1: "RPG's", title: "RPG's vs FPS" },
    partials: {
      main: "rpg",
    },
  });
});

app.get("/fps", (req, res) => {
  res.render("main", {
    locals: { header2: "FPS", title: "RPG's vs FPS" },
    partials: { main: "fps" },
  });
});

app.get("*", (req, res) => {
  res.redirect("/rpg");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
