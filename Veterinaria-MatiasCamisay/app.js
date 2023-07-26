const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

// ruta home
app.get("/", (req, res) => {
  res.send("Estoy en home");
});

// ruta detalle de producto
app.get("/detalle-producto", (req, res) => {
  res.send("Estoy en detalle de producto");
});

// ruta de registro de usuario
app.get("/registro", (req, res) => {
  res.send("Estoy en registro");
});

// ruta de inicio de sesión

// ruta de carrito de compras

app.listen(PORT, () => {
  console.log("Server ok");
});
