const emailValidator = require('email-validator');
const moment = require('moment');

function validateId(id) {
    return /^[a-zA-Z0-9]{64}$/.test(id);
}

function validateUserName(userName) {
    return /^[a-zA-Z0-9_.]{1,20}$/.test(userName);
}

function validateFirstOrLastName(firstOrLastName) {
    return /^[a-zA-Z]{1,100}$/.test(firstOrLastName);
}

function validateEmail(email) {
    return emailValidator.validate(email);
}

function validatePaymentAmount(paymentAmount) {
    return paymentAmount > 0;
}

function validateISODate(date) {
    return moment(date, moment.ISO_8601).isValid();
}

function validateMerchantName(merchantName) {
    return /^[a-zA-Z0-9_.]{1,20}$/.test(merchantName);
}

module.exports = {
    validateId,
    validateUserName,
    validateFirstOrLastName,
    validateEmail,
    validatePaymentAmount,
    validateISODate,
    validateMerchantName
}
