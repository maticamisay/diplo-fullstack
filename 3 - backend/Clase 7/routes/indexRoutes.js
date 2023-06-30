const express = require("express");
const {
  renderIndex,
  renderLogin,
  renderRegistro,
  registrarNuevo,
} = require("../controller/indexControllers");
const validateRegister = require("../middleware/validateRegister");
const router = express.Router();

router.get("/", renderIndex); //pagina de inicio
router.get("/login", renderLogin); //pagina de login
router.get("/registro", renderRegistro); //pagina de registro
router.post("/registro", validateRegister, registrarNuevo); //logica de registro

module.exports = router;
