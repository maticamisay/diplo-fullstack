const express = require("express");
const {
  renderformulario,
  mostrarDatos,
} = require("../controllers/usuarioController");
const router = express.Router();

router.get("/formulario", renderformulario);
router.post("/mostrar", mostrarDatos);

module.exports = router;
