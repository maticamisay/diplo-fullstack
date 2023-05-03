const { tasks } = require("../tasksData.js");

const edit = (titulo, nuevaDescripcion) => {
  const nuevoArray = tasks;
  console.log(nuevoArray);

  const resultado = nuevoArray.map((task) =>
    task.titulo === titulo ? { titulo, descripcion: nuevaDescripcion } : task
  );

  return resultado;
};

module.exports = { edit };
