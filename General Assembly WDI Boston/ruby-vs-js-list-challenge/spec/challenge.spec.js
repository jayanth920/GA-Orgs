const chai = require('chai')
const expect = chai.expect

const { all, any, none, one } = require('../lib/challenge')

const array = new Array(10).fill(null).map((_e, i) => i)

const isEven = n => n % 2 === 0
const isOne = n => n === 1
const isLessThanTen = n => n < 10
const isGreaterThanTen = n => n > 10

const predicates = [isEven, isOne, isLessThanTen, isGreaterThanTen]

describe('Requirements', () => {
  describe('any()', () => {
    it('returns false if the array is empty', () => {
      predicates.forEach(predicate => {
        expect(any([], predicate)).to.be.false
      })
    })

    it('returns false if no elements match', () => {
      expect(any(array, isGreaterThanTen)).to.be.false
    })

    it('returns true if more than one element matches', () => {
      expect(any(array, isEven)).to.be.true
    })

    it('returns true if all elements match', () => {
      expect(any(array, isLessThanTen)).to.be.true
    })
  })

  describe('none()', () => {
    it('returns true if the array is empty', () => {
      predicates.forEach(predicate => {
        expect(none([], predicate)).to.be.true
      })
    })

    it('returns true if no elements match', () => {
      expect(none(array, isGreaterThanTen)).to.be.true
    })

    it('returns false if more than one element matches', () => {
      expect(none(array, isEven)).to.be.false
    })

    it('returns false if all elements match', () => {
      expect(none(array, isLessThanTen)).to.be.false
    })
  })
})

describe('Bonuses', () => {
  describe('one()', () => {
    it('returns false if the array is empty', () => {
      predicates.forEach(predicate => {
        expect(one([], predicate)).to.be.false
      })
    })

    it('returns false if no elements match', () => {
      expect(one(array, isGreaterThanTen)).to.be.false
    })

    it('returns true if exactly one element matches', () => {
      expect(one(array, isOne)).to.be.true
    })

    it('returns false if more than one element matches', () => {
      expect(one(array, isEven)).to.be.false
    })

    it('returns false if all elements match', () => {
      expect(one(array, isLessThanTen)).to.be.false
    })
  })

  describe('all()', () => {
    it('returns true if the array is empty', () => {
      predicates.forEach(predicate => {
        expect(all([], predicate)).to.be.true
      })
    })

    it('returns false if no elements match', () => {
      expect(all(array, isGreaterThanTen)).to.be.false
    })

    it('returns false if more than one element matches', () => {
      expect(all(array, isEven)).to.be.false
    })

    it('returns true if all elements match', () => {
      expect(all(array, isLessThanTen)).to.be.true
    })
  })
})
