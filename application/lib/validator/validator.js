const emailValidator = require('email-validator');
const moment = require('moment');
const modelTypes = require('../../models').modelTypes;

function validateId(id) {
  if (id) {
    return /^[a-zA-Z0-9]{64}$/.test(id);
  }
  return true;
}

function validateType(type) {
  if (type) {
    return modelTypes.includes(type)
  }
  return true
}

function validateUserName(userName) {
  if (userName) {
    return /^[a-zA-Z0-9_.]{1,20}$/.test(userName);
  }
  return true;
}

function validateFirstOrLastName(firstOrLastName) {
  if (firstOrLastName) {
    return /^[a-zA-Z]{1,100}$/.test(firstOrLastName);
  }
  return true;
}

function validateEmail(email) {
  if (email) {
    return emailValidator.validate(email);
  }
  return true;
}

function validatePaymentAmount(paymentAmount) {
  if (paymentAmount) {
    return paymentAmount > 0;
  }
  return true;
}

function validateISODate(date) {
  if (date) {
    return moment(date, moment.ISO_8601).isValid();
  }
  return true;
}

function validateMerchantName(merchantName) {
  if (merchantName) {
    return /^[a-zA-Z0-9_.]{1,20}$/.test(merchantName);
  }
  return true;
}

function validateNonEmpty(value) {
  if (!value) {
    return false
  }
  return true
}

function validatePresenceOfAnyOneField(...fields) {
  return fields.some(function(field) {
    if (field) {
      return true;
    }
  })
}

module.exports = {
  validateId,
  validateType,
  validateUserName,
  validateFirstOrLastName,
  validateEmail,
  validatePaymentAmount,
  validateISODate,
  validateMerchantName,
  validateNonEmpty,
  validatePresenceOfAnyOneField
}
