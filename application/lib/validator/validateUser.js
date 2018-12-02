const emailValidator = require('email-validator')

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
        console.error('id format error');
    }

    /**
     * validate userName
     */
    if (!validateUserName(user.userName)) {
        console.error('user name format error');
    }

    /**
     * validate first name
     */
    if (user.firstName && !validateFirstOrLastName(user.firstName)) {
        console.error('first name error')
    }

    /**
     * validate last name
     */
    if (user.lastName && !validateFirstOrLastName(user.lastName)) {
        console.error('last name error');
    }

    /**
     * validate email according to RFC
     */
    if (user.email && !emailValidator.validate(user.email)) {
        console.error('email error');
    }
}
