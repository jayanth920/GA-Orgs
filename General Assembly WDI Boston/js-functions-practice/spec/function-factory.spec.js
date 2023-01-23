'use strict'

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)

const expect = chai.expect

const args = require('../lib/function-factory')

describe('function factory', function () {
  it('returns a function that returns sum of args', function () {
    const newFunc = args.additionFactory(3, 4)
    expect(newFunc()).to.equal(7)
  })
})

// To attempt the bonus questions, change `xdescribe` to `describe`
// Then run the tests again.
xdescribe('bonus: handle bad inputs', function () {
  describe('function factory', function () {
    it("returns 'Error: Missing Arguments' when called without arguments", function () {
      expect(args.additionFactory)
        .to.throw('Missing Arguments')
    })
  })
})
