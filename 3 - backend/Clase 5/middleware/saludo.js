// middleware que dice "hola"
module.exports = function (req, res, next) {
  console.log("Hola");
  //   codigo de logica para el middleware
  //   ...
  next();
};
