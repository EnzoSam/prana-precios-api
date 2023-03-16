const PreciosController = require('../service/precios.service');

var controller = {
  test: function (req, res) {
    return res.status(200).send({
      message: "PreciosController OK.",
    });
  }
}

module.exports = controller;
