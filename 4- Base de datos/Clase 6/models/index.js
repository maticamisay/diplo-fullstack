const { Sequelize } = require("sequelize");

/**
 * Creates a new Sequelize instance with the specified database name, username, password, host, dialect and port.
 * @param {string} databaseName - The name of the database.
 * @param {string} username - The username for the database.
 * @param {string} password - The password for the database.
 * @param {string} host - The host for the database.
 * @param {string} dialect - The dialect for the database.
 * @param {number} port - The port for the database.
 * @returns {Sequelize} A new Sequelize instance.
 */
const sequelize = new Sequelize("comercio", "root", "admin", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});

module.exports = sequelize;
