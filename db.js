const Sequelize = require("sequelize");
const db = new Sequelize("postgres://postgres:secret@localhost:3000/postgres");

//for testing purposes:
// .sync({ force: true })
db.sync()
  .then(() => console.log("Tables created!"))
  .catch(err => {
    console.error("Unable to create tables, shutting down...", err);
    process.exit(1);
  });

module.exports = db;
