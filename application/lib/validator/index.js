const validateUser = require('./validateUser');
const validatePayment = require('./validatePayment');
const validateMerchant = require('./validateMerchant');
const InvalidInputError = require('./InvalidInputError')

module.exports = function validate(inputData) {
    inputData.forEach(function(data) {
        if (data.type === 'user') {
            validateUser(data);
        } else if (data.type === 'payment') {
            validatePayment(data);
        } else if (data.type === 'merchant') {
            validateMerchant(data);
        } else {
            throw new InvalidInputError('\'type\' field is missing or has incorrect format')
        }
    })
}
