const { Sequelize, DataTypes } = require("sequelize");
const conexion = require("../configuracion/sequelize-conexion.js");

const Usuario = conexion.define(
  "Usuarios",
  {
    // Model attributes are defined here
    nombre: {
      type: DataTypes.STRING,
      //allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      //allowNull: false,
      // allowNull defaults to true
    },
  },
  {
    contraseña: DataTypes.STRING,
    //allowNull: false,
    // Other model options go here
  },
  {
    rol: DataTypes.STRING,
  }
);

// `sequelize.define` also returns the model
console.log(Usuario === conexion.models.Usuario); // true

try {
  Usuario.sync();
} catch (e) {
  console.log(error + " Este es el error");
}
