var express = require("express"),
bodyParser = require("body-parser");
var axios = require('axios');


var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

axios.defaults.timeout = 60000;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', process.env.ALLOW_ORIGIN);
     res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
     res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,OPTIONS,DELETE,PATCH');
     res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE, PATCH');
     if (req.method === "OPTIONS") {
         return res.status(200).end();
     }
     next();
 });

var preciosRoutes = require('./route/prices.route');

app.use('/', preciosRoutes);

module.exports = app;