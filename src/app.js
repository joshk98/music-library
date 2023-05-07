const express = require("express");
const artistRouter = require("./routes/artist");

const app = express();

app.use("/", artistRouter);

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

module.exports = app;
