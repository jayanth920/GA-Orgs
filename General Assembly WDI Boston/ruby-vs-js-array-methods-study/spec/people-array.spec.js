'use strict'

// Allow chai syntax like `expect(foo).to.be.ok;`
// jshint -W030

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)

const expect = chai.expect

const loadPeople = require('../lib/people.js')
const peopleMethods = require('../lib/people-array.js')

describe('people count', function () {
  it('accurately counts the people', function () {
    return expect(loadPeople().then(peopleMethods.count)).to.eventually.equal(2438)
  })
})

describe('count women', function () {
  it('accurately counts the women', function () {
    return expect(loadPeople().then(peopleMethods.women)).to.eventually.equal(1239)
  })
})
