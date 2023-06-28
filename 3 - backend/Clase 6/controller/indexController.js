const renderIndex = (req, res) => {
  res.render("index");
};

const renderLogin = (req, res) => {
  res.render("login");
};

const handleLogin = (req, res) => {
  const { usuario } = req.body;
  req.session.usuario = usuario; // Guardar el nombre de usuario en la sesión
  res.redirect("/admin");
};

const renderNoLogueado = (req, res) => {
  res.render("no-logueado");
};

module.exports = {
  renderIndex,
  renderLogin,
  handleLogin,
  renderNoLogueado,
};
