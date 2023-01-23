// method to create word object and count frequency of words in a sentence
const findWordFreq = (sentence) => {
  // empty object that we'll return
  const wordCounter = {}
  // turn the sentence into an array of the words
  // lowercase all the words
  const sentenceToArray = sentence.toLowerCase().split(' ')
  // loop over the array
  sentenceToArray.forEach((word) => {
    // if the word isn't already in our wordCounter object as a key, create it and give it a value of 1
    if(!wordCounter[word]) {
      wordCounter[word] = 1
    } else {
      // else if the word is already in our wordCounter object, increment it by 1
      wordCounter[word]++
    }
  })
  // return the object
  return wordCounter
}

// method to find all the words with the highest frequency
const findHighestFreq = (wordsObj) => {
  // default empty variables to increment/replace
  let highestValue = 0
  let highestWords = []
  // loop through the words object to find the highest frequency
  for(let word in wordsObj) {
    // if the current word has a higher value than the current highest value
    if(wordsObj[word] > highestValue) {
      // set the current word's value as the new highest value
      highestValue = wordsObj[word]
    }
  }
  // loop through the words object again to find which words match the highest frequency
  for(let word in wordsObj) {
    // if the value of the current word matches the highest value
    if(wordsObj[word] === highestValue) {
      // push the word as a key-value pair into the empty array
      highestWords.push({ [word]: highestValue } )
    }
  }
  // return the array of objects
  return highestWords
}

// testing
const testSentence = findWordFreq('The quick brown fox jumped over the lazy lazy dog')
const testHighest = findHighestFreq(testSentence)

console.log(testSentence)
console.log('----------')
console.log(testHighest)
