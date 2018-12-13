const User = require('../models/User');
const Payment = require('../models/Payment');
const Merchant = require('../models/Merchant');

/**
 * Deserialize array to objects
 * 
 * @param {Array<Array>} dataArray 
 * @returns {Array<Object>}
 */
function deserializeToJson(dataArray) {
  let resultArr = [];
  dataArray.forEach(function(arrayOfObjectValues) {
    const type = arrayOfObjectValues[0];

    if (type === 'user') {

      const userObject = User.deserializeToObject(arrayOfObjectValues)
      resultArr.push(removeNullFields(userObject));

    } else if (type === 'payment') {

      const paymentObject = Payment.deserializeToObject(arrayOfObjectValues);
      resultArr.push(removeNullFields(paymentObject));

    } else if (type === 'merchant') {
      
      const merchantObject = Merchant.deserializeToObject(arrayOfObjectValues);
      resultArr.push(removeNullFields(merchantObject));

    }
  })

  return resultArr;
}

function removeNullFields(object) {
  for (let key in object) {
    if (object[key] === null) {
      delete object[key];
    }
  }
  return object
}

module.exports = deserializeToJson;
