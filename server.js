const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = 8080

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://jocelync1094:The0115!@ds045627.mlab.com:45627/heroku_4qqdw078", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api-routes.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});