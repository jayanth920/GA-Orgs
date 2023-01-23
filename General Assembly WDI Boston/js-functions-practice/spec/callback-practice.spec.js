'use strict'

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)

const expect = chai.expect

const args = require('../lib/callback-practice')

describe('waitThenRun', function () {
  it('runs a callback with no arguments after 1 second', function (done) {
    let callbackWasRun = false
    args.waitThenRun(function () {
      callbackWasRun = true
    })

    setTimeout(function () {
      expect(callbackWasRun).to.equal(true)
      done()
    }, 1500)
  })

  it('does not run the callback with no arguments before 1 second (this test starts as passing and should remain passing)', function (done) {
    let callbackWasRun = false
    args.waitThenRun(function () {
      callbackWasRun = true
    })

    setTimeout(function () {
      expect(callbackWasRun).to.equal(false)
      done()
    }, 500)
  })
})

describe('runWithNull', function () {
  it('runs a callback with a `null` argument', function () {
    const value = args.runWithNull(function (arg) {
      return arg
    })
    expect(value).to.equal(null)
  })
})

// To attempt the bonus questions, change `xdescribe` to `describe`
// Then run the tests again.
xdescribe('bonus: handle bad inputs', function () {
  describe('waitThenRun', function () {
    it("returns 'Error: Missing Arguments' when called without arguments", function () {
      expect(args.waitThenRun)
        .to.throw('Missing Arguments')
    })
  })

  describe('runWithNull', function () {
    it("returns 'Error: Missing Arguments' when called without arguments", function () {
      expect(args.runWithNull)
        .to.throw('Missing Arguments')
    })
  })
})
