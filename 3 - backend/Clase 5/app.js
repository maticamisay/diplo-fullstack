const express = require("express");
const app = express();
const PORT = 3000;
const morgan = require("morgan");
// Middleware for serving static files. Serve the files in the /public directory in the project root.
app.use(express.static("public"));
// Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Set the view engine to ejs
app.set("view engine", "ejs");
// Add morgan middleware for logging requests
app.use(morgan("dev"));

// Routes
app.use("/", require("./routes/indexRoutes")); //rutas principales
app.use("/admin", require("./routes/adminRoutes")); //rutas principales
app.use("/api/productos", require("./routes/productosRoutes")); //rutas productos

// middleware para manejo de errores
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send("Algo salió mal!");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
