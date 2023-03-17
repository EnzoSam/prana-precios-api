const { Sequelize } = require('sequelize');


const sequelize = new Sequelize
(process.env.DATABASE_SERVER, 
  process.env.DATABASE_USER, 
  process.env.DATABASE_PASSWORD, {
  dialect: 'mssql',
  dialectOptions: {
    // Observe the need for this nested `options` field for MSSQL
    options: {
      // Your tedious options here
      useUTC: false,
      dateFirst: 1,
      encrypt: false,
      port:5555,
      database: process.env.DATABASE_NAME              
    }
  }
});

module.exports.db = sequelize;

var config = {  
  server: process.env.DATABASE_SERVER,
  authentication: {
      type: 'default',
      options: {
          userName: process.env.DATABASE_USER, 
          password: process.env.DATABASE_PASSWORD
      }
  },
  options: {
      encrypt: false,
      port:5555,
      database: process.env.DATABASE_NAME
  }
};