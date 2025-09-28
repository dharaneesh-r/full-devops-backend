const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Article = require("./views/articleView");
dotenv.config();

// MIDDLEWARES

app.use(express.json());
app.use(cors());

// MONGOOSE CONNECTION

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });

// APP ROUTES
app.use("/home", (req, res) => {
  res.status(200).json({
    message: "DEVOPS BACKEND DEVELOPMENT",
  });
});
app.use("/", Article);

// PORT DETAILS

app.listen(process.env.PORT, () => {
  console.log(`App is running on PORT ${process.env.PORT}`);
});
