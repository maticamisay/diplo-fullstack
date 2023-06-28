const renderAdmin = (req, res) => {
  const { usuario } = req.session;
  res.render("logueado", { usuario });
};

const renderLogout = (req, res) => {
  req.session.destroy(); // Eliminar la sesión actual
  res.redirect("/no-logueado");
};

module.exports = {
  renderAdmin,
  renderLogout,
};
