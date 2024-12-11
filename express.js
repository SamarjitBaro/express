const express = require("express");
const app = express();
const expressSession = require("express-session");
const flash = require("connect-flash");

app.use(function (req, res, next) {
  console.log("middleware");
  next();
});
app.use(
  expressSession({
    secret: "kuch bhi",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(flash());

app.get("/login", function (req, res, next) {
  req.flash("errors", "invalid");
  res.redirect("/error");
});
app.get("/error", function (req, res, next) {
  let message = req.flash("errors");
  res.send(message);
});


app.get("/create", function (req, res, next) {
  req.session.polo = true;
  res.send("done");
  // next();
});
app.get("/check", function (req, res, next) {
  console.log(req.session.polo);
  // next();
});

app.get("/about", function (req, res, next) {
  res.send("about Page");
  // next();
});
app.get("/profile/:username/:age", function (req, res, next) {
  res.send(req.params.username + " Age is " + req.params.age);
  // next();
});
app.get("*", function (req, res, next) {
  res.send("Error, Site doesnt exist");
  // next();
});

app.listen(3000);
