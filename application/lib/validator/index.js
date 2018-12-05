const validateUser = require('./validateUser');
const validatePayment = require('./validatePayment');
const validateMerchant = require('./validateMerchant');
const InvalidInputError = require('./InvalidInputError')

const validator = {
  'user': validateUser,
  'payment': validatePayment,
  'merchant': validateMerchant
}

module.exports = function validate(inputData) {
  inputData.forEach(function(data) {
    if (Object.keys(validator).includes(data.type)) {
      validator[data.type](data);
    } else {
      throw new InvalidInputError('TYPE field is missing or has incorrect format');
    }
  })
}
