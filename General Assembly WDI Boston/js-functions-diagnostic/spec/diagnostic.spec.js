'use strict'

// Allow chai syntax like `expect(foo).to.be.ok;`
// jshint -W030

const chai = require('chai')
const expect = chai.expect

const diagnostic = require('../lib/diagnostic.js')

describe('Q1: Full name', () => {
  it('Takes in a first name and last name and returns the full name', () => {
    const result = diagnostic.fullName('Beth', 'Parnell')
    expect(result).to.equal('Beth Parnell')
  })
})

describe('Q2: Greater than', () => {
  it('Returns false if number is not greater than 5', () => {
    const result = diagnostic.greaterThan(3)
    expect(result).to.equal(false)
  })
  it('Returns true if number is greater than 5', () => {
    const result = diagnostic.greaterThan(6)
    expect(result).to.equal(true)
  })
})

describe('Q3: Summation', () => {
  it('Takes in a single element array and returns the sum of the single number', () => {
    const result = diagnostic.sum([42])
    expect(result).to.equal(42)
  })
  it('Takes in a multiple element array and returns the sum of all the numbers', () => {
    const result = diagnostic.sum([-1, -2, -3, -4, -5])
    expect(result).to.equal(-15)
  })
})

describe('Q4: Minimum', () => {
  it('Returns the minimum element in an array', () => {
    const result = diagnostic.min([-3, -2, -1, -5, -4])
    expect(result).to.equal(-5)
  })
})

describe('Q5: String remover', () => {
  it('Correctly removes a single matching string', () => {
    const arr = ['Earth', 'Water', 'Air', 'Fire']
    const expectedResult = ['Earth', 'Water', 'Fire']

    expect(diagnostic.stringRemover(arr, 'Air')).to.deep.equal(expectedResult)
  })

  it('Correctly removes multiple instances of a matching string', () => {
    const arr = ['coffee', 'beer', 'tea', 'water', 'soda', 'water']
    const expectedResult = ['coffee', 'beer', 'tea', 'soda']

    expect(diagnostic.stringRemover(arr, 'water')).to.deep.equal(expectedResult)
  })
})
