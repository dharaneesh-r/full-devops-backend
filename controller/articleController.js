const Article = require("../models/articleSchema");

// GET CONTROLLER

const getController = async (req, res) => {
  try {
    const data = await Article.find();
    res.status(200).json({
      status: "success",
      message: "Data rendered successfully",
      data,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
      err,
    });
  }
};

// CREATE CONTROLLER

const createController = async (req, res) => {
  try {
    const data = await Article.create({});
    res.status(201).json({
      status: "success",
      message: "data created successfully",
      data,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
      err,
    });
  }
};

module.exports = { getController, createController };
