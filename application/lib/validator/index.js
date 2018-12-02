const validateUser = require('./validateUser');
const InvalidInputError = require('./InvalidInputError')

function validate(inputData) {
    inputData.forEach(function(data) {
        if (data.type === 'user') {
            validateUser(data);
        } else if (data.type === 'payment') {

        } else if (data.type === 'merchant') {

        } else {
            throw new InvalidInputError('\'type\' field is missing or has incorrect format')
        }
    })
}

var data = [{
    id: 'fyPZYzsBthguAgbMZkAAukWQWASmtOyPwVLw11fQATpxcOgpgUZyZAiyjHWimIcG',
    userName: 'Arturo_Tremblay',
    firstName: 'Charlotte9',
    lastName: 'Bradtke',
    email: 'asdf@abc.com',
    type: 'user'
}]

validate(data)
console.log('done')