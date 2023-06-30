const { body, validationResult } = require("express-validator");

const validateRegister = [
  body("email")
    .notEmpty()
    .withMessage("Debes completar el campo email")
    .isEmail()
    .withMessage("Debes ingresar un email válido"),
  // .isNumber()
  // .withMessage("Debes ingresar un numero válido"),
  // .isBoolean()
  // .withMessage("Debes ingresar un booleano válido"),
  // .isDate()
  // .withMessage("Debes ingresar una fecha válida"),
  // .isAlpha()
  // .withMessage("Debes ingresar solo letras"),
  // .isLength({ max: 100 })
  // .withMessage("El email debe tener menos de 100 caracteres"),

  (req, res, next) => {
    const errors = validationResult(req);
    // console.log(req.body);
    // console.log(errors);
    if (!errors.isEmpty()) {
      return res.render("register", {
        errors: errors.array(),
      });
    }
    next();
  },
];

module.exports = validateRegister;
