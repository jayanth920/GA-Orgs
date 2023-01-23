'use strict'

const chai = require('chai')
const expect = chai.expect

const paragraph =
  'When in the Course of human events it becomes necessary for one ' +
  'people to dissolve the political bands which have connected them ' +
  'with another and to assume among the powers of the earth the ' +
  'separate and equal station to which the Laws of Nature and of ' +
  'Natures God entitle them a decent respect to the opinions of ' +
  'mankind requires that they should declare the causes which impel ' +
  'them to the separation'

const collFuncs = require('../lib/lab.js')

describe('lab', () => {
  describe('normalized words', () => {
    const normalizedWords = paragraph.split(' ').map(word => word.toUpperCase())

    it('has the correct length', () => {
      expect(collFuncs.getNormalizedWords(paragraph).length).to.equal(71)
    })

    it('matches expected array', () => {
      expect(collFuncs.getNormalizedWords(paragraph).sort())
        .to.deep.equal(normalizedWords.sort())
    })
  })

  describe('unique words', () => {
    const uniqueWords = ['WHEN', 'IN', 'THE', 'COURSE', 'OF', 'HUMAN', 'EVENTS', 'IT', 'BECOMES', 'NECESSARY', 'FOR', 'ONE', 'PEOPLE', 'TO', 'DISSOLVE', 'POLITICAL', 'BANDS', 'WHICH', 'HAVE', 'CONNECTED', 'THEM', 'WITH', 'ANOTHER', 'AND', 'ASSUME', 'AMONG', 'POWERS', 'EARTH', 'SEPARATE', 'EQUAL', 'STATION', 'LAWS', 'NATURE', 'NATURES', 'GOD', 'ENTITLE', 'A', 'DECENT', 'RESPECT', 'OPINIONS', 'MANKIND', 'REQUIRES', 'THAT', 'THEY', 'SHOULD', 'DECLARE', 'CAUSES', 'IMPEL', 'SEPARATION']

    it('has the correct length', () => {
      expect(collFuncs.getUniqueWords(paragraph).length).to.equal(49)
    })

    it('matches expected array', () => {
      expect(collFuncs.getUniqueWords(paragraph).sort())
        .to.deep.equal(uniqueWords.sort())
    })
  })

  describe('word count', () => {
    it('has the correct word count', () => {
      expect(collFuncs.wordCount(paragraph)).to.equal(71)
    })

    it('has the correct unique word count', () => {
      expect(collFuncs.wordCount(paragraph, true)).to.equal(49)
    })
  })
})
