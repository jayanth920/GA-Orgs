'use strict'

const chai = require('chai')

const expect = chai.expect

const collections = require('../lib/collections.js')

const paragraph = // eslint-disable-line no-unused-vars
  'When in the Course of human events it becomes necessary for one ' +
  'people to dissolve the political bands which have connected them ' +
  'with another and to assume among the powers of the earth the ' +
  'separate and equal station to which the Laws of Nature and of ' +
  'Natures God entitle them a decent respect to the opinions of ' +
  'mankind requires that they should declare the causes which impel ' +
  'them to the separation'

describe('collections code along', () => {
  describe('words', () => {
    const words = paragraph.toUpperCase()

    it('has the correct length', () => {
      expect(collections.words.length).to.equal(400)
    })

    it('matches expected array', () => {
      expect(collections.words).to.deep.equal(words)
    })
  })

  describe('normalized words', () => {
    const normalizedWords = paragraph.toUpperCase().split(' ')

    it('has the correct length', () => {
      expect(collections.normalizedWords.length).to.equal(71)
    })

    it('matches expected array', () => {
      expect(collections.normalizedWords).to.deep.equal(normalizedWords)
    })
  })

  describe('word frequencies', () => {
    const wordFreqsGreaterThan1 = {
      THE: 9,
      OF: 5,
      TO: 5,
      WHICH: 3,
      THEM: 3,
      AND: 3
    }

    it('has the correct length', () => {
      expect(Object.keys(collections.wordFrequencies).length).to.equal(49)
    })

    it('matches keys to expected array', () => {
      const wordFreqs = Object.assign({}, collections.wordFrequencies)
      Object.keys(wordFreqs).forEach((key) => {
        if (wordFreqs[key] < 2) {
          delete wordFreqs[key]
        }
      })
      expect(wordFreqs).to.deep.equal(wordFreqsGreaterThan1)
    })
  })
})
