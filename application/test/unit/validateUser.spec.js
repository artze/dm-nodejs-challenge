const validateUser = require('../../lib/validator/validateUser');
const InvalidInputError = require('../../lib/validator/InvalidInputError');

describe('validateUser', function() {
  let userInput;

  describe('validateUser with correct fields', function() {

    before(function() {
      userInput = {
        id: 'fyPZYzsBthguAgbMZkAAukWQWASmtOyPwVLw11fQATpxcOgpgUZyZAiyjHWimIcG',
        userName: 'Arturo_Tremblay',
        firstName: 'Charlotte',
        lastName: 'Bradtke',
        email: 'Emilio.Stark83@gmail.com'
      }  
    });

    it('should pass all validation tests', function() {

      expect(function() {
        validateUser(userInput)
      })
      .to.not.throw();

    });
  })

  describe('validateUser with missing id or username', function() {
    let userInputArr;
    before(function() {
      userInputArr = [
        {
          userName: 'johndoe111',
          firstName: 'John',
          lastName: 'Doe'
        },
        {
          id: 'fyPZYzsBthguAgbMZkAAukWQWASmtOyPwVLw11fQATpxcOgpgUZyZAiyjHWimIcG',
          firstName: 'John',
          lastName: 'Doe'
        }
      ]
    })

    it('should throw InvalidInputError', function() {

      userInputArr.forEach(function(userInput) {
        expect(function() {
          validateUser(userInput)
        })
        .to.throw(InvalidInputError)
      })

    })
  })
})
