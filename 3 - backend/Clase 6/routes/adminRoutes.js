const express = require("express");
const { renderAdmin, renderLogout } = require("../controller/adminController");
const verificarSesion = require("../middleware/verificarSesion");
const router = express.Router();

router.get("/", verificarSesion, renderAdmin);
router.get("/logout", renderLogout);

module.exports = router;
