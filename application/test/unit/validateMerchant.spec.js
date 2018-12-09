const validateMerchant = require('../../lib/validator/validateMerchant');
const InvalidInputError = require('../../lib/validator/InvalidInputError');

describe('validateMerchant', function() {
  let userInput;

  describe('validateMerchant with correct fields', function() {

    before(function() {

      userInput = {
        id: "xVCNjyedZb1JLFQxOAzKjzSDltYKfZzIuFlExivXykZtEmaallDlryIcUanzKFrQ",
        name: "Lauriane_Bayer"
      }

    });

    it('should pass all validation tests', function() {

      expect(function() {
        validateMerchant(userInput)
      })
        .to.not.throw();
    });
  });

  describe('validateMerchant with missing id or name', function() {
    let userInputArr;

    before(function() {

      userInputArr = [
        {
          name: "Lauriane_Bayer"
        },
        {
          id: "xVCNjyedZb1JLFQxOAzKjzSDltYKfZzIuFlExivXykZtEmaallDlryIcUanzKFrQ",
        }
      ]
      
    });

    it('should throw InvalidInputError', function() {

      userInputArr.forEach(function(userInput) {
        expect(function() {
          validateMerchant(userInput)
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
          id: "xVCNjyedZb1JLFQxOAzKjzSDltYKfZzIuFlExivXykzKFrQ",
          name: "Lauriane_Bayer"
        },
        {
          /**
           * data with incorrect name format
           */
          id: "xVCNjyedZb1JLFQxOAzKjzSDltYKfZzIuFlExivXykZtEmaallDlryIcUanzKFrQ",
          name: "Lauriane Bayer"
        }
      ]

    });

    it('should throw InvalidInputError', function() {

      userInputArr.forEach(function(userInput) {
        expect(function() {
          validateMerchant(userInput)
        })
          .to.throw(InvalidInputError);
      });
 
    });
  });
});