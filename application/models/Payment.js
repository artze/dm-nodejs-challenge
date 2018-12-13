const validator = require('../lib/validator/validator');
const InvalidInputError = require('../lib/validator/InvalidInputError');

class Payment {
  constructor(id, type, fromUserId, toMerchantId, toUserId, amount, createdAt) {
    this.id = id;
    this.type = type;
    this.fromUserId = fromUserId;
    this.toMerchantId = toMerchantId;
    this.toUserId = toUserId;
    this.amount = amount;
    this.createdAt = createdAt;
    this.validateClassLevelConstraints();
  }

  get id() {
    return this._id;
  }

  set id(id) {
    const validators = [validator.validateId, validator.validateNonEmpty];
    this.setWithValidation('_id', id, validators);
  }

  get type() {
    return this._type
  }

  set type(type) {
    const validators = [validator.validateType, validator.validateNonEmpty];
    this.setWithValidation('_type', type, validators);
  }

  get fromUserId() {
    return this._fromUserId;
  }

  set fromUserId(fromUserId) {
    const validators = [validator.validateId, validator.validateNonEmpty];
    this.setWithValidation('_fromUserId', fromUserId, validators);
  }

  get toMerchantId() {
    return this._toMerchantId;
  }

  set toMerchantId(toMerchantId) {
    const validators = [validator.validateId];
    this.setWithValidation('_toMerchantId', toMerchantId, validators);
  }

  get toUserId() {
    return this._toUserId;
  }

  set toUserId(toUserId) {
    const validators = [validator.validateId];
    this.setWithValidation('_toUserId', toUserId, validators);
  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    const validators = [validator.validatePaymentAmount, validator.validateNonEmpty];
    this.setWithValidation('_amount', amount, validators);
  }

  get createdAt() {
    return this._createdAt;
  }

  set createdAt(createdAt) {
    const validators = [validator.validateISODate, validator.validateNonEmpty];
    this.setWithValidation('_createdAt', createdAt, validators);
  }

    /**
   * Validate before setting instance variables
   * @param {string} key 
   * @param {any} value 
   * @param {Array<Function>} validators 
   */
  setWithValidation(key, value, validators) {
    const dataIsValid = validators.every(function(validator) {
      return validator(value);
    })
    if(!dataIsValid) {
      throw new InvalidInputError(`Input Error: Payment input has incorrect \'${key}\' field`);
    }
    this[key] = value ? value : null;
  }

  /**
   * Validate constraints spanning multiple fields
   */
  validateClassLevelConstraints() {
    const validators = [validator.validatePresenceOfAnyOneField(this.toMerchantId, this.toUserId)]
    const dataIsValid = validators.every(function(validation) {
      return validation === true;
    });
    if (!dataIsValid) {
      throw new InvalidInputError(`Input Error: Payment Class Level Constraints validation failed`);
    }
  }

  /**
   * Serialize Payment attributes to array of values
   * 
   * @returns {Array<*>}
   */
  serializeToArray() {
    return [this.type, this.id, this.fromUserId, this.toMerchantId, this.toUserId, this.amount, this.createdAt];
  }
}

module.exports = Payment;
