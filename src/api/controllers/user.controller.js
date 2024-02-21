const UserModel = require("../models/user.model");
const { respondError, respondSuccess } = require("../helpers/ResponseHandler");

exports.getAll = async (req, res, next) => {
  try {
    // console.log(`this is my error`, myError);
    const users = await UserModel.find();

    respondSuccess(res, 200, users);
  } catch (error) {
    respondError(res, error);
  }
};

exports.add = async (req, res, next) => {
  try {
    console.log(req.body);
    const user = new UserModel(req.body);
    await user.save();

    respondSuccess(res, 201, user);
  } catch (error) {
    respondError(res, error);
  }
};

exports.get = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await UserModel.findById(id);

    respondSuccess(res, 200, user);
  } catch (error) {
    respondError(res, error);
  }
};

exports.remove = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await UserModel.findByIdAndDelete(id);

    respondSuccess(res, 200, user);
  } catch (error) {
    respondError(res, error);
  }
};

exports.set = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await UserModel.findByIdAndUpdate(id, req.body);

    respondSuccess(res, 200, user);
  } catch (error) {
    respondError(res, error);
  }
};
