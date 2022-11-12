const mongoose = require("mongoose");

class Database {
  //testing
  constructor() {
    this.connect();
  }

  connect() {
    mongoose
      .connect("mongodb://localhost:27017/KingGym")
      .then(() => console.log("DataBase connection successful"))
      .catch((err) =>
        console.log("Error connecting to database " + err.message)
      );
  }
}

module.exports = new Database();
