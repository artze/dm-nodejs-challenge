const User = require('../../models/User')
const InvalidInputError = require('../../lib/validator/InvalidInputError');

describe('User validation', function() {
  let userInput;

  describe('validate User with correct fields', function() {

    before(function() {

      userInput = {
        id: 'fyPZYzsBthguAgbMZkAAukWQWASmtOyPwVLw11fQATpxcOgpgUZyZAiyjHWimIcG',
        type: 'user',
        userName: 'Arturo_Tremblay',
        firstName: 'Charlotte',
        lastName: 'Bradtke',
        email: 'Emilio.Stark83@gmail.com'
      }

    });

    it('should pass all validation tests', function() {

      expect(function() {
        new User(userInput.id, userInput.type, userInput.userName, userInput.firstName, userInput.lastName, userInput.email)
      })
        .to.not.throw();

    });
  });

  describe('validate User with missing id or username', function() {
    let userInputArr;
    
    before(function() {

      userInputArr = [
        {
          type: 'user',
          userName: 'Arturo_Tremblay',
          firstName: 'Charlotte',
          lastName: 'Bradtke',
          email: 'Emilio.Stark83@gmail.com'
        },
        {
          id: 'fyPZYzsBthguAgbMZkAAukWQWASmtOyPwVLw11fQATpxcOgpgUZyZAiyjHWimIcG',
          type: 'user',
          firstName: 'Charlotte',
          lastName: 'Bradtke',
          email: 'Emilio.Stark83@gmail.com'
        }
      ]

    });

    it('should throw InvalidInputError', function() {

      userInputArr.forEach(function(userInput) {
        expect(function() {
          new User(userInput.id, userInput.type, userInput.userName, userInput.firstName, userInput.lastName, userInput.email)
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
          id: 'fyPZYzsBthguAgbMZkAAukWQWASmtOyPwVLw11fQATpxcOgp',
          type: 'user',
          userName: 'Arturo_Tremblay',
          firstName: 'Charlotte',
          lastName: 'Bradtke',
          email: 'Emilio.Stark83@gmail.com'
        },
        {
          /**
           * data with incorrect username
           */
          id: 'fyPZYzsBthguAgbMZkAAukWQWASmtOyPwVLw11fQATpxcOgpgUZyZAiyjHWimIcG',
          type: 'user',
          userName: 'Arturo_Tremblay@@',
          firstName: 'Charlotte',
          lastName: 'Bradtke',
          email: 'Emilio.Stark83@gmail.com'
        },
        {
          /**
           * data with incorrect firstName
           */
          id: 'fyPZYzsBthguAgbMZkAAukWQWASmtOyPwVLw11fQATpxcOgpgUZyZAiyjHWimIcG',
          type: 'user',
          userName: 'Arturo_Tremblay',
          firstName: 'Charlotte2',
          lastName: 'Bradtke',
          email: 'Emilio.Stark83@gmail.com'
        },
        {
          /**
           * data with incorrect lastName
           */
          id: 'fyPZYzsBthguAgbMZkAAukWQWASmtOyPwVLw11fQATpxcOgpgUZyZAiyjHWimIcG',
          type: 'user',
          userName: 'Arturo_Tremblay',
          firstName: 'Charlotte',
          lastName: 'Bradtke ',
          email: 'Emilio.Stark83@gmail.com'
        },
        {
          /**
           * data with incorrect email
           */
          id: 'fyPZYzsBthguAgbMZkAAukWQWASmtOyPwVLw11fQATpxcOgpgUZyZAiyjHWimIcG',
          type: 'user',
          userName: 'Arturo_Tremblay',
          firstName: 'Charlotte',
          lastName: 'Bradtke',
          email: 'Emilio.Stark83@gmail'
        }
      ]
      
    });

    it('should throw InvalidInputError', function() {

      userInputArr.forEach(function(userInput) {
        expect(function() {
          new User(userInput.id, userInput.type, userInput.userName, userInput.firstName, userInput.lastName, userInput.email)
        })
          .to.throw(InvalidInputError);
      });

    });
  });
});
