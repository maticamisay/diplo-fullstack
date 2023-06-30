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
  res.send("nuevo usuario");
};
module.exports = {
  renderIndex,
  renderLogin,
  renderRegistro,
  registrarNuevo,
};
