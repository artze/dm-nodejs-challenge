const Merchant = require('../../models/Merchant');
const InvalidInputError = require('../../lib/validator/InvalidInputError');

describe('validateMerchant', function() {
  let userInput;

  describe('validateMerchant with correct fields', function() {

    before(function() {

      userInput = {
        id: 'xVCNjyedZb1JLFQxOAzKjzSDltYKfZzIuFlExivXykZtEmaallDlryIcUanzKFrQ',
        type: 'merchant',
        name: 'Lauriane_Bayer'
      }

    });

    it('should pass all validation tests', function() {

      expect(function() {
        new Merchant(userInput.id, userInput.type, userInput.name);
      })
        .to.not.throw();
    });
  });

  describe('validateMerchant with missing id or name', function() {
    let userInputArr;

    before(function() {

      userInputArr = [
        {
          name: 'Lauriane_Bayer',
          type: 'merchant'
        },
        {
          id: 'xVCNjyedZb1JLFQxOAzKjzSDltYKfZzIuFlExivXykZtEmaallDlryIcUanzKFrQ',
          type: 'merchant'
        }
      ]
      
    });

    it('should throw InvalidInputError', function() {

      userInputArr.forEach(function(userInput) {
        expect(function() {
          new Merchant(userInput.id, userInput.type, userInput.name);
        })
          .to.throw(InvalidInputError);
      });

    });
  });

  describe('validateMerchant with incorrect id, name', function() {
    let userInputArr;

    before(function() {

      userInputArr = [
        {
          /**
           * data with incorrect id format
           */
          id: 'xVCNjyedZb1JLFQxOAzKjzSDltYKfZzIuFlExivXykzKFrQ',
          name: 'Lauriane_Bayer'
        },
        {
          /**
           * data with incorrect name format
           */
          id: 'xVCNjyedZb1JLFQxOAzKjzSDltYKfZzIuFlExivXykZtEmaallDlryIcUanzKFrQ',
          name: 'Lauriane Bayer'
        }
      ]

    });

    it('should throw InvalidInputError', function() {

      userInputArr.forEach(function(userInput) {
        expect(function() {
          new Merchant(userInput.id, userInput.type, userInput.name);
        })
          .to.throw(InvalidInputError);
      });
 
    });
  });
});