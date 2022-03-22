//conectarse a la base de datos a traves de sequelize e importación
const Sequelize = require("sequelize");
const dotenvDavid = require("dotenv");

//Función para el uso de variables de entorno
dotenvDavid.config();

const conexion = new Sequelize("ejemplo", "root", process.env.MYSQL_PASS, {
  host: "localhost",
  dialect: "mysql" /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
});

const arranque = async () => {
  try {
    await conexion.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
arranque();

module.exports = conexion;
