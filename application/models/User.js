const validator = require('./validator');
const InvalidInputError = require('../lib/validator/InvalidInputError');

class User {
  constructor() {
    this.id = {
      value: null,
      validator: [validator.validateId, validator.validateNonEmpty]
    }
    this.type = {
      value: null,
      validator: [validator.validateType, validator.validateNonEmpty]
    }
    this.userName = {
      value: null,
      validator: [validator.validateUserName, validator.validateNonEmpty]
    }
    this.firstName = {
      value: null,
      validator: [validator.validateFirstOrLastName]
    }
    this.lastName = {
      value: null,
      validator: [validator.validateFirstOrLastName]
    }
    this.email = {
      value: null,
      validator: [validator.validateEmail]
    }
  }

  setWithValidation(key, value) {
    const dataIsValid = this[key].validator.every(function(validator) {
      return validator(value);
    })
    if (!dataIsValid) {
      throw new InvalidInputError(`Input Error in \'${key}\' field in User`);
    }
    this[key].value = value ? value : null;
  }

  static create(id, type, userName, firstName, lastName, email) {
    const user = new User();
    const creatorArgs = arguments;
    Object.keys(user).forEach(function(value, index) {
      user.setWithValidation(value, creatorArgs[index]);
    })
    return user;
  }
}

module.exports = User;
