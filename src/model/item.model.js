const { DataTypes } = require("sequelize");
const db = require('../da/daHelper');
const Rubro = require("./rubro.model");

const Item = db.db.define(
  "Item",
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    codigo: {
      type: DataTypes.STRING,
    },
    descripcion: {
      type: DataTypes.STRING,
    }    
  },
  {
    tableName: "invItem",
    updatedAt: 'fechaModificacion',
    createdAt: 'fechaCreacion'
  }
  
);
Item.belongsTo(Rubro,{
  foreignKey: 'idRubro'
});
module.exports = Item;
