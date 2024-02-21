require("dotenv").config();
const express = require("express");
const UserRouter = require("./api/routes/user.route");
const ErrorHandler = require("./api/middlewares/ErrorHandler");

// #config
const app = express();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port: http://localhost:${port}`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// #routes
app.get("/", (req, res, next) => {
  console.log(`this is my error`, myError);
  res.send("Hello world!");
});
app.use("/users", UserRouter);

// #middlewares
app.use(ErrorHandler.handleError404);
app.use(ErrorHandler.handleErrors);
