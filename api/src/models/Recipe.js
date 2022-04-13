const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo

  sequelize.define("recipe", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    dish: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    puntuation: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    healthylevel: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    stepbystep: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
  });
};
