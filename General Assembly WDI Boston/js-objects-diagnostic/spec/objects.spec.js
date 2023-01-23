'use strict'

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)

const expect = chai.expect

const diagnostic = require('../lib/diagnostic.js')

describe('objects', function () {
  describe('answerTwo', function () {
    it('is not undefined', function () {
      expect(diagnostic.answerTwo).to.not.equal(undefined)
    })
    it('has property "name", which is defined', function () {
      expect(diagnostic.answerTwo.name).to.not.equal(undefined)
    })
    it('has property "name" which is a string', function () {
      expect(diagnostic.answerTwo.name).to.be.a('string')
    })
    it('has property "address", which is defined', function () {
      expect(diagnostic.answerTwo.address).to.not.equal(undefined)
    })
    it('has property "address", which is a string', function () {
      expect(diagnostic.answerTwo.address).to.be.a('string')
    })
    it('has property "numberOfPets" which is defined', function () {
      expect(diagnostic.answerTwo.numberOfPets).to.not.equal(undefined)
    })
    it('has property "numberOfPets" which is a number', function () {
      expect(diagnostic.answerTwo.numberOfPets).to.be.a('number')
    })
  })

  describe('answerThree', function () {
    it('is not undefined', function () {
      expect(diagnostic.answerThree).to.not.equal(undefined)
    })
    it('has property "name", which is defined', function () {
      expect(diagnostic.answerThree.name).to.not.equal(undefined)
    })
    it('has property "name" which is a string', function () {
      expect(diagnostic.answerThree.name).to.be.a('string')
    })
    it('has property "species", which is defined', function () {
      expect(diagnostic.answerThree.species).to.not.equal(undefined)
    })
    it('has property "species" which is a string', function () {
      expect(diagnostic.answerThree.species).to.be.a('string')
    })
    it('has property "breed", which is defined', function () {
      expect(diagnostic.answerThree.breed).to.not.equal(undefined)
    })
    it('has property "breed" which is a string', function () {
      expect(diagnostic.answerThree.breed).to.be.a('string')
    })
    it('has private property "vocalization", which is defined', function () {
      expect(typeof diagnostic.answerThree._vocalization).to.equal('string')
    })
    it('has method "vocalize", which is defined', function () {
      expect(diagnostic.answerThree.vocalize).to.not.equal(undefined)
    })
    it('has method "vocalize", which returns a string', function () {
      expect(typeof diagnostic.answerThree.vocalize()).to.equal('string')
    })
  })

  const Pet = diagnostic.answerFour
  const myPet = new Pet('rex', 'dog', 'poodle', 'woof')

  describe('answerFour', function () {
    it('is a function', function () {
      expect(Pet).to.be.a('function')
    })
    it('has a property "name" which equals "rex"', function () {
      expect(myPet.name).to.equal('rex')
    })
    it('has a property "species" which equals "dog"', function () {
      expect(myPet.species).to.equal('dog')
    })
    it('has a property "breed" which equals "poodle"', function () {
      expect(myPet.breed).to.equal('poodle')
    })
    it('has a private property "vocalization" which equals "woof"', function () {
      expect(myPet._vocalization).to.equal('woof')
    })
  })

  describe('answerFive', function () {
    it('has a "vocalize" method on its prototype', function () {
      expect(Object.getPrototypeOf(myPet).vocalize).to.be.a('function')
    })
    it('has a "vocalize" method that returns "woof"', function () {
      expect(myPet.vocalize()).to.equal('woof')
    })
  })
})
