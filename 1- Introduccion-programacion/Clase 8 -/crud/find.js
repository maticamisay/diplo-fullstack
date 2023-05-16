const { read } = require("./read");

// function find(tituloBuscar) {
//   const data = read();
//   return data.some((tarea) => tarea.titulo === tituloBuscar);
// }

const find = (tituloBuscar) => {
  const data = read();
  const resultado = data.some((tarea) => tarea.titulo === tituloBuscar);
  return resultado
};

//4- exportar la funcion
module.exports = { find };
