'use strict'

// O(n^2) Using nested loops to search for duplicates
const hasDuplicatesSlow = array => {
  // O(n) For each element in the array
  for (let i = 0; i < array.length; i++) {
    const currentElement = array[i]
    // O(n) **Loop through** every element after it, and compare it with the element from the outer loop.
    for (let j = i + 1; j < array.length; j++) {
      // Return true if the elements are the same, otherwise continue searching for a duplicate.
      if (currentElement === array[j]) {
        return true
      }
    }
  }

  // Return false if no duplicate elements were found in the array.
  return false
}

// O(n * log(n)) using a single loop and a binary search to look for duplicates
const hasDuplicatesFast = array => {
  // O(n) For each element in the array
  for (let i = 0; i < array.length; i++) {
    const currentElement = array[i]
    const startIndex = i + 1
    const stopIndex = array.length - 1
    // O(log(n)) Use **a binary search** on every element after it,
    const duplicateIndex = binarySearch(array, currentElement, startIndex, stopIndex)

    // and compare it with the element from the outer loop. Return true if we
    // found a duplicate, otherwise continue searching for a duplicate.
    if (duplicateIndex !== -1) {
      return true
    }
  }

  // Return false if no duplicate elements were found in the array.
  return false
}

// O(log(n)) A binary search helper function
const binarySearch = (arr, element, startIndex, stopIndex) => {
  let midPoint

  // 5. Repeat steps 1-4 until there are only two numbers left.
  while (midPoint !== startIndex && midPoint !== stopIndex) {
    // 1. Calculate the mid-point of the array.
    midPoint = Math.floor((startIndex + stopIndex) / 2)

    // 2. If it is the target value
    if (arr[midPoint] === element) {
      // return the midpoint and you're done.
      return midPoint
    }

    // 3. If not, ask if the mid-point is less than their chosen number.
    if (arr[midPoint] < element) {
      // 4a. If so, the answer is in the upper half-range.
      startIndex = midPoint + 1
    } else {
      // 4b. If not, the answer is in the lower half-range.
      stopIndex = midPoint - 1
    }
  }

  // If the element doesn't exist, we return -1.
  return -1
}

const duplicates = ['cat', 'dog', 'elephant', 'dog']
const noDuplicates = ['apple', 'banana', 'cherry']
console.log(`${duplicates} has duplicates:`, hasDuplicatesSlow(duplicates))
console.log(`${noDuplicates} has duplicates:`, hasDuplicatesSlow(noDuplicates))

console.log(`${duplicates} has duplicates:`, hasDuplicatesFast(duplicates))
console.log(`${noDuplicates} has duplicates:`, hasDuplicatesFast(noDuplicates))
