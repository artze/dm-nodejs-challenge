const validator = require('../lib/validator/validator');
const InvalidInputError = require('../lib/validator/InvalidInputError');

class User {
  constructor(id, type, userName, firstName, lastName, email) {
    this.id = id;
    this.type = type;
    this.userName = userName;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
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

  get userName() {
    return this._userName;
  }

  set userName(userName) {
    const validators = [validator.validateUserName, validator.validateNonEmpty];
    this.setWithValidation('_userName', userName, validators);
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(firstName) {
    const validators = [validator.validateFirstOrLastName];
    this.setWithValidation('_firstName', firstName, validators);
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(lastName) {
    const validators = [validator.validateFirstOrLastName]
    this.setWithValidation('_lastName', lastName, validators);
  }

  get email() {
    return this._email;
  }
  
  set email(email) {
    const validators = [validator.validateEmail];
    this.setWithValidation('_email', email, validators);
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
      throw new InvalidInputError(`Input Error: User input has incorrect \'${key}\' field`);
    }
    this[key] = value ? value : null;
  }

  /**
   * Serialize User attributes to array of values
   * 
   * @returns {Array<*>}
   */
  serializeToArray() {
    return [this.type, this.id, this.userName, this.firstName, this.lastName, this.email];
  }

  /**
   * Deserialize array of object values to object
   * 
   * @param {Array<*>} arrayOfObjectValues 
   * @returns {Object}
   */
  static deserializeToObject(arrayOfObjectValues) {
    const userObject = {
      id: arrayOfObjectValues[1],
      userName: arrayOfObjectValues[2],
      firstName: arrayOfObjectValues[3],
      lastName: arrayOfObjectValues[4],
      email: arrayOfObjectValues[5],
      type: arrayOfObjectValues[0]
    }

    return userObject;
  }
}

module.exports = User;
