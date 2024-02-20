const mongoose = require("mongoose");

const connect = (uri) => {
  const connection = mongoose.createConnection(uri);

  // listener
  connection.on("connected", function () {
    console.log(`MongoDB ${this.name} connected.`);
  });

  connection.on("disconnected", function () {
    console.log(`MongoDB ${this.name} disconnected.`);
  });

  connection.on("error", function (error) {
    console.log(`MongoDB error: ${JSON.stringify(error)}.`);
  });

  process.on("SIGINT", async function (error) {
    await conn.close();
    process.exit(0);
  });

  return connection;
};

const MongoDbConnection = connect(process.env.MONGODB_URL);

module.exports = MongoDbConnection;
