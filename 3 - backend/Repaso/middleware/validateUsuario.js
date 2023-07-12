const { body, validationResult, query, param } = require("express-validator");

const validateUsuario = [
  body("nombre")
    .notEmpty()
    .withMessage("debe tener un nombre")
    .bail()
    .isLength({ min: 6 })
    .withMessage("largo minimo 6"),
  body("apellido").notEmpty().withMessage("debe tener un apellido"),
  //   param("idusuario").notEmpty().withMessage("debe tener un id"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors);
    }
    next();
  },
];

module.exports = validateUsuario;
