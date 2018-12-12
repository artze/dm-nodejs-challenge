const User = require('../models/User');
const Payment = require('../models/Payment');
const Merchant = require('../models/Merchant');
const validator = require('../lib/validator/validator');
const InvalidInputError = require('../lib/validator/InvalidInputError');

/**
 * Parse json array and return array of Model objects
 * 
 * @param {Array<Object>} inputData 
 * @returns {Array<User|Payment|Merchant>}
 */
function parseJsonInput(inputData) {
  let modelObjectArr = [];
  if (!validator.validateIsArray(inputData)) {
    throw new InvalidInputError('Input Error: input data is not of Array type');
  }
  inputData.forEach(function(inputObject) {
    if (!validator.validateType(inputObject.type)) {
      throw new InvalidInputError('Input Error: input object has incorrect \'type\' field');
    }

    switch(inputObject.type) {
      case 'user':
      const user = new User(inputObject.id, inputObject.type, inputObject.userName, inputObject.firstName, inputObject.lastName, inputObject.email);
      modelObjectArr.push(user);
      break;

      case 'payment':
      const payment = new Payment(inputObject.id, inputObject.type, inputObject.fromUserId, inputObject.toMerchantId, inputObject.toUserId, inputObject.amount, inputObject.createdAt);
      modelObjectArr.push(payment);
      break;

      case 'merchant':
      const merchant = new Merchant(inputObject.id, inputObject.type, inputObject.name);
      modelObjectArr.push(merchant);
      break;
    }
  })
  return modelObjectArr;
}

module.exports = parseJsonInput;
