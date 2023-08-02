const { Model, DataTypes } = require("sequelize");
const sequelize = require("./index");

/**
 * @description This module defines the Producto model, which represents a product in the database.
 * It exports the Producto class, which extends the Sequelize Model class and defines the schema
 * of the "productos" table in the database.
 * @requires sequelize
 * @requires sequelize.Model
 * @requires sequelize.DataTypes
 * @exports Producto
 */
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
