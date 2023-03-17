const DaHelper = require('./daHelper');
const PrecioItem = require('../model/precioItem.model')
const Item = require('../model/item.model')
const ListaPrecio = require('../model/listaPrecio.model');
const Rubro = require('../model/rubro.model');

module.exports.getPrices = function getPrices()
    {      
      let promise = new Promise(async (resolve, reject) => {
      try {
        const items = await PrecioItem.findAll
        ({ where: { referenciaArea: 'VTA', estado:1 }, 
          include: [Item, ListaPrecio],
          include: [{ model: Item, include: [Rubro] }] });
        items.every(item => item instanceof PrecioItem)
        resolve(items);
      }
      catch (ex) {
        reject(ex);
      }
    });

    return promise;
  };


