const { Router } = require("express");
const { Movie } = require("./sequelize-rest");
const bodyParser = require("body-parser");

const router = new Router();

// bodyparser middleware at router level
router.use(bodyParser.json());

// Testing whether server runs
router.get("/", (request, response, next) => {
  console.log("Message from .get at 3002");
  response.send('<h1>"Server active, homework third try"</h1>');
});

// Request: find all movies
// localhost:3003/movies
// note; no response when no data
router.get("/movies", (request, response, next) => {
  Movie.findAll()
    .then(movies => {
      response.json(movies);
    })
    .then(
      response.json({
        message: "all movies requested"
      })
    );
});

// Request: create new movie resource
// to test: http :3003/movie (input)
router.post("/movie", (request, response, next) => {
  console.log("testing log from POST at :3002/movie");
  console.log("currently in the parsed body:", request.body);
  Movie.create(request.body)
    .then(movie => {
      response.json(movie);
    })
    .then(
      response.json({
        message: "new movie added!"
      })
    );
});

module.exports = router;
