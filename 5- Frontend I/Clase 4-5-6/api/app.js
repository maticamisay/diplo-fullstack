const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({
    productos: [
      {
        id: 1,
        nombre: "Escuadra",
      },
      {
        id: 2,
        nombre: "Calculadora",
      },
    ],
  });
  //   throw new Error("Error al obtener los productos");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
