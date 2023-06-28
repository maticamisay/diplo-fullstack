const fs = require("fs");

const renderProductos = (req, res) => {
  try {
    const productos = JSON.parse(fs.readFileSync("./productos.json", "utf-8"));
    res.render("productos", { productos });
  } catch (error) {
    next(error)
  }
};

// const renderUnProducto = ...

const agregarProducto = (req, res) => {
  console.log(req.body);
  // logica para agregar el producto con fs
  res.send("producto agregado");
};

// const modificarProducto = ...

module.exports = {
  renderProductos,
  agregarProducto,
};
