const validatePayment = require('../../lib/validator/validatePayment');
const InvalidInputError = require('../../lib/validator/InvalidInputError');

describe('validatePayment', function() {
  let userInput;

  describe('validatePayment with correct fields', function() {

    before(function() {

      userInput = {
        id: 'ERTgeDEfjvZbJXJZkvLFaVVXdGnmBIDxzBSGykWseiCeOeJP1qFcGTXfNGGvUOUN',
        fromUserId: 'YPpvaYdTzIKwHfpJKeEvqkhnQikz1u1hmrLGikAHtTS1n0UxPlFAjfjgsvOnMlZa',
        amount: 18.6494,
        createdAt: '1943-08-22T16:40:12.468Z',
        toMerchantId: 'NDnElTqaEXknxHGpcmvPlhxiCzdVsxNlhzJSPIzCNkCnIgWyzoMSlnoNoquDBtpG'
      }

    });

    it('should pass all validation tests', function() {

      expect(function() {
        validatePayment(userInput)
      })
        .to.not.throw();
    });
  });

  describe('validatePayment with missing id, fromUserId, amount, createdAt, toMerchantId', function() {
    let userInputArr;

    before(function() {

      userInputArr = [
        {
          /**
           * data with missing id
           */
          fromUserId: 'YPpvaYdTzIKwHfpJKeEvqkhnQikz1u1hmrLGikAHtTS1n0UxPlFAjfjgsvOnMlZa',
          amount: 18.6494,
          createdAt: '1943-08-22T16:40:12.468Z',
          toMerchantId: 'NDnElTqaEXknxHGpcmvPlhxiCzdVsxNlhzJSPIzCNkCnIgWyzoMSlnoNoquDBtpG'
        },
        {
          /**
           * data with missing fromUserId
           */
          id: 'ERTgeDEfjvZbJXJZkvLFaVVXdGnmBIDxzBSGykWseiCeOeJP1qFcGTXfNGGvUOUN',
          amount: 18.6494,
          createdAt: '1943-08-22T16:40:12.468Z',
          toMerchantId: 'NDnElTqaEXknxHGpcmvPlhxiCzdVsxNlhzJSPIzCNkCnIgWyzoMSlnoNoquDBtpG'
        },
        {
          /**
           * data with missing amount
           */
          id: 'ERTgeDEfjvZbJXJZkvLFaVVXdGnmBIDxzBSGykWseiCeOeJP1qFcGTXfNGGvUOUN',
          fromUserId: 'YPpvaYdTzIKwHfpJKeEvqkhnQikz1u1hmrLGikAHtTS1n0UxPlFAjfjgsvOnMlZa',
          createdAt: '1943-08-22T16:40:12.468Z',
          toMerchantId: 'NDnElTqaEXknxHGpcmvPlhxiCzdVsxNlhzJSPIzCNkCnIgWyzoMSlnoNoquDBtpG'
        },
        {
          /**
           * data with missing createdAt
           */
          id: 'ERTgeDEfjvZbJXJZkvLFaVVXdGnmBIDxzBSGykWseiCeOeJP1qFcGTXfNGGvUOUN',
          fromUserId: 'YPpvaYdTzIKwHfpJKeEvqkhnQikz1u1hmrLGikAHtTS1n0UxPlFAjfjgsvOnMlZa',
          amount: 18.6494,
          toMerchantId: 'NDnElTqaEXknxHGpcmvPlhxiCzdVsxNlhzJSPIzCNkCnIgWyzoMSlnoNoquDBtpG'
        },
        {
          /**
           * data with missing toMerchantId
           */
          id: 'ERTgeDEfjvZbJXJZkvLFaVVXdGnmBIDxzBSGykWseiCeOeJP1qFcGTXfNGGvUOUN',
          fromUserId: 'YPpvaYdTzIKwHfpJKeEvqkhnQikz1u1hmrLGikAHtTS1n0UxPlFAjfjgsvOnMlZa',
          amount: 18.6494,
          createdAt: '1943-08-22T16:40:12.468Z'
        }
      ]
      
    });

    it('should throw InvalidInputError', function() {

      userInputArr.forEach(function(userInput) {
        expect(function() {
          validatePayment(userInput)
        })
          .to.throw(InvalidInputError);
      });

    });
  });

  describe('validatePayment with incorrect id, fromUserId, amount, createdAt, toMerchantId', function() {
    let userInputArr;

    before(function() {

      userInputArr = [
        {
          /**
           * data with incorrect id
           */
          id: 'ERTgeDEfjvZbJXJZkvLFaVVXdGnmBIDxzBSGykWseiCeOeJP1',
          fromUserId: 'YPpvaYdTzIKwHfpJKeEvqkhnQikz1u1hmrLGikAHtTS1n0UxPlFAjfjgsvOnMlZa',
          amount: 18.6494,
          createdAt: '1943-08-22T16:40:12.468Z',
          toMerchantId: 'NDnElTqaEXknxHGpcmvPlhxiCzdVsxNlhzJSPIzCNkCnIgWyzoMSlnoNoquDBtpG'
        },
        {
          /**
           * data with incorrect fromUserId
           */
          id: 'ERTgeDEfjvZbJXJZkvLFaVVXdGnmBIDxzBSGykWseiCeOeJP1qFcGTXfNGGvUOUN',
          fromUserId: 'YPpvaYdTzIKwHfpJKeEvqkhnQikz1u1hmrLGikAHtTS1n0UxPlFAj',
          amount: 18.6494,
          createdAt: '1943-08-22T16:40:12.468Z',
          toMerchantId: 'NDnElTqaEXknxHGpcmvPlhxiCzdVsxNlhzJSPIzCNkCnIgWyzoMSlnoNoquDBtpG'
        },
        {
          /**
           * data with incorrect amount
           */
          id: 'ERTgeDEfjvZbJXJZkvLFaVVXdGnmBIDxzBSGykWseiCeOeJP1qFcGTXfNGGvUOUN',
          fromUserId: 'YPpvaYdTzIKwHfpJKeEvqkhnQikz1u1hmrLGikAHtTS1n0UxPlFAjfjgsvOnMlZa',
          amount: 'a 3',
          createdAt: '1943-08-22T16:40:12.468Z',
          toMerchantId: 'NDnElTqaEXknxHGpcmvPlhxiCzdVsxNlhzJSPIzCNkCnIgWyzoMSlnoNoquDBtpG'
        },
        {
          /**
           * data with incorrect createdAt
           */
          id: 'ERTgeDEfjvZbJXJZkvLFaVVXdGnmBIDxzBSGykWseiCeOeJP1qFcGTXfNGGvUOUN',
          fromUserId: 'YPpvaYdTzIKwHfpJKeEvqkhnQikz1u1hmrLGikAHtTS1n0UxPlFAjfjgsvOnMlZa',
          amount: 18.6494,
          createdAt: '1943-08-32T16:40:12.468Z',
          toMerchantId: 'NDnElTqaEXknxHGpcmvPlhxiCzdVsxNlhzJSPIzCNkCnIgWyzoMSlnoNoquDBtpG'
        },
        {
          /**
           * data with incorrect toMerchantId
           */
          id: 'ERTgeDEfjvZbJXJZkvLFaVVXdGnmBIDxzBSGykWseiCeOeJP1qFcGTXfNGGvUOUN',
          fromUserId: 'YPpvaYdTzIKwHfpJKeEvqkhnQikz1u1hmrLGikAHtTS1n0UxPlFAjfjgsvOnMlZa',
          amount: 18.6494,
          createdAt: '1943-08-22T16:40:12.468Z',
          toMerchantId: 'NDnElTpG'
        }
      ]

    });

    it('should throw InvalidInputError', function() {

      userInputArr.forEach(function(userInput) {
        expect(function() {
          validatePayment(userInput)
        })
          .to.throw(InvalidInputError);
      });
 
    });
  });
});