const inputDataValidator = require('./inputDataValidator');
const InvalidInputError = require('./InvalidInputError');

module.exports = function validateMerchant(merchant) {

  /**
   * check presence of required fields
   */
  if (!merchant.id || !merchant.name) {
    throw new InvalidInputError('Required fields are missing')
  }

  /**
   * validate id format
   */
  if (merchant.id && !inputDataValidator.validateId(merchant.id)) {
    throw new InvalidInputError('ID field in Merchant is missing or has incorrect format');
  }

  /**
   * validate name format
   */
  if (merchant.name && !inputDataValidator.validateMerchantName(merchant.name)) {
    throw new InvalidInputError('NAME field in Merchant is missing or has incorrect format');
  }

}