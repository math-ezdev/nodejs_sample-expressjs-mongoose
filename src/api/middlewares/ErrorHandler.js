// exports.handleError404 = (req, res, next) => {
//   res.status(404);
//   res.json({
//     status: 404,
//     message: "Not found.",
//   });
// };

// exports.handleErrors = (error, req, res, next) => {
//   res.status(error.status || 500);
//   res.json({
//     status: error.status || 500,
//     message: error.message,
//   });
// };
const createErrors = require("http-errors");

exports.handleError404 = (req, res, next) => {
  next(createErrors(404, "Not found."));
};

exports.handleErrors = (error, req, res, next) => {
  next(createErrors.InternalServerError("Server Error."));
};
