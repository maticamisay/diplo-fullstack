const express = require("express");
const {
  renderProductos,
  agregarProducto,
} = require("../controllers/productsControllers");
const validateProduct = require("../validators/productValidator");
const router = express.Router();

router.get("/", renderProductos);
// router.get("/:id",renderUnProducto)
router.post("/", validateProduct, agregarProducto);
// router.put("/:id",modificarProducto)

module.exports = router;
