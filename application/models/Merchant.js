const validator = require('../lib/validator/validator');
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

  /**
   * Validate before setting instance variables
   * 
   * @param {string} key 
   * @param {any} value 
   * @param {Array<Function>} validators 
   */
  setWithValidation(key, value, validators) {
    const dataIsValid = validators.every(function(validator) {
      return validator(value);
    })
    if(!dataIsValid) {
      throw new InvalidInputError(`Input Error: Merchant input has incorrect \'${key}\' field`);
    }
    this[key] = value ? value : null;
  }

  /**
   * Serialize Merchant attributes to array of values
   * 
   * @returns {Array<*>}
   */
  serializeToArray() {
    return [this.type, this.id, this.name];
  }

  /**
   * Deserialize array of object values to object
   * 
   * @param {Array<*>} arrayOfObjectValues 
   * @returns {Object}
   */
  static deserializeToObject(arrayOfObjectValues) {
    const merchantObject = {
      id: arrayOfObjectValues[1],
      name: arrayOfObjectValues[2],
      type: arrayOfObjectValues[0]
    }
    
    return merchantObject;
  }
}

module.exports = Merchant;