const express = require("express");
const app = express();

app.set("view engine", "ejs"); //motor de plantillas ejs
app.use(express.static("public")); //carpeta publica para archivos estaticos (css, js, img, etc)
app.use(express.urlencoded({ extended: true })); //para poder leer los datos de un formulario
app.use(express.json()); //para poder leer los datos de un formulario

// rutas principales, a las que se puede acceder sin estar logeado, ej pagina de inicio, pagina de registro, pagina de login
app.use("/", require("./routes/indexRoutes")); //contiene la vista index, login, registro
// rutas protegidas, solo pueden acceder los que inician sesion, ej pagina de perfil
app.use("/admin",require("./routes/adminRoutes")); //contiene la vista perfil
// // rutas de api para usuarios, para la lógica CRUD en usuarios. (GET, POST, PUT, DELETE)
// app.use("/api/usuarios");

app.listen(3000, () => {
  console.log("Servidor iniciado en el puerto 3000");
});
