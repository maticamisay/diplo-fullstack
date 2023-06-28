const express = require("express");
const {
  renderIndex,
  renderLogin,
  handleLogin,
  renderNoLogueado,
} = require("../controller/indexController");
const router = express.Router();

router.get("/", renderIndex);
router.get("/login", renderLogin);
router.post("/login", handleLogin);
router.get("/no-logueado", renderNoLogueado);

module.exports = router;
