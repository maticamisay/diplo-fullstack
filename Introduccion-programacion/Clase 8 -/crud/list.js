const { read } = require("./read");

function list() {
  const data = read();
  return data.map((tarea) => tarea.titulo);
}

module.exports = { list };
