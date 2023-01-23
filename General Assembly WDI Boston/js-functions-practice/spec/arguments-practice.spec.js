'use strict'

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)

const expect = chai.expect

const args = require('../lib/arguments-practice')

describe('addNums', function () {
  it('adds numbers together and returns the result', function () {
    const result = args.addNums(3, 4)
    expect(result).to.equal(7)
  })
})

describe('nameChange', function () {
  it('modifies or creates the name property', function () {
    const obj = args.nameChange({}, 'Eron')
    expect(obj.name).to.equal('Eron')
  })
})

describe('removeProp', function () {
  it('removed a property', function () {
    const obj = args.removeProp({ name: 'Eron' }, 'name')
    expect(obj.name).to.equal(undefined)
  })
})

// To attempt the bonus questions, change `xdescribe` to `describe`
// Then run the tests again.
xdescribe('bonus: handle bad inputs', function () {
  describe('addNums', function () {
    it('returns \'Error: Missing Arguments\' when called without arguments', function () {
      expect(args.addNums)
        .to.throw('Missing Arguments')
    })
  })

  describe('nameChange', function () {
    it("returns 'Error: Missing Arguments' when called without arguments", function () {
      expect(args.nameChange)
        .to.throw('Missing Arguments')
    })
  })

  describe('removeProp', function () {
    it("returns 'Error: Missing Arguments' when called without arguments", function () {
      expect(args.removeProp)
        .to.throw('Missing Arguments')
    })
  })
})
