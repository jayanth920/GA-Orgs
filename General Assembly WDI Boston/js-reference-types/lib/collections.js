'use strict'

const paragraph = // eslint-disable-line no-unused-vars
  'When in the Course of human events it becomes necessary for one ' +
  'people to dissolve the political bands which have connected them ' +
  'with another and to assume among the powers of the earth the ' +
  'separate and equal station to which the Laws of Nature and of ' +
  'Natures God entitle them a decent respect to the opinions of ' +
  'mankind requires that they should declare the causes which impel ' +
  'them to the separation'

// The paragraph normalized (all uppercase)
let words

// The paragraph split into an array of words
const normalizedWords = []

// The words as keys and the values the count of each word
const wordFrequencies = {}

module.exports = {
  paragraph,
  words,
  normalizedWords,
  wordFrequencies
}
