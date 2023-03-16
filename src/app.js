var express = require("express"),
bodyParser = require("body-parser");
var axios = require('axios');


var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

axios.defaults.timeout = 60000;

var preciosRoutes = require('./route/precios.route');

app.use('/', preciosRoutes);

module.exports = app;