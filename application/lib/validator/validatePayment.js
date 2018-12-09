const inputDataValidator = require('./inputDataValidator');
const InvalidInputError = require('./InvalidInputError')

module.exports = function validatePayment(payment) {

  /**
   * check presence of required fields
   */
  if (!payment.id || !payment.fromUserId || !(payment.toMerchantId || payment.toUserId) || !payment.amount || !payment.createdAt) {
    throw new InvalidInputError('Required fields are missing');
  }

  /**
   * validate id format
   */
  if (payment.id && !inputDataValidator.validateId(payment.id)) {
    throw new InvalidInputError('ID field in User is missing or has incorrect format');
  }

  /**
   * validate fromUserId format
   */
  if (payment.fromUserId && !inputDataValidator.validateId(payment.fromUserId)) {
    throw new InvalidInputError('FROM_USER_ID field in Payment is missing or has incorrect format');
  }

  /**
   * validate toMerchantId format
   */
  if (payment.toMerchantId && !inputDataValidator.validateId(payment.toMerchantId)) {
    throw new InvalidInputError('TO_MERCHANT_ID field in Payment is missing or has incorrect format');
  }

  /**
   * validate toUserId format
   */
  if (payment.toUserId && !inputDataValidator.validateId(payment.toUserId)) {
    throw new InvalidInputError('TO_USER_ID field in Payment is missing or has incorrect format');
  }

  /**
   * validate amount format
   */
  if (payment.amount && !inputDataValidator.validatePaymentAmount(payment.amount)) {
    throw new InvalidInputError('AMOUNT in Payment is missing or has incorrect format');
  }

  /**
   * validate createdAt format
   */
  if (payment.createdAt && !inputDataValidator.validateISODate(payment.createdAt)) {
    throw new InvalidInputError('CREATED_AT in Payment is missing or has incorrect format');
  }
}