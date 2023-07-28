const express = require("express");
const app = express();
const productos = require("./models").productos;

// getProd = async (req, res) => {
//   const data = await productos.findByPk(req.params.id);
//   res.json(data);
// };

app.use("/api/productos", async function getProductos(req, res) {
  const data = await productos.findAll();
  res.json(data);
});

// Ejemplo de función asincrónica con async/await
function delay(ms) {
  // Simula una operación asincrónica, muestra un mensaje por consola
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      console.log("Operación asincrónica completada.");
      resolve();
    }, [ms])
  );
}

app.use("/test", async (req, res) => {
  try {
    const result = await delay(5000);
    res.send({ msg: "Mensaje post promise", result });
  } catch (error) {
    console.log(error);
    res.send("Ocurrio un error");
  }
});

app.listen(3000, () => {
  console.log("Servidor escuchando en http://localhost:3000");
});
