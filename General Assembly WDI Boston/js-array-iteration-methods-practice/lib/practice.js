'use strict'

// An array of scores (like game scores)
const scores = [-50, 50, 75, 200, 350]
// An array of book titles
const titles = ['Catch-22', 'Clean Code', 'Game of Thrones', 'Frankenstein', '1984']

// 1. forEach
// 1a. Sum all of the `scores` using `forEach`. Store your result in `scoreTotal`
// Hint: Review `forEach` mdn docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

let scoreTotal = 0

// 1b. Sum all of the **positive** `scores` using `forEach`. Store your result
//     in `positiveScoreTotal`

let positiveScoreTotal = 0

// 2. map
// 2a. Create an array where each score has a bonus 100 points added to it
//     using the `map` array method. Store the result in `scoresWithBonus`
// Hint: Review `map` mdn docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

const scoresWithBonus = undefined

// 2b. Create an array where each title is in lowercase
//     using the `map` array method. Store the result in `lowercaseTitles`
// Hint: Review `toLowerCase` mdn docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase

const lowercaseTitles = undefined

// 3. filter
// 3a. Create an array with only the positive scores
//     using the `filter` array method. Store the result in `positiveScores`
// Hint: Review `filter` mdn docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
const positiveScores = undefined

// 3b. Create an array with only titles that have 10 characters or more
//     using the `filter` array method. Store the result in `longTitles`
const longTitles = undefined

// 4. findIndex
// 4a. Find the index of the first score that is 100 or over
//     using the `findIndex` array method. Store the result in `scoreOver100Index`
// Hint: Review `findIndex` mdn docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
const scoreOver100Index = undefined

// 4b. Find the index of the first title that has 10 or more characters
//     using the `findIndex` array method. Store the result in `titleOver10Index`
const titleOver10Index = undefined

// 5. find
// 5a. Find the value of the first score that is 100 or over
//     using the `find` array method. Store the result in `scoreOver100`
// Hint: Review `find` mdn docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
const scoreOver100 = undefined

// 5b. Find the value of the first title that has 10 or more characters
//     using the `find` array method. Store the result in `titleOver10`
const titleOver10 = undefined

// 6. some
// 6a. Return true if some (any) score is 300 or higher
//     using the `some` array method. Store the result in `isScoreOver300`
// Hint: Review `some` mdn docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
const isScoreOver300 = undefined

// 6b. Return true if some (any) title has 20 characters or more
//     using the `some` array method. Store the result in `isTitleLongerThan20`
const isTitleLongerThan20 = undefined

// 7. every
// 7a. Return true if every score is 50 or higher
//     using the `every` array method. Store the result in `isEveryScoreOver50`
// Hint: Review `every` mdn docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
const isEveryScoreOver50 = undefined

// 7b. Return true if every title has 3 characters or more
//     using the `every` array method. Store the result in `isEveryTitleLongerThan3`
const isEveryTitleLongerThan3 = undefined


/* !!! DO NOT MODIFY ANYTHING BELOW HERE !!! */

module.exports = {
  scoreTotal,
  positiveScoreTotal,

  scoresWithBonus,
  lowercaseTitles,

  positiveScores,
  longTitles,

  scoreOver100Index,
  titleOver10Index,

  scoreOver100,
  titleOver10,

  isScoreOver300,
  isTitleLongerThan20,

  isEveryScoreOver50,
  isEveryTitleLongerThan3
}
