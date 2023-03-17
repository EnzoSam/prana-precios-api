const PreciosService = require("../service/prices.service");

var controller = {
  test: function (req, res) {
    return res.status(200).send({
      message: "PreciosController OK.",
    });
  },
  getPrices: function (req, res) {
     PreciosService.getPrices()
      .then((data) => {
        return res.status(200).send(data);
      })
      .catch((error) => {
        console.log(error);
        return res.status(500).send({
          message: "Error al obtener precios.",
          error,
        });
      });
  },
};

module.exports = controller;
