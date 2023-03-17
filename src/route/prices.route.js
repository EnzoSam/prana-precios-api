
var express = require('express');
var PreciosController = require('../controller/prices.controller');

var router = express.Router();

router.get("/precios", PreciosController.getPrices); 

module.exports = router;