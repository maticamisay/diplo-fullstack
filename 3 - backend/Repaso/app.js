const express = require("express");
const routerUsuarios = require("./routes/usuariosRoutes");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const app = express(); // creo una instancia de express
const PORT = 3000;

// Definir el motor de plantillas
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); //para poder leer los datos de un formulario
app.use(express.json()); //para poder leer los datos de un formulario
app.use(cookieParser());
app.use(
  session({
    secret: "mysecret",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
  })
);

// app.get("/usuario/matias", (req, res) => {
//   res.render("usuario", { usuario: "Matiaaaaas" });
// });

// // /usuario/matias13413?id=5&apellido=camisay
// app.get("/usuario/:nombreusuario", (req, res) => {
//   console.log(req.params); // { nombreusuario: 'mati' }
//   console.log(req.query); // { id: '5', apellido: 'camisay' }
//   const nombre = req.params.nombreusuario;
//   res.send(`Hola usuario: ${nombre}`);
// });

app.use("/usuarios", routerUsuarios);

app.listen(PORT, () => {
  console.log("servidor levantado");
});
