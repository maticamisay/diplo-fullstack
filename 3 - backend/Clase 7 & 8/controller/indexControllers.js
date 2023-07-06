const fs = require("fs");
const bcrypt = require("bcrypt");
const { saveUsuarios, readUsuarios } = require("../services/usuariosServices");

const renderIndex = (req, res) => {
  res.render("index");
};
const renderLogin = (req, res) => {
  res.render("login");
};
const renderRegistro = (req, res) => {
  res.render("register", { errors: [] });
};

const registrarNuevo = (req, res) => {
  // Destructuring
  const { email, password } = req.body;

  // Generar un salt (valor aleatorio) para fortalecer el hashing
  const saltRounds = 10;
  // Aplicar el hashing de la contraseña utilizando bcrypt
  bcrypt.hash(password, saltRounds, (error, hashedPassword) => {
    if (error) {
      console.error(error);
      res.status(500).send("Error al hashear la contraseña");
      return;
    }
    // Crear un objeto con el email y la contraseña hasheada
    const nuevoUsuario = {
      email,
      password: hashedPassword, // Guardar la contraseña hasheada en lugar de la original
    };

    const usuarios = readUsuarios();
    usuarios.push(nuevoUsuario);
    saveUsuarios(usuarios);

    // Guardar el valor del usuario recién registrado en la sesión
    req.session.usuario = nuevoUsuario;

    // Redireccionar al endpoint /admin/perfil
    res.redirect('/admin/perfil');
  });
};


const login = (req, res) => {
  const { email, password } = req.body;
  const usuarios = fs.readFileSync("usuarios.json", "utf-8");
  const usuariosParsed = JSON.parse(usuarios);

  let usuarioFinded; // buscar en el array de usuarios el que coincida con el email, si ninguno coincide, enviar un error
  if (usuarioFinded) {
    bcrypt.compare(password, usuariosParsed.password, (error, result) => {
      if (error) {
        console.log(error);
        res.status(400).send("Error al comparar la contraseña");
      }
      // result solo va a ser TRUE o FALSE
      if (result) {
        // redireccionar al perfil
        // res.redirect
      } else {
        //  renderizar una vista con el error
        res.status(500).send("Contraseña incorrecta");
      }
    });
  } else {
    // return error...
  }
};

module.exports = {
  renderIndex,
  renderLogin,
  renderRegistro,
  registrarNuevo,
  login,
};
