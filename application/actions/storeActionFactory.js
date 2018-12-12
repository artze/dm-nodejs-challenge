const validator = require('../lib/validator/validator');
const InvalidInputError = require('../lib/validator/InvalidInputError');
const User = require('../models/User');
const Payment = require('../models/Payment');
const Merchant = require('../models/Merchant');

/**
 * Create storeAction with dependencies
 *
 * @param {fetch} p2pFetch
 * @param {fetch} hostedFetch
 * @return {storeAction}
 */
// eslint-disable-next-line no-unused-vars
module.exports = function storeActionFactory(p2pFetch, hostedFetch) {
  /**
   * Validate and store data
   *
   * @typedef storeAction
   * @param {object[]} inputData
   * @return void
   */
  // eslint-disable-next-line no-unused-vars
  async function storeAction(inputData) {
    // Your code should be here:
    // 1. Validate inputData

    // try {
    //   validator(inputData)
    // } catch (error) {
    //   console.error(error);
    //   return;
    // }

    let objectArr = [];
    inputData.forEach(function(inputObject, index) {
      if (!validator.validateType(inputObject.type)) {
        throw new InvalidInputError('Input Error')
      }
      if (inputObject.type === 'user') {
        const user = new User(inputObject.id, inputObject.type, inputObject.userName, inputObject.firstName, inputObject.lastName, inputObject.email);
        objectArr.push(user)
      } else if (inputObject.type === 'payment') {
        const payment = new Payment(inputObject.id, inputObject.type, inputObject.fromUserId, inputObject.toMerchantId, inputObject.toUserId, inputObject.amount, inputObject.createdAt);
        objectArr.push(payment);
      } else if (inputObject.type === 'merchant') {
        const merchant = new Merchant(inputObject.id, inputObject.type, inputObject.name);
        objectArr.push(merchant);
      }
    })

    console.log(objectArr);

    // 2. Store inputData in external service(s)
    await hostedFetch('http://localhost:3000/api/app-data', {
      method: 'POST',
      body: JSON.stringify(inputData),
      headers: { 'Content-Type': 'application/json' }
    })
  }

  return storeAction;
};
