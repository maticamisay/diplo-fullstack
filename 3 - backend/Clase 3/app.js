const express = require("express");
const app = express();
const PORT = 3000;
const { productos } = require("./db.js");
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
  const { id } = req.params;
  const productoFiltrado = productos.find((producto) => producto.id == id);
  // if(si no existe...){
  // return  res.render("no encontrado...")
  // }
  res.render("producto", { productoFiltrado });
});

app.listen(PORT, () => {
  console.log(`Server running on url http://localhost:${PORT}.`);
});
