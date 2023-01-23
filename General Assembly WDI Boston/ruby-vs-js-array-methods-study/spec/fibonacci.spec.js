'use strict'

// Allow chai syntax like `expect(foo).to.be.ok;`
// jshint -W030

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)

const expect = chai.expect

const fibResults = require('../lib/fibonacci.js')

describe('subFibs', function () {
  it('is the sum of the fibs array', function () {
    expect(fibResults.sumFibs).to.equal(88)
  })
})

describe('prodFibs', function () {
  it('is the product of the fibs array excluding 0', function () {
    expect(fibResults.prodFibs).to.equal(2227680)
  })
})

describe('sumOdd', function () {
  it('is the sum of the odd numbers in the fibs array', function () {
    expect(fibResults.sumOdd).to.equal(44)
  })
})

describe('prodEven', function () {
  it('is the product of the even numbers in the fibs array excluding 0', function () {
    expect(fibResults.prodEven).to.equal(544)
  })
})
