const express = require("express");
const App = express();
App.get("/", (req, resp) => {
  resp.send("<h1>testando servidor</h1>");
}).listen(3000);
