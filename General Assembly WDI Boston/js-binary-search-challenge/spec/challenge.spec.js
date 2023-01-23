'use strict'

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)

const expect = chai.expect

const challenge = require('../lib/challenge')

const logOf = (numbers) => {
  return Math.ceil(Math.log2(numbers.length))
}

describe('Binary Search for 8 in even numbers 2 through 20', function () {
  let lessThanCallCounter = 0
  const evens = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
  const lessThan = (element, value) => {
    lessThanCallCounter++
    return element < value
  }
  const value = 8
  it('returns the correct value', function () {
    expect(challenge.binarySearch(evens, lessThan, value)).to.equal(8)
  })
  it('has a Big O complexity of O(log n)', function () {
    console.log('lessThanCallCounter', lessThanCallCounter)
    expect(lessThanCallCounter).to.be.at.most(logOf(evens)).and.not.equal(0)
  })
})

describe('Binary Search for 18 in even numbers 2 through 20', function () {
  let lessThanCallCounter = 0
  const evens = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
  const lessThan = (element, value) => {
    lessThanCallCounter++
    return element < value
  }
  const value = 18
  it('returns the correct value', function () {
    expect(challenge.binarySearch(evens, lessThan, value)).to.equal(18)
  })
  it('has a Big O complexity of O(log n)', function () {
    console.log('lessThanCallCounter', lessThanCallCounter)
    expect(lessThanCallCounter).to.be.at.most(logOf(evens)).and.not.equal(0)
  })
})

describe('Binary Search for 7 in odd numbers 1 through 19', function () {
  let lessThanCallCounter = 0
  const odds = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
  const lessThan = (element, value) => {
    lessThanCallCounter++
    return element < value
  }
  const value = 7
  it('returns the correct value', function () {
    expect(challenge.binarySearch(odds, lessThan, value)).to.equal(7)
  })
  it('has a Big O complexity of O(log n)', function () {
    console.log('lessThanCallCounter', lessThanCallCounter)
    expect(lessThanCallCounter).to.be.at.most(logOf(odds)).and.not.equal(0)
  })
})

describe('Binary Search for 17 in odd numbers 1 through 19', function () {
  let lessThanCallCounter = 0
  const odds = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
  const lessThan = (element, value) => {
    lessThanCallCounter++
    return element < value
  }
  const value = 17
  it('returns the correct value', function () {
    expect(challenge.binarySearch(odds, lessThan, value)).to.equal(17)
  })
  it('has a Big O complexity of O(log n)', function () {
    console.log('lessThanCallCounter', lessThanCallCounter)
    expect(lessThanCallCounter).to.be.at.most(logOf(odds)).and.not.equal(0)
  })
})

describe('Binary Search for 29 in numbers 1 through 31', function () {
  let lessThanCallCounter = 0
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
  const lessThan = (element, value) => {
    lessThanCallCounter++
    return element < value
  }
  const value = 29
  it('returns the correct value', function () {
    expect(challenge.binarySearch(numbers, lessThan, value)).to.equal(29)
  })
  it('has a Big O complexity of O(log n)', function () {
    console.log('lessThanCallCounter', lessThanCallCounter)
    expect(lessThanCallCounter).to.be.at.most(logOf(numbers)).and.not.equal(0)
  })
})

describe('Binary Search for 4 in numbers 1 through 30', function () {
  let lessThanCallCounter = 0
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
  const lessThan = (element, value) => {
    lessThanCallCounter++
    return element < value
  }
  const value = 4
  it('returns the correct value', function () {
    expect(challenge.binarySearch(numbers, lessThan, value)).to.equal(4)
  })
  it('has a Big O complexity of O(log n)', function () {
    console.log('lessThanCallCounter', lessThanCallCounter)
    expect(lessThanCallCounter).to.be.at.most(logOf(numbers)).and.not.equal(0)
  })
})
