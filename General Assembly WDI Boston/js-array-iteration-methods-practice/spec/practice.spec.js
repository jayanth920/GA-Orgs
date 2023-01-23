'use strict'

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)

const expect = chai.expect

const practice = require('../lib/practice')

const Assertion = chai.Assertion

describe('Question One: forEach', function () {
  it('returns sum of all scores', function () {
    expect(practice.scoreTotal).to.equal(625)
  })

  it('returns sum of all positive scores', function () {
    expect(practice.positiveScoreTotal).to.equal(675)
  })
})

describe('Question Two: map', function () {
  it('returns score array where each score has a bonus 100 points added', function () {
    expect(practice.scoresWithBonus).to.deep.equal([ 50, 150, 175, 300, 450 ])
  })

  it('returns array where each title is in lowercase', function () {
    const lowercaseTitles = [ 'catch-22', 'clean code', 'game of thrones',
                              'frankenstein', '1984' ]
    expect(practice.lowercaseTitles).to.deep.equal(lowercaseTitles)
  })
})

describe('Question Three: filter', function () {
  it('returns score array with only the positive scores', function () {
    expect(practice.positiveScores).to.deep.equal([ 50, 75, 200, 350 ])
  })

  it('returns array with only titles that have 10 characters or more', function () {
    const longTitles = [ 'Clean Code', 'Game of Thrones', 'Frankenstein' ]
    expect(practice.longTitles).to.deep.equal(longTitles)
  })
})

describe('Question Four: findIndex', function () {
  it('returns the index of the first score that is 100 or over', function () {
    expect(practice.scoreOver100Index).to.equal(3)
  })

  it('returns the index of the first title that has 10 or more characters', function () {
    expect(practice.titleOver10Index).to.equal(1)
  })
})

describe('Question Five: find', function () {
  it('returns the value of the first score that is 100 or over', function () {
    expect(practice.scoreOver100).to.equal(200)
  })

  it('returns the value of the first title that has 10 or more characters', function () {
    expect(practice.titleOver10).to.equal('Clean Code')
  })
})

describe('Question Six: some', function () {
  it('returns true if some (any) score is 300 or higher', function () {
    expect(practice.isScoreOver300).to.equal(true)
  })

  it('returns true if some (any) title has 20 characters or more', function () {
    expect(practice.isTitleLongerThan20).to.equal(false)
  })
})

describe('Question Seven: every', function () {
  it('returns true if every score is 50 or higher', function () {
    expect(practice.isEveryScoreOver50).to.equal(false)
  })

  it('returns true if every title has 3 characters or more', function () {
    expect(practice.isEveryTitleLongerThan3).to.equal(true)
  })
})
