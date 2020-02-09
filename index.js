const express = require("express");
const app = express();
const port = 3002;
// const db = require("./db");
const movieRouter = require("./router");

app.use(movieRouter);

app.get("/", (request, response) => {
  console.log("Message from .get at 3002");
  response.send('<h1>"Server active, homework third try"</h1>');
});

app.listen(port, () => {
  console.log(`Server has started, listening on: ${port}`);
});
