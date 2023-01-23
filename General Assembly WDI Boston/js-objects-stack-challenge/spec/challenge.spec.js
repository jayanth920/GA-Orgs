'use strict'

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)

const expect = chai.expect

const Stack = require('../lib/challenge')

describe('Requirements', () => {
  beforeEach(() => {
    this.stack = new Stack()
  })

  describe('Stack', () => {
    it('creates an instance of Stack', () => {
      expect(this.stack).to.be.an.instanceof(Stack)
    })

    it('creates an empty stack', () => {
      expect(this.stack._storage).to.deep.equal({})
    })
  })

  describe('Stack.prototype.push()', () => {
    it('takes an argument and adds it to the stack', () => {
      const pushed = { foo: 'bar' }

      this.stack.push(pushed)

      expect(this.stack._storage).to.deep.equal({ '0': pushed })
    })
  })

  describe('Stack.prototype.pop()', () => {
    it('returns undefined if the stack is empty', () => {
      expect(this.stack.pop()).to.be.undefined  // eslint-disable-line
    })

    it('removes the most recently added element from the stack', () => {
      this.stack._size = 1
      this.stack._storage = { '0': 'a' }
      this.stack.pop()
      const emptyObject = {}

      expect(this.stack._storage).to.deep.equal(emptyObject)
    })

    it('returns the element that was removed from the stack', () => {
      this.stack._size = 3
      this.stack._storage = { '0': 'a', '1': 'b', '2': 'c' }

      expect(this.stack.pop()).to.equal('c')
      expect(this.stack.pop()).to.equal('b')
      expect(this.stack.pop()).to.equal('a')
    })
  })
})

describe('Bonuses', () => {
  describe('Stack', () => {
    it('creates a stack containing the arguments as elements', () => {
      const stack = new Stack('a', 'b', 'c')
      const storage = { '0': 'a', '1': 'b', '2': 'c' }

      expect(stack._storage).to.deep.equal(storage)
    })
  })

  describe('Stack.prototype.push()', () => {
    it('returns the stack', () => {
      const stack = new Stack()
      const pushed = { foo: 'bar' }

      stack.push(pushed)

      expect(stack.push(pushed)).to.deep.equal(stack)
    })
  })
})
