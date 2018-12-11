const validator = require('./validator');
const InvalidInputError = require('../lib/validator/InvalidInputError');

class Payment {
  constructor() {
    this.id = {
      value: null,
      validator: [validator.validateId, validator.validateNonEmpty]
    }
    this.type = {
      value: null,
      validator: [validator.validateType, validator.validateNonEmpty]
    }
    this.fromUserId = {
      value: null,
      validator: [validator.validateId, validator.validateNonEmpty]
    }
    this.toMerchantId = {
      value: null,
      validator: [validator.validateId]
    }
    this.toUserId = {
      value: null,
      validator: [validator.validateId]
    }
    this.amount = {
      value: null,
      validator: [validator.validatePaymentAmount, validator.validateNonEmpty]
    }
    this.createdAt = {
      value: null,
      validator: [validator.validateISODate, validator.validateNonEmpty]
    }
  }

  setWithValidation(key, value) {
    const dataIsValid = this[key].validator.every(function(validator) {
      return validator(value);
    })
    if (!dataIsValid) {
      throw new InvalidInputError(`Input Error in \'${key}\' field in Payment`);
    }
    this[key].value = value ? value : null;
  }

  static create(id, type, fromUserId, toMerchantId, toUserId, amount, createdAt) {
    const payment = new Payment();
    const creatorArgs = arguments;
    Object.keys(payment).forEach(function(value, index) {
      payment.setWithValidation(value, creatorArgs[index]);
    })
    return payment;
  }
}

module.exports = Payment;

const inputData = require('../data.json');

let payment = Payment.create(inputData[5].id, inputData[5].type, inputData[5].fromUserId, inputData[5].toMerchantId, inputData[5].toUserId, inputData[5].amount, inputData[5].createdAt);
console.log(payment)