const Sequelize = require("sequelize");
const db = new Sequelize("postgres://postgres:secret@localhost:3000/postgres");
const { Movie } = require("./sequelize-rest");

db.sync().then(() => console.log("Tables created!"));
// Model.create to insert 3 rows of sample data
// .then(() =>
//   Promise.all([
//     Movie.create({
//       title: "The Godfather",
//       yearOfRelease: "1972",
//       synopsis:
//         "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
//     }),
//     Movie.create({
//       title: "The Birds",
//       yearOfRelease: "1963",
//       synopsis:
//         "A wealthy San Francisco socialite pursues a potential boyfriend to a small Northern California town that slowly takes a turn for the bizarre when birds of all kinds suddenly begin to attack people."
//     }),
//     Movie.create({
//       title: "Mars Attacks!",
//       yearOfRelease: "1996",
//       synopsis:
//         "Earth is invaded by Martians with unbeatable weapons and a cruel sense of humor."
//     })
//   ])
// );
//   .catch(err => {
//   console.error("Unable to create tables, shutting down...", err);
//   process.exit(1);
// }

module.exports = db;

// TODO; hardcoded movie resources don't work. Map them over the table?
