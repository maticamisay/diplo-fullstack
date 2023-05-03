const { clear } = require("console");
const { read } = require("./read");

function returnDescription(title) {
  const data = read();

  const description = data.filter((item) => item.titulo === title);

  return description[0]
    ? description[0].descripcion
    : "Ningun titulo coincide con el ingresado";
}

module.exports = { returnDescription };
