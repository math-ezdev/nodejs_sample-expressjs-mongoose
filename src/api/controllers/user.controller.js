const UserModel = require("../models/user.model");

exports.getAll = async (req, res, next) => {
  try {
    // console.log(`this is my error`, myError);
    const users = await UserModel.find();

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.get = async (req, res, next) => {
  try {
    const { _id } = req.params;
    const user = await UserModel.findById(_id);

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.add = async (req, res, next) => {
  try {
    const { name } = req.body;
    const user = new UserModel({
      name,
    });
    await user.save();

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.remove = async (req, res, next) => {
  try {
    const { _id } = req.params;
    const user = await UserModel.findByIdAndDelete(_id);

    res.status(204).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.set = async (req, res, next) => {
  try {
    const { name } = req.body;
    const { _id } = req.params;
    const user = await UserModel.findByIdAndUpdate(_id, {
      name,
    });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
