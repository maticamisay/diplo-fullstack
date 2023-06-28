const express = require("express");
const router = express.Router();

router.use(function (req, res, next) {
  console.log("Time:", Date.now());
  next();
});

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/contact", (req, res) => {
  res.render("contact");
});

module.exports = router;
