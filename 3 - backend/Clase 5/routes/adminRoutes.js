const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("admin");
});

router.get("/add", (req, res) => {
  res.render("form");
});

module.exports = router;
