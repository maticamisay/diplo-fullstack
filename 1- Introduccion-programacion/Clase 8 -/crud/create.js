const { read } = require("./read");
const { write } = require("./writeJSON");

function create(titulo, descripcion) {
  const data = read();
  const nuevaTarea = { titulo, descripcion };
  data.push(nuevaTarea);
  write(data);
  return console.log("Creado con exito");
}

module.exports = { create };