const express = require("express");
const app = express();
const port = 3005;
const movieRouter = require("./router");

app.use(movieRouter);

app.listen(port, () => {
  console.log(`Server has started, listening on: ${port}`);
});

// Important:
// Posgres server port: 5432 (inside docker container, listening for host requests)
// Host port: 3000
// Express server port: 3005
