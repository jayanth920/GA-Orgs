var validator = require('../EmailValidator');

// hey jasmine
// can i describe a suite of tests?
describe('EmailValidator Tests', function() {

  // each test... is an it
  it('should have an emailAddress to test', function() {
    var myValidator = new validator();
    expect(myValidator.emailAddress).toBe(undefined);
    var myNewerValidator = new validator('sakldlkjfsklfjfl;kfjklas');
    expect(myNewerValidator.emailAddress).toNotBe(undefined);
    var myRealValy = new validator('james@codeforcoffee.org')
    expect(myRealValy.emailAddress).toNotBe(undefined);
  });

  it('should return true or false when validating', function() {
    var myValidator = new validator();
    expect(myValidator.validate()).toBe(false);
    var myNewerValidator = new validator('sakldlkjfsklfjfl;kfjklas');
    expect(myNewerValidator.validate()).toBe(false);
    var myRealValy = new validator('james@codeforcoffee.org')
    expect(myRealValy.validate()).toBe(true);
  });

});
