const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
// Creo mi instancia de express
const app = express();

// Configuracion para recibir parametros en las peticiones
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Configuración de las sesiones y cookies
app.use(cookieParser());
app.use(
  session({
    secret: "mi-secreto", // Clave secreta para las sesiones (se recomienda almacenarla de forma segura)
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }, // Duración de la cookie (en milisegundos)
  })
);
// Configuro los templates de ejs
app.set("view engine", "ejs");

app.use("/", require("./routes/indexRoutes"));
app.use("/admin", require("./routes/adminRoutes"));

// Iniciar el servidor
app.listen(3000, () => {
  console.log("Servidor en ejecución en el puerto 3000");
});
