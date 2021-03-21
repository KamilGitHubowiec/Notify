const express = require("express");
const mongoose = require("mongoose");
const noteRoutes = require("./noteRoutesTest");

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/testDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.json());
app.get("/", (req, res) => res.send("API is running"));
app.use("/notes", noteRoutes);

module.exports = app;