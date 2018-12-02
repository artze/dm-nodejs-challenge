const emailValidator = require('email-validator')
const InvalidInputError = require('./InvalidInputError')

function validateId(id) {
    return /^[a-zA-Z0-9]{64}$/.test(id);
}

function validateUserName(userName) {
    return /^[a-zA-Z0-9_.]{1,20}$/.test(userName);
}

function validateFirstOrLastName(firstOrLastName) {
    return /^[a-zA-Z]{1,100}$/.test(firstOrLastName);
}

module.exports = function validateUser(user) {

    /**
     * validate id
     */
    if (!validateId(user.id)) {
        throw new InvalidInputError('\'id\' field is missing or has incorrect format');
    }

    /**
     * validate userName
     */
    if (!validateUserName(user.userName)) {
        throw new InvalidInputError('\'userName\' field is missing or has incorrect format');
    }

    /**
     * validate first name
     */
    if (user.firstName && !validateFirstOrLastName(user.firstName)) {
        throw new InvalidInputError('\'firstName\' has incorrect format')
    }

    /**
     * validate last name
     */
    if (user.lastName && !validateFirstOrLastName(user.lastName)) {
        throw new InvalidInputError('\'lastName\' has incorrect format');
    }

    /**
     * validate email according to RFC
     */
    if (user.email && !emailValidator.validate(user.email)) {
        throw new InvalidInputError('\'email\' has incorrect format');
    }
}
