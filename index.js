const express = require("express");
const app = express();
const port = 3001;
// const db = require("./db");
const movieRouter = require("./router");

app.get("/", (request, response) => {
  console.log("Message from .get at 3001");
  response.send('<h1>"Server active, homework third try"</h1>');
});

app.listen(port, () => {
  console.log(`Server has started, listening on: ${port}`);
});
