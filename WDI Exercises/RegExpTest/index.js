var Validator = require('./EmailValidator');

var userInputEmailValidator = new Validator('andy@duf.net');
console.log(userInputEmailValidator.validate());
