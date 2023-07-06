const express = require("express");
const { readUsuarios } = require("../services/usuariosServices");
const router = express.Router();

router.get("/", (req, res) => {
  const usuarios = readUsuarios();
  res.json(usuarios);
});
