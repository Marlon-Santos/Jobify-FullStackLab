const express = require("express");
const App = express();

App.set("view engine", "ejs");
App.use(express.static("public"));

App.get("/", (req, resp) => {
  resp.render("home");
}).listen(3000);
