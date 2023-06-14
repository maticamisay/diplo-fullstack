const express = require("express");
const app = express();
const PORT = 3000;

const productos = [
  {
    id: 1,
    nombre: "Disco Duro",
    precio: 1000,
    descripcion: "Disco duro de 1TB",
  },
  {
    id: 2,
    nombre: "Memoria RAM",
    precio: 500,
    descripcion: "Memoria RAM de 16GB",
  },
  {
    id: 3,
    nombre: "Monitor",
    precio: 3000,
    descripcion: "Monitor de 24 pulgadas",
  },
  {
    id: 4,
    nombre: "Teclado",
    precio: 500,
    descripcion: "Teclado Gamer",
  },
];

app.set("view engine", "ejs");
app.use(express.static("public"));

// ejercicio de la clase
app.get("/usuario/:id", (req, res) => {
  const { id } = req.params;
  res.render("usuario", { id });
});

// ejercicio 2 clase pasada
app.get("/lista", (req, res) => {
  const elementos = ["Elemento 1", "Elemento 2", "Elemento 3"];
  res.render("lista", { elementos });
});

// ejercicio 3
app.get("/productos", (req, res) => {
  res.render("productos", { productos });
});

// ejercicio 4 - tarea para la casa :D
app.get("/productos/:id", (req, res) => {
  // logica para filtrar por id
  // ...
  res.render("producto", { productoFiltrado });
});

app.listen(PORT, () => {
  console.log(`Server running on url http://localhost:${PORT}.`);
});
