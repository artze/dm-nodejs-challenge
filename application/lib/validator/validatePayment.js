const inputDataValidator = require('./inputDataValidator');
const InvalidInputError = require('./InvalidInputError')

module.exports = function validatePayment(payment) {

    if (!inputDataValidator.validateId(payment.id)) {
        throw new InvalidInputError('ID field in User is missing or has incorrect format');
    }

    if (!inputDataValidator.validateId(payment.fromUserId)) {
        throw new InvalidInputError('FROM_USER_ID field in Payment is missing or has incorrect format');
    }

    if (!inputDataValidator.validateId(payment.toMerchantId)) {
        throw new InvalidInputError('TO_MERCHANT_ID field in Payment is missing or has incorrect format');
    }

    if (!inputDataValidator.validatePaymentAmount(payment.amount)) {
        throw new InvalidInputError('AMOUNT in Payment is missing or has incorrect format');
    }

    if (!inputDataValidator.validateISODate(payment.createdAt)) {
        throw new InvalidInputError('CREATED_AT in Payment is missing or has incorrect format');
    }
}