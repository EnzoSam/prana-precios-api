const { DataTypes } = require("sequelize");
const db = require('../da/daHelper')

const ListaPrecio = db.db.define(
  "ListaPrecio",
  {
    nombre: {
      type: DataTypes.STRING
    },
    estado: {
      type: DataTypes.INTEGER,
    }
  },
  {
    tableName: "invTipoListaPrecio",
    updatedAt: 'fechaModificacion',
    createdAt: 'fechaCreacion'
  }
  
);

module.exports = ListaPrecio;
