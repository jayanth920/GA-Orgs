'use strict';

var challenge = require('../lib/challenge.js');

console.log(challenge);

describe('objects', function(){
  describe('answerTwo', function(){
    it('is not undefined',function(){
      expect(challenge.answerTwo).toBeDefined();
    });
    it('has property "name", which is not null', function(){
      expect(challenge.answerTwo.name).toBeDefined();
      expect(challenge.answerTwo.name).not.toBeNull();
    });
    it('has property "address", which is not null', function(){
      expect(challenge.answerTwo.address).toBeDefined();
      expect(challenge.answerTwo.address).not.toBeNull();
    });
  });
  describe('answerThree', function(){
    it('is not undefined',function(){
      expect(challenge.answerThree).toBeDefined();
    });
    it('has property "name", which is not null', function(){
      expect(challenge.answerThree.name).toBeDefined();
      expect(challenge.answerThree.name).not.toBeNull();
    });
    it('has property "species", which is not null', function(){
      expect(challenge.answerThree.species).toBeDefined();
      expect(challenge.answerThree.species).not.toBeNull();
    });
    it('has property "breed", which is not null', function(){
      expect(challenge.answerThree.breed).toBeDefined();
      expect(challenge.answerThree.breed).not.toBeNull();
    });
    it('has method "makeNoise", which returns a string', function(){
      expect(challenge.answerThree.makeNoise).toBeDefined();
      expect(typeof challenge.answerThree.makeNoise()).toBe('string');
    });
  });
});
