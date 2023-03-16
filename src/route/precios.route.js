
var express = require('express');
var PreciosController = require('../controller/precios.controller');

var router = express.Router();

router.get("/", PreciosController.test); 

module.exports = router;