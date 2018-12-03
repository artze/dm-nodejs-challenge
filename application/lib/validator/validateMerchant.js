const inputDataValidator = require('./inputDataValidator');
const InvalidInputError = require('./InvalidInputError');

module.exports = function validateMerchant(merchant) {

    if (!inputDataValidator.validateId(merchant.id)) {
        throw new InvalidInputError('ID field in Merchant is missing or has incorrect format');
    }

    if (!inputDataValidator.validateMerchantName(merchant.name)) {
        throw new InvalidInputError('NAME field in Merchant is missing or has incorrect format');
    }

}