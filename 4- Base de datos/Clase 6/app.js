/**
 * This file contains the implementation of a RESTful API using Express.js to manage a database of products.
 * It defines routes for getting all products, getting a single product by ID, creating a new product, updating an existing product, and deleting a product.
 * It uses the Product model defined in the ./models/productos.js file to interact with the database.
 * The API accepts and returns JSON data, and uses middleware to process incoming JSON data.
 * The server listens on port 3000.
 */
const express = require("express");
const app = express();
const Product = require("./models/productos");

// MIDDLEWARE PARA PROCESAR JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// obtenemos todos los productos de la tabla Product
app.get("/", async (req, res) => {
  // la primera vez que se ejecuta, se crea la tabla
  //   await Product.sync({ force: true });
  const productos = await Product.findAll();
  res.json({ data: productos });
});

// obtenemos un producto de la tabla Product
app.get("/:id", async (req, res) => {
  const producto = await Product.findByPk(req.params.id);
  res.json({ data: producto });
});

// crear un producto
app.post("/", async (req, res) => {
  //METODO 1: Desestructurar req.body y crear el producto
  //   const { ...newProduct } = req.body;
  //   OR
  //   const newProduct = req.body;
  //   const producto = await Product.create(newProduct);
  try {
    const { nombre, precio } = req.body;
    if (!nombre || !precio) {
      return res.status(400).json({ error: "Faltan datos" });
    }

    const producto = await Product.create({ nombre, precio });
    res.status(201).json({ message: "Producto creado", data: producto });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error en el servidor" });
  }
});

// actualizar un producto
app.put("/:id", async (req, res) => {
  try {
    const producto = await Product.findByPk(req.params.id);
    if (!producto) {
      return res.status(404).json({ error: "No existe el producto" });
    }
    const { nombre, precio } = req.body;
    await producto.update({ nombre, precio });
    res.json({ message: "Producto actualizado", data: producto });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error en el servidor" });
  }
});

// eliminar un producto
app.delete("/:id", async (req, res) => {
  try {
    const producto = await Product.findByPk(req.params.id);
    if (!producto) {
      return res.status(404).json({ error: "No existe el producto" });
    }
    await producto.destroy();
    res.json({ message: "Producto eliminado" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error en el servidor" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
