const { read } = require("./read");
const { write } = require("./writeJSON");

const update = (tituloBuscar, nuevaDescripcion) => {
  const data = read();
  const arrayEditado = data.map((tarea) => {
    if (tarea.titulo === tituloBuscar) {
      return { titulo: tituloBuscar, descripcion: nuevaDescripcion };
    }
    return tarea;
  });
  write(arrayEditado);
  return console.log("Actualizado con exito");
};

const update2 = (tituloBuscar, nuevaDescripcion) => {
  const data = read();
  const arrayEditado = data.filter((tarea) => tarea.titulo != tituloBuscar);
  arrayEditado.push({ titulo: tituloBuscar, descripcion: nuevaDescripcion });
  write(arrayEditado);
  return console.log("Actualizado con exito");
};

module.exports = { update, update2 };
