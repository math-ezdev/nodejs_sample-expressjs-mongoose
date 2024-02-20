const mongoose = require("mongoose");
const MongoDbConnection = require("../helpers/MongoDbConnection");

const UserScheme = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
  },
  {
    collection: "user",
    versionKey: false,
  }
);

const UserModel = MongoDbConnection.model("user", UserScheme);

module.exports = UserModel;
