'use strict'

const paragraph = // eslint-disable-line no-unused-vars
  'When in the Course of human events it becomes necessary for one ' +
  'people to dissolve the political bands which have connected them ' +
  'with another and to assume among the powers of the earth the ' +
  'separate and equal station to which the Laws of Nature and of ' +
  'Natures God entitle them a decent respect to the opinions of ' +
  'mankind requires that they should declare the causes which impel ' +
  'them to the separation'

// 1. Write a function that takes a string argument splits it into an array of
// normalized words (uppercase strings) and returns that
// array.
const getNormalizedWords = function (words) {
  // your code here
}
const normalizedWords = getNormalizedWords(paragraph)
console.log('Normalized words result is ', normalizedWords)

// 2. Write a function that takes a string argument and returns an array of
// unique normalized words.
const getUniqueWords = function (words) {
  // your code here
}
const uniqueWords = getUniqueWords(paragraph)
console.log('Unique words result is ', uniqueWords)

// 3. Write a function that returns the count of words in a string. Provide the
// *option* to count unique words instead of total words. Unique words should be
// taken to mean the set of words that appear at least once (with no repeats).
// For example, the string "bird bird word" contains two unique words: "bird"
// and "word".  Don't forget to reuse functions wherever possible!
const wordCount = function () {
  // your code here
}
const paragraphWordCount = wordCount(paragraph)
console.log('paragraphWordCount result is ', paragraphWordCount)

module.exports = {
  getNormalizedWords,
  getUniqueWords,
  wordCount
}
