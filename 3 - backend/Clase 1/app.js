const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hola Mundo!");
});

// ejercicio 1
app.get("/saludo", (req, res) => {
  res.send("Hola Mundo!, cómo estás?");
});

app.get("/articulo/:id", (req, res) => {
  console.log(req.params);
  res.send("Articulo id: " + req.params.id);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
