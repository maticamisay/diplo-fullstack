const { list } = require("./list");

function find(param) {
  const titulos = list();
  return titulos.includes(param);
}

module.exports = { find };