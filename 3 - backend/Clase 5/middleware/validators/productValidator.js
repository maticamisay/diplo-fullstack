const { body, validationResult } = require("express-validator");

const validateProduct = [
  body("nombre")
    .notEmpty()
    .withMessage("El nombre del producto es obligatorio."),
  body("precio").notEmpty().withMessage("El precio debe ser obligatorio."),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // Si hay errores, devolver una respuesta de error con los mensajes
      return res.status(400).json({ errors: errors.array() });
    }
    // Si no hay errores, continuar con el siguiente middleware o controlador
    next();
  },
];

module.exports = validateProduct;
