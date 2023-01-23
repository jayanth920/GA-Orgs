'use strict'

// Allow chai syntax like `expect(foo).to.be.ok;`
// jshint -W030

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)

const expect = chai.expect

const challenge = require('../lib/challenge')

describe('Double base palindromes', function () {
  describe('Bases 2 and 10 for numbers less than 10', function () {
    it('returns 25', function () {
      expect(challenge.doubleBasePalindromeSum(2, 10, 10)).to.equal(25)
    })
  })

  describe('Bases 2 and 10 for numbers less than 1,000,000', function () {
    // Note: there aren't any double base
    // palindromes for 2 and 10 between 585586 and 1000000
    // Using 585586 as the upper limit on a 2015 Mac Book Project
    // keeps the test run for the example string solution
    // to approximately 1500 milliseconds
    it('returns 872187', function () {
      expect(challenge.doubleBasePalindromeSum(2, 10, 585586))
        .to.equal(872187)
    })
  })
})
