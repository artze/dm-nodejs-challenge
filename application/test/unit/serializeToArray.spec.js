const User = require('../../models/User');
const Payment = require('../../models/Payment');
const Merchant = require('../../models/Merchant');

describe('Serialize objects to array of values', function() {
  
  describe('serialize User instance', function() {
    let user;
    
    before(function() {
      user = new User(
        'fyPZYzsBthguAgbMZkAAukWQWASmtOyPwVLw11fQATpxcOgpgUZyZAiyjHWimIcG',
        'user',
        'Arturo_Tremblay',
        'Charlotte',
        'Bradtke',
        'Garry_Waelchi@yahoo.com'
      );
    })

    it('should return array with values in correct order', function() {
      expect(user.serializeToArray()).to.deep.equal([
        'user',
        'fyPZYzsBthguAgbMZkAAukWQWASmtOyPwVLw11fQATpxcOgpgUZyZAiyjHWimIcG',
        'Arturo_Tremblay',
        'Charlotte',
        'Bradtke',
        'Garry_Waelchi@yahoo.com'
      ])
    });

  });

  describe('seriazlie Payment instance', function() {
    let payment;

    before(function() {
      payment = new Payment(
        'ERTgeDEfjvZbJXJZkvLFaVVXdGnmBIDxzBSGykWseiCeOeJP1qFcGTXfNGGvUOUN',
        'payment',
        'YPpvaYdTzIKwHfpJKeEvqkhnQikz1u1hmrLGikAHtTS1n0UxPlFAjfjgsvOnMlZa',
        'NDnElTqaEXknxHGpcmvPlhxiCzdVsxNlhzJSPIzCNkCnIgWyzoMSlnoNoquDBtpG',
        null,
        18.6494,
        '1943-08-22T16:40:12.468Z'
      );
    });

    it('should return array with values in correct order', function() {
      expect(payment.serializeToArray()).to.deep.equal([
        'payment',
        'ERTgeDEfjvZbJXJZkvLFaVVXdGnmBIDxzBSGykWseiCeOeJP1qFcGTXfNGGvUOUN',
        'YPpvaYdTzIKwHfpJKeEvqkhnQikz1u1hmrLGikAHtTS1n0UxPlFAjfjgsvOnMlZa',
        'NDnElTqaEXknxHGpcmvPlhxiCzdVsxNlhzJSPIzCNkCnIgWyzoMSlnoNoquDBtpG',
        null,
        18.6494,
        '1943-08-22T16:40:12.468Z'
      ]);
    });

  });

  describe('serialize Merchant instance', function() {
    let merchant;

    before(function() {
      merchant = new Merchant(
        'DsvCeeCDciRuicyNIATeyvE0FygMC0BvhkaffWGoIfsxVRAJLYE1dNFxXEyrZVyl',
        'merchant',
        'Haven.Adams'
      )
    })

    it('should return array with values in correct order', function() {
      expect(merchant.serializeToArray()).to.deep.equal([
        'merchant',
        'DsvCeeCDciRuicyNIATeyvE0FygMC0BvhkaffWGoIfsxVRAJLYE1dNFxXEyrZVyl',
        'Haven.Adams'
      ]);
    });

  });

});