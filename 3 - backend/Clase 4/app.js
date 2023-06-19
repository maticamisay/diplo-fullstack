const express = require("express");
const app = express();
const port = 3000;
const usuarioRoutes = require("./routes/usuarioRoutes");

app.set("view engine", "ejs");
// middleware
// este middleware es para que express pueda leer los datos que vienen del formulario
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("public", express.static("public"));

app.use("/usuario", usuarioRoutes);
// app.use("/usuario", require("./routes/usuarioRoutes"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
