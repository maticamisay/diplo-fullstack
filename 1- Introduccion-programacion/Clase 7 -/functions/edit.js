const fs = require("fs");
const data = fs.readFileSync("./data.json", "utf-8");
const dataParseada = JSON.parse(data);

function edit(tituloEditar, nuevaDescripcion) {
  const nuevoArray = dataParseada.map((item) => {
    if (item.titulo === tituloEditar) {
      return {
        titulo: tituloEditar,
        descripcion: nuevaDescripcion,
      };
    }
    return item;
  });

  fs.writeFileSync("./data.json", JSON.stringify(nuevoArray));
}

module.exports = { edit };
