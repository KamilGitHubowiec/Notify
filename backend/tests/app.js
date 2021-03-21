const express = require("express");
const mongoose = require("mongoose");
const noteRoutes = require("./noteRoutesTest");
const app = express();
const data = require("./data");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.json());
app.get("/", (req, res) => res.json(data));
app.use("/notes", noteRoutes);

module.exports = app;