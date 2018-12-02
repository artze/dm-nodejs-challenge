const inputDataValidator = require('./inputDataValidator')
const InvalidInputError = require('./InvalidInputError')

module.exports = function validateUser(user) {

    /**
     * validate id
     */
    if (!inputDataValidator.validateId(user.id)) {
        throw new InvalidInputError('ID field in User is missing or has incorrect format');
    }

    /**
     * validate userName
     */
    if (!inputDataValidator.validateUserName(user.userName)) {
        throw new InvalidInputError('USER_NAME field in User is missing or has incorrect format');
    }

    /**
     * validate first name
     */
    if (user.firstName && !inputDataValidator.validateFirstOrLastName(user.firstName)) {
        throw new InvalidInputError('FIRST_NAME in User has incorrect format')
    }

    /**
     * validate last name
     */
    if (user.lastName && !inputDataValidator.validateFirstOrLastName(user.lastName)) {
        throw new InvalidInputError('LAST_NAME in User has incorrect format');
    }

    /**
     * validate email according to RFC
     */
    if (user.email && !inputDataValidator.validateEmail(user.email)) {
        throw new InvalidInputError('EMAIL in User has incorrect format');
    }
}
