const express = require("express");
const {
  obtenerUsuarios,
  crearUsuario,
  obtenerUnUsuario,
  actualizarUsuario,
  eliminarUsuario,
} = require("../controller/usuariosController");
const routerUsuarios = express.Router();
const saludoMiddleware = require("../middleware/saludoMiddleware");
const validateUsuario = require("../middleware/validateUsuario");

// Uso del middleware
// routerUsuarios.use(saludoMiddleware);

// GET: Recupera datos de un recurso.
routerUsuarios.get("/", obtenerUsuarios);

// GET: Recupera datos de un recurso.
routerUsuarios.get("/:id", obtenerUnUsuario);

// POST: Envía datos para crear un recurso.
routerUsuarios.post("/", validateUsuario, crearUsuario);

// PUT: Actualiza un recurso existente con datos nuevos.
routerUsuarios.put("/:id", actualizarUsuario);

// DELETE: Elimina un recurso.
routerUsuarios.delete("/:id", eliminarUsuario);

module.exports = routerUsuarios;
