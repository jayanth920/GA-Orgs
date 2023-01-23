var assert = require("assert");


describe('Friend', function(){
  describe('#name', function(){
    beforeEach(function(){
      var friend = {name: "jon", age: 11};
    })
    afterEach(function(){

    })

    it('can drink in 5 years', function() {
      friend.age += 5;
      assert(friend.age >= 21, 'friend can drink');
    })

    it('should have name john', function(){
      assert.equal(friend.name, 'john');
    })
  })
})