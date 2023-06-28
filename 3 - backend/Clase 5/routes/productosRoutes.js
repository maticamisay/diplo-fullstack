const express = require("express");
const {
  renderProductos,
  agregarProducto,
} = require("../controllers/productsControllers");
const validateProduct = require("../middleware/validators/productValidator");
const router = express.Router();

router.get("/", renderProductos); //obtener todos los productos
// router.get("/:id",renderUnProducto) //obtener un producto
router.post("/", validateProduct, agregarProducto); //crear un producto
// router.put("/:id",modificarProducto) //modificar un producto

module.exports = router;

// "https://listado.mercadolibre.com.ar/disco#D[A:disco]?searchVariation=disco&sort=price_asc"