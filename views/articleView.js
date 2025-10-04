const express = require("express");
const app = express();
const cors = require("cors");
const {
  getController,
  createController,
  deleteController,
  findByIdController,
  updateController,
} = require("../controller/articleController");

// MIDDLEWARES

app.use(express.json());
app.use(cors());

// EXPRESS ROUTER

const Article = express.Router();

Article.get("/article", getController);
Article.post("/article", createController);
Article.get("/article/:id", findByIdController);
Article.patch("/article/:id", updateController);
Article.delete("/article/:id", deleteController);

module.exports = Article;
