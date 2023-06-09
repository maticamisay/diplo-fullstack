const express = require("express");
const app = express();
const PORT = 4000;

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("pages/home");
});

app.get("/saludo", (req, res) => {
  const data = { name: "Matias", age: 24 };
  res.render("pages/saludo", { data });
});

// Ejercicio 1
app.get("/nombre/:nombre", (req, res) => {
  const { nombre } = req.params;
  res.render("pages/saludo_nombre", { nombre });
});

// Ejercicio 2
app.get("/lista", (req, res) => {
  const elementos = ["Elemento 1", "Elemento 2", "Elemento 3"];
  res.render("pages/lista", { elementos });
});

app.listen(PORT, () => {
  console.log(`Server on url: http://localhost:${PORT}`);
});
