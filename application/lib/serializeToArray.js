const User = require('../models/User');
const Payment = require('../models/Payment');
const Merchant = require('../models/Merchant');

/**
 * Serialize objects to array of values
 * 
 * @param {Array<User|Payment|Merchant>} modelObjectArr 
 * @returns {Array<Array>}
 */
function serializeToArray(modelObjectArr) {
  let serializedObjectArray = [];
  modelObjectArr.forEach(function(modelObject) {
    serializedObjectArray.push(modelObject.serializeToArray());
  })

  return serializedObjectArray;
}

module.exports = serializeToArray;
