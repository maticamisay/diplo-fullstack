const fs = require("fs");

const readUsuarios = () => {
  try {
    const usuarios = fs.readFileSync("usuarios.json", "utf8");
    return JSON.parse(usuarios);
  } catch (error) {
    if (error.code === "ENOENT") {
      // El archivo no existe
      console.error(
        "El archivo usuarios.json no se encontró en la ubicación especificada."
      );
    } else {
      // Otro error de lectura
      console.error("Error al leer el archivo usuarios.json:", error.message);
    }
    return null;
  }
};

// escribir archivo usuarios
const writeUsuarios = (usuarios) => {
  fs.writeFileSync("usuarios.json", JSON.stringify(usuarios, null, 2));
};

module.exports = {
  readUsuarios,
  writeUsuarios,
};
