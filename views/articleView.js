const express = require("express");
const app = express();
const cors = require("cors");
const {
  getController,
  createController,
} = require("../controller/articleController");

// MIDDLEWARES

app.use(express.json());
app.use(cors());

// EXPRESS ROUTER

const Article = express.Router();

Article.get("/article", getController);
Article.post("/article", createController);

module.exports = Article;
