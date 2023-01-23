'use strict'

// O(n) using a single loop and an object to keep track of duplicates
const hasDuplicatesFaster = array => {
  // Keep track of each element we've seen in an object or set for O(1) lookup time
  const knownElements = {}

  // O(n) For each element in the array
  for (let i = 0; i < array.length; i++) {
    const currentElement = array[i]

    // O(1) if the element has already been added to our `knownElements` object
    if (knownElements.hasOwnProperty(currentElement)) {
      // then it is a duplicate, so return true
      return true
    }

    // O(1) Add the current element to our `knownElements` object
    knownElements[currentElement] = currentElement
  }

  // Return false if no duplicate elements were found in the array.
  return false
}

const duplicates = ['cat', 'dog', 'elephant', 'dog']
const noDuplicates = ['apple', 'banana', 'cherry']

console.log(`${duplicates} has duplicates:`, hasDuplicatesFaster(duplicates))
console.log(`${noDuplicates} has duplicates:`, hasDuplicatesFaster(noDuplicates))
