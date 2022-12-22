const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    id: {
      type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        unique: true,
        allowNull: false,
  },
  life:{
    type: DataTypes.INTEGER, //integer
  },
  attack:{
type:DataTypes.INTEGER,
  },
  defense:{
    type: DataTypes.INTEGER,
  },
  speed:{
    type:DataTypes.INTEGER,
  }, //velocidad
  height:{
    type: DataTypes.INTEGER, //
  },//altura
  weight:{
    type: DataTypes.INTEGER,
  },//peso

image: {
  type: DataTypes.TEXT,
},
createdInBd: {
  type: DataTypes.BOOLEAN,
  allowNull: false,
  defaultValue: true
},

  });
};
