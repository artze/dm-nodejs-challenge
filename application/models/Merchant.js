const validator = require('./validator');
const InvalidInputError = require('../lib/validator/InvalidInputError');

class Merchant {
  constructor(id, type, name) {
    this.id = id;
    this.type = type;
    this.name = name;
  }

  get id() {
    return this._id;
  }

  set id(id) {
    const validators = [validator.validateId, validator.validateNonEmpty];
    this.setWithValidation('_id', id, validators);
  }

  get type() {
    return this._type;
  }

  set type(type) {
    const validators = [validator.validateType, validator.validateNonEmpty];
    this.setWithValidation('_type', type, validators);
  }

  get name() {
    return this._name;
  }

  set name(name) {
    const validators = [validator.validateMerchantName, validator.validateNonEmpty];
    this.setWithValidation('_name', name, validators);
  }

  setWithValidation(key, value, validators) {
    const dataIsValid = validators.every(function(validator) {
      return validator(value);
    })
    if(!dataIsValid) {
      throw new InvalidInputError(`Input Error in \'${key}\' field in Merchant`);
    }
    this[key] = value ? value : null;
  }
}

module.exports = Merchant;