const ApplicationError = require('./ApplicationError');

class InvalidDataTypeError extends ApplicationError {
  constructor(message) {
    super(message);
  }
}

module.exports = InvalidDataTypeError;
