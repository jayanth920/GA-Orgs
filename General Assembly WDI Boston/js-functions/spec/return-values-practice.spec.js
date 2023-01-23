'use strict'

const chai = require('chai')
const expect = chai.expect

const outs = require('../lib/return-values-practice.js')

describe('counterFactory', function () {
  it('returns a function', function () {
    expect(outs.counterFactory(10)).to.be.a('function')
  })

  describe('the returned function', function () {
    it('returns a number', function () {
      expect(outs.counterFactory(2)()).to.be.a('number')
    })

    it('starts at zero', function () {
      expect(outs.counterFactory(2)()).to.eq(0)
    })

    it('increments the counter by the correct amount', function () {
      const countBy7 = outs.counterFactory(7)
      expect(countBy7()).to.eq(0)
      expect(countBy7()).to.eq(7)
      expect(countBy7()).to.eq(14)
    })
  })
})
