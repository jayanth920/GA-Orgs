'use strict'

const word = 'star'

const reverseString = str => {
  if (str === '') {
    // console.log('???')
    return ''
  } else {
    const firstCharacter = str.charAt(0)
    const remainingString = str.substr(1)

    // console.log(`${firstCharacter}: ${str} (string passed in)`)
    const returnValue = reverseString(remainingString) + firstCharacter
    // console.log(`${firstCharacter}: ${returnValue} (returned string)`)

    return returnValue
  }
}

reverseString(word)
