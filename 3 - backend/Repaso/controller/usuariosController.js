const { readUsuarios, writeUsuarios } = require("../utils/fsFunctions");

function obtenerUsuarios(req, res) {
  let usuariosDB = readUsuarios();
  res.json({ usuariosDB });
}

const obtenerUnUsuario = (req, res) => {
  res.send("usuario matias");
};

const crearUsuario = (req, res) => {
  const { nombre, apellido } = req.body;
  // creamos el usuario
  const newUsuario = { nombreUsuario: nombre, apellido };
  // logica de sesion
  const usuarios = req.session.usuarios || [];
  usuarios.push(newUsuario);
  req.session.usuarios = usuarios;

  // logica de base de datos
  let usuariosDB = readUsuarios();
  if (!Array.isArray(usuariosDB)) {
    console.log("no es un array");
    console.log(usuariosDB);
    usuariosDB = [];
  }
  usuariosDB.push(newUsuario);
  writeUsuarios(usuariosDB);
  res.json({ newUsuario });
};

const actualizarUsuario = (req, res) => {
  res.send("usuario actualizado");
};

const eliminarUsuario = (req, res) => {
  res.send("usuario eliminado");
};

module.exports = {
  obtenerUsuarios,
  crearUsuario,
  obtenerUnUsuario,
  actualizarUsuario,
  eliminarUsuario,
};
