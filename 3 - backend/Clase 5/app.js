const express = require("express");
const app = express();
const PORT = 3000;

// Middleware for serving static files. Serve the files in the /public directory in the project root.
app.use(express.static("public"));
// Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Set the view engine to ejs
app.set("view engine", "ejs");

// Routes
app.use("/", require("./routes/indexRoutes"));
app.use("/productos", require("./routes/productosRoutes"));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
