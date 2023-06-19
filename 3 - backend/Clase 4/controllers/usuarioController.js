const renderformulario = (req, res) => {
  res.render("formulario.ejs");
};

const mostrarDatos = (req, res) => {
  const { nombre } = req.body;
  res.send("vista-ejs",{nombre});
};

module.exports = {
  renderformulario,
  mostrarDatos,
};
