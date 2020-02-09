const Sequelize = require("sequelize");
const db = require("./db");

const Movie = db.define(
  "movie",
  {
    title: {
      type: Sequelize.STRING,
      field: "movie_name"
    },
    yearOfRelease: {
      type: Sequelize.STRING,
      field: "movie_released"
    },
    synopsis: {
      type: Sequelize.STRING,
      field: "movie_synopsis"
    }
  },
  { tableName: "movies" }
);

const Team = db.define("team", {
  name: Sequelize.STRING
});

module.exports = Movie;
