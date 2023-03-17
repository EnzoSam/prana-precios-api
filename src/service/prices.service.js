var PreciosDA = require('../da/prices.da');

exports.test = async function () {
  console.log("Precios Service Ok");
};

exports.getPrices = function () {
  let promise = new Promise((resolve, reject) => {
    PreciosDA.getPrices()
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });

  return promise;
};
