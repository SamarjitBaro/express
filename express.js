const express = require("express");
const app = express();

app.get("/about", function (req, res) {
  res.send("about Page");
});
app.get("/profile", function (req, res) {
  res.send("Profile Page");
});
app.get("*", function (req, res) {
  res.send("Error, Site doesnt exist");
});

app.listen(3000);
