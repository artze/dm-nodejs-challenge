const validator = require('./validator');
const InvalidInputError = require('../lib/validator/InvalidInputError');
const inputData = require('../data.json');

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
    let user = new User();
    user.setWithValidation('id', id);
    user.setWithValidation('type', type);
    user.setWithValidation('userName', userName);
    user.setWithValidation('firstName', firstName);
    user.setWithValidation('lastName', lastName);
    user.setWithValidation('email', email);
    return user;
  }
}

let user = User.create(inputData[0].id, inputData[0].type, inputData[0].userName, inputData[0].firstName, inputData[0].lastName, inputData[0].email);
console.log(user)