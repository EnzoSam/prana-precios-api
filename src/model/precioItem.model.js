const { DataTypes } = require("sequelize");
const db = require('../da/daHelper')
const Item = require('../model/item.model')
const ListaPrecio = require('../model/listaPrecio.model')

const PrecioItem = db.db.define(
  "PrecioItem",
  {
    precio: {
      type: DataTypes.DECIMAL
    },
    estado: {
      type: DataTypes.INTEGER,
    },
    porcentajeGanacia : {
        type: DataTypes.DECIMAL,
    },
    referenciaArea : {
      type: DataTypes.STRING,
  }
  },
  {
    tableName: "invPrecioItem",
    updatedAt: 'fechaModificacion',
    createdAt: 'fechaCreacion'
  }
  
);
PrecioItem.belongsTo(Item,{
    foreignKey: 'idItem'
});
PrecioItem.belongsTo(ListaPrecio,{
    foreignKey: 'idTipoListaPrecio'
});
module.exports = PrecioItem;
