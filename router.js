const { Router } = require("express");
const { Movie } = require("./sequelize-rest");
const bodyParser = require("body-parser");

const router = new Router();

// to test: localhost:3002/movie
// router.get("/movie", (request, response, next) => {
//   movie.findAll().then(movies => response.json(movies));
// });

// bodyparser middleware at router level
router.use(bodyParser.json());

router.get("/", (request, response, next) => {
  console.log("Message from .get at 3002");
  response.send('<h1>"Server active, homework third try"</h1>');
});

//creating new
router.post("/movie", (request, response, next) => {
  console.log("testing log from POST at :3002/movie");
  console.log("currently in the body:", request.body);
  Movie.create(request.body);
});

module.exports = router;
