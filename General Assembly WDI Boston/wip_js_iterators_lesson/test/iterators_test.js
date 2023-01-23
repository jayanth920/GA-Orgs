// test/iterators_test.js

// want to include
//  src/iterators.js
var Iterators = require("../src/iterators.js"),
  expect = require('chai').expect

describe('Iterators', function(){

  describe('#contains', function(){
    var myPets = ["lizard", "cat"];

    it ('should return true for an item in the list', function(){
      expect(Iterators.contains(myPets, "cat")).to.equal(true);
    });
  })

});