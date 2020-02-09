const express = require("express");
const app = express();
const port = 3003;
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

// Important:
// Posgres server port: 5432 (inside docker container, listening for host requests)
// Host port: 3000
// Express server port: 3003
