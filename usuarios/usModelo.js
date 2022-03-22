const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

const Usuario = sequelize.define(
  "Usuarios",
  {
    // Model attributes are defined here
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      // allowNull defaults to true
    },
  },
  {
    contraseña: DataTypes.STRING,
    allowNull: false,
    // Other model options go here
  },
  {
    rol: DataTypes.STRING,
  }
);

// `sequelize.define` also returns the model
console.log(Usuario === sequelize.models.Usuario); // true
