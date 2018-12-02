const validateUser = require('./validateUser');

function validate(inputData) {
    inputData.forEach(function(data) {
        if (data.type === 'user') {
            validateUser(data);
        } else if (data.type === 'payment') {

        } else if (data.type === 'merchant') {

        } else {
            console.error('type error')
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