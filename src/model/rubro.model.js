const { DataTypes } = require("sequelize");
const db = require('../da/daHelper')

const Rubro = db.db.define(
  "Rubro",
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nombreCompleto: {
      type: DataTypes.STRING
    },    
    estado: {
      type: DataTypes.INTEGER
    },    
    seleccionable: {
      type: DataTypes.BOOLEAN
    },     
    referenciaRaiz: {
      type: DataTypes.STRING
    },            
    codigo: {
      type: DataTypes.STRING,
    } 
  },
  {
    tableName: "invRubro",
    updatedAt: 'fechaModificacion',
    createdAt: 'fechaCreacion'
  }
  
);

module.exports = Rubro;
