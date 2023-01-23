//require Chai's expect
var expect = require('chai').expect;
var isPalindrome = require('../js/palindrome.js');

describe('my first test weee', function(){
  it('should pass this canary test', function(){
    expect(true).to.eql(true);
  });

  it('should return true for argument mom', function(){
    expect(isPalindrome('mom')).to.be.true;
  });

  it('should return false for argument dad', function(){
    expect(isPalindrome('dad')).to.be.true;
  });

  it('should return false for argument dude', function(){
    expect(isPalindrome('dude')).to.be.false;
  });

  it('should return true for argument mom mom', function(){
    expect(isPalindrome('mom mom')).to.be.true;
  });

  it('should return false for argument dad mom', function(){
    expect(isPalindrome('dad mom')).to.be.false;
  });

  it('should return false for an empty string', function(){
    expect(isPalindrome('')).to.be.false;
  });

  it('should return false for empty string argument', function(){
    expect(isPalindrome('  ')).to.be.false;
  });

  it('should throw an exception if argument is missing', function(){
    var call = function() { isPalindrome(); };
    expect(call).to.throw(Error, 'Invalid Argument!')
  });
});
