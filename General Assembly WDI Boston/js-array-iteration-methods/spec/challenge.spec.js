'use strict'

// Allow chai syntax like `expect(foo).to.be.ok;`
// jshint -W030

// test set up
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)
const expect = chai.expect
const challenge = require('../bin/challenge')

// test data
const array = [1, 2, 3]

// test callbacks
const comparisonCallback = function (num) {
  return num > 2
}
const timesTwoCallback = function (num) {
  return num * 2
}
const accumulatorCallback = function (accumulator, num) {
  return accumulator + num
}

// tests
describe('myMap', function () {
  it('should return new array', function () {
    expect(challenge.myMap(array, timesTwoCallback)).to.eql([2, 4, 6])
  })
})

describe('myCount', function () {
  it('should return total', function () {
    expect(challenge.myCount(array, comparisonCallback)).to.eql(1)
  })
})

describe('myReduce', function () {
  it('should return sum', function () {
    expect(challenge.myReduce(array, accumulatorCallback)).to.eql(6)
  })
})

describe('myFilter', function () {
  it('should return filtered array', function () {
    expect(challenge.myFilter(array, comparisonCallback)).to.eql([3])
  })
})

describe('myFind', function () {
  it('should return element', function () {
    expect(challenge.myFind(array, comparisonCallback)).to.eql(3)
  })
})

describe('mySome', function () {
  it('should return boolean', function () {
    expect(challenge.mySome(array, comparisonCallback)).to.eql(true)
  })
})

describe('myEvery', function () {
  it('should return boolean', function () {
    expect(challenge.myEvery(array, comparisonCallback)).to.eql(false)
  })
})
