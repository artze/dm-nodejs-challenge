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
  });

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
    });

    it('should throw InvalidInputError', function() {

      userInputArr.forEach(function(userInput) {
        expect(function() {
          validateUser(userInput)
        })
        .to.throw(InvalidInputError);
      });

    });
  });

  describe('validateUser with incorrect id, userName, firstName, lastName, email', function() {
    let userInputArr;

    before(function() {
      userInputArr = [
        {
          /**
           * data with incorrect id
           */
          id: 'fyPZYzsBthguAgbMZkAAukWQWASmtOyPwVLw11fQATpxcOgpgUZyZAiyjHWimI',
          userName: 'Arturo_Tremblay',
          firstName: 'Charlotte',
          lastName: 'Bradtke',
          email: 'Emilio.Stark83@gmail.com'
        },
        {
          /**
           * data with incorrect username
           */
          id: 'fyPZYzsBthguAgbMZkAAukWQWASmtOyPwVLw11fQATpxcOgpgUZyZAiyjHWimI',
          userName: 'Arturo_Tremb@@',
          firstName: 'Charlotte',
          lastName: 'Bradtke',
          email: 'Emilio.Stark83@gmail.com'
        },
        {
          /**
           * data with incorrect firstName
           */
          id: 'fyPZYzsBthguAgbMZkAAukWQWASmtOyPwVLw11fQATpxcOgpgUZyZAiyjHWimI',
          userName: 'Arturo_Tremblay',
          firstName: 'Char33e',
          lastName: 'Bradtke',
          email: 'Emilio.Stark83@gmail.com'
        },
        {
          /**
           * data with incorrect lastName
           */
          id: 'fyPZYzsBthguAgbMZkAAukWQWASmtOyPwVLw11fQATpxcOgpgUZyZAiyjHWimI',
          userName: 'Arturo_Tremblay',
          firstName: 'Charlotte',
          lastName: 'Bradt ',
          email: 'Emilio.Stark83@gmail.com'
        },
        {
          /**
           * data with incorrect email
           */
          id: 'fyPZYzsBthguAgbMZkAAukWQWASmtOyPwVLw11fQATpxcOgpgUZyZAiyjHWimI',
          userName: 'Arturo_Tremblay',
          firstName: 'Charlotte',
          lastName: 'Bradtke',
          email: 'Emilio.Stark83@gmailm'
        }
      ]
    });

    it('should throw InvalidInputError', function() {

      userInputArr.forEach(function(userInput) {
        expect(function() {
          validateUser(userInput)
        })
        .to.throw(InvalidInputError);
      });

    });
  });
});
