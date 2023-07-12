// Middleware personalizado
const saludo = (req, res, next) => {
  // Realizar tareas antes de pasar al siguiente middleware o controlador
  console.log("Middleware ejecutado");
  next(); // Llamar a next() para pasar al siguiente middleware o controlador
};

module.exports = saludo;
