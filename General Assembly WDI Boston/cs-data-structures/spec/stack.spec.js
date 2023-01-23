'use strict'

// Allow chai syntax like `expect(foo).to.be.ok;`
// jshint -W030

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)

const expect = chai.expect

const Stack = require('../lib/stack')

describe('Stack', function () {
  describe('a new stack', function () {
    const stack = new Stack()
    it('is empty', function () {
      expect(stack.isEmpty()).to.be.true
    })
  })

  describe('when values are pushed to the stack', function () {
    const stack = new Stack()
    const valueOne = 'first'
    const valueTwo = 'next'

    const setup = function () {
      expect(stack.push).to.be.a('function')
      stack.push(valueOne)
      stack.push(valueTwo)
    }

    it('contains the values', function () {
      setup()
      expect(stack._items.head.value).to.eql(valueTwo)
      expect(stack._items.tail.value).to.eql(valueOne)
    })

    it('can return last value when popped', function () {
      setup()
      expect(stack.pop()).to.eql(valueTwo)
    })
  })
})
