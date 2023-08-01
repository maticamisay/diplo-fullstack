const { Model, DataTypes } = require("sequelize");
const sequelize = require("./index");

class Producto extends Model {}

Producto.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombre: { type: DataTypes.STRING, allowNull: false },
    precio: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    sequelize,
    modelName: "Producto",
  }
);

module.exports = Producto;
