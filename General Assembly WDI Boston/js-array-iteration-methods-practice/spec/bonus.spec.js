'use strict'

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)

const expect = chai.expect

const bonus = require('../lib/bonus')

const Assertion = chai.Assertion

describe.skip('Bonus:', function () {
  describe('Question One: forEach', function () {
    it('returns sum of the `pageCount` of all of the `books`', function () {
      expect(bonus.pageCountTotal).to.equal(2219)
    })
  })

  describe('Question Two: map', function () {
    it('returns an array with each book title in uppercase', function () {
      const uppercaseTitles = [ 'CATCH-22', 'CLEAN CODE', 'GAME OF THRONES',
                                'FRANKENSTEIN', '1984' ]
      expect(bonus.uppercaseTitles).to.deep.equal(uppercaseTitles)
    })
  })

  describe('Question Three: filter', function () {
    it('returns an array with only the books published in 1980 or after', function () {
      const booksAfter1980 = [ { title: 'Clean Code', yearPublished: 2008, pageCount: 464 },
                               { title: 'Game of Thrones', yearPublished: 1996, pageCount: 694 } ]
      expect(bonus.booksAfter1980).to.deep.equal(booksAfter1980)
    })
  })

  describe('Question Four: findIndex', function () {
    it('returns the index of the first book with 300 pages or less', function () {
      expect(bonus.bookLessThan300PagesIndex).to.equal(3)
    })
  })

  describe('Question Five: find', function () {
    it('returns the value of the first book with 300 pages or less', function () {
      const book = { title: 'Frankenstein', yearPublished: 1818, pageCount: 280 }
      expect(bonus.bookLessThan300Pages).to.deep.equal(book)
    })
  })

  describe('Question Six: some', function () {
    it('returns true if some (any) book has 500 pages or more', function () {
      expect(bonus.isPageCountOver500).to.equal(true)
    })
  })

  describe('Question Seven: every', function () {
    it('returns true if every score was published in the year 1800 or after', function () {
      expect(bonus.isEveryBookAfter1800).to.equal(true)
    })
  })
})
