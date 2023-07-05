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
  const { email, password } = req.body;

  // Generar un salt (valor aleatorio) para fortalecer el hashing
  // const saltRounds = 1; // $2b$04$qXQ9W1gqwBTXfvGuZsxG9edctiC1i17pp/U49BgF69jyyyEqvociS
  const saltRounds = 10; // $2b$10$UEhs00CicTlcIc3K3Zjf4uKqyvw4F/iSrbzfFntfIk/W5qDGPu.2O
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

    res.send("Nuevo usuario registrado");
  });
};

const login = (req, res) => {
  const { email, password } = req.body;
  const usuarios = fs.readFileSync("usuarios.json", "utf-8");
  const usuariosParsed = JSON.parse(usuarios);
  // console.log({ email, password });
  // console.log(usuariosParsed);
  bcrypt.compare(password, usuariosParsed.password, (error, result) => {
    if (error) {
      console.log(error);
      res.status(400).send("Error al comparar la contraseña");
    }
    // result solo va a ser TRUE o FALSE
    if (result) {
      console.log("contraseña correcta");
      res.status(200).send("Logeado correctamente");
    } else {
      console.log("contraseña incorrecta");
      res.status(500).send("Contraseña incorrecta");
    }
  });
};

module.exports = {
  renderIndex,
  renderLogin,
  renderRegistro,
  registrarNuevo,
  login,
};
