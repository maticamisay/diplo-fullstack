const fs = require("fs");

function saveUsuarios(usuarios) {
  const result = fs.writeFileSync(
    "usuarios.json",
    JSON.stringify(usuarios, null, 2),
    "utf-8"
  );
  return result;
}

function readUsuarios() {
  const usuarios = fs.readFileSync("usuarios.json", "utf-8");
  const usuariosParsed = JSON.parse(usuarios);
  return usuariosParsed;
}

module.exports = {
  saveUsuarios,
  readUsuarios,
};
