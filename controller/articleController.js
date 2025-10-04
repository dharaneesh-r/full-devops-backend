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
    const { title, description } = req.body;

    if (!title || !description) {
      return res.status(400).json({
        status: "fail",
        message: "title and description are required",
      });
    }

    const data = await Article.create({ title, description });

    res.status(201).json({
      status: "success",
      message: "Data created successfully",
      data,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
      err,
    });
  }
};

// FIND BY ID CONTROLLER

const findByIdController = async (req, res) => {
  try {
    const data = await Article.findById(req.params.id);
    res.status(200).json({
      status: "success",
      message: "Specific ID got Fetched Successfully!",
      data,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
      error: err,
    });
  }
};

// UPDATE BY ID CONTROLLER

const updateController = async (req, res) => {
  try {
    const data = await Article.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      new: true,
    });
    res.status(200).json({
      status: "true",
      message: "data updated successfully",
      data,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
      error: err,
    });
  }
};

// DELETE CONTROLLER

const deleteController = async (req, res) => {
  try {
    const data = await Article.findByIdAndDelete(req.params.id);

    if (!data) {
      return res.status(404).json({
        status: "fail",
        message: "No article found with this ID",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Data Deleted Successfully",
      data,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
      err,
    });
  }
};

module.exports = {
  getController,
  createController,
  deleteController,
  findByIdController,
  updateController,
};
