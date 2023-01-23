#!/usr/bin/env node
'use strict'

// Example array
const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const arr = [1, 3, 6, 9, 14]

// Find the sum of all elements in an array using anonymous arrow function
const sum = nums.reduce((prev, curr) => prev + curr)
console.log(sum)

// 1.  Find the sum of all elements in an array using named arrow function
const add = (prev, curr) => {
  // return the sum of the accumulator `prev` and the current value `curr`
  // `preve` will be the return value from the previous iteration
  return prev + curr
}

const sumsNamedFunc = arr.reduce(add)
// Loop 1: `prev` is 1 (1st value in arr), `curr` is 3 (2nd value in arr), return 4
// Loop 2: `prev` is 4 (return from loop 1), `curr` is 6 (3rd value in arr), return 10
// Loop 3: `prev` is 10 (return from loop 2), `curr` is 9 (4th value in arr), return 19
// Loop 4: `prev` is 19 (return from loop 3), `curr` is 14 (5th & last item in arr), return 33
// `sumsNamedFunc` is 33 (return from last loop)

// Find the largest of all elements in an array using anonymous arrow function
const largest = nums.reduce((prev, curr) => prev > curr ? prev : curr)
console.log(largest)

// 2.  Find the largest of all elements in an array using named arrow function
// Here, the `currentLargest` param is the same as `prev` in the above example
// and `currentItem` is the same as `curr` above.
// This named function uses a longhand if/else statement instead of the
// shorthand shown above, but is the same as the above anonymous arrow function.
const findLargest = (currentLargest, currentItem) => {
  if (currentLargest > currentItem) {
    return currentItem
  } else {
    return currentLargest
  }
}

const largestNamedFunc = arr.reduce(findLargest)
// Loop 1: `currentLargest` is 1 (1st value in arr), `currentItem` is 3 (2nd value in arr), return 3
// Loop 2: `currentLargest` is 3 (return from loop 1), `currentItem` is 6 (3rd value in arr), return 6
// Loop 3: `currentLargest` is 6 (return from loop 2), `currentItem` is 9 (4th value in arr), return 9
// Loop 4: `currentLargest` is 9 (return from loop 3), `currentItem` is 14 (5th & last item in arr), return 14
// `largestNamedFunc` is 14 (return from last loop)

// 3.  Find the total number of days in fridge for all the food in the fridge
// using anonymous arrow function
// start the count at 0
const fridge =
[
  { name: 'Carrots', daysInFridge: 32 },
  { name: 'Onions', daysInFridge: 23 },
  { name: 'Bell Peppers', daysInFridge: 16 },
  { name: 'Soda', daysInFridge: 7 },
  { name: 'Pizza', daysInFridge: 4 },
  { name: 'Cake', daysInFridge: 3 }
]

const totalDaysInFridge = fridge.reduce((prev, curr) => {
  return prev + curr.daysInFridge
}, 0)
// Loop 1: `prev` is 0 (given value as 2nd argument after callback function), `curr` is the first object in `fridge`, return 32
// Loop 2: `prev` is 32 (return from loop 1), `curr` is 2nd object in `fridge`, return 55
// Loop 3: `prev` is 55 (return from loop 2), `curr` is 3rd object in `fridge`, return 71
// Loop 4: `prev` is 71 (return from loop 3), `curr` is 4th object in `fridge`, return 78
// Loop 5: `prev` is 78 (return from loop 3), `curr` is 5th object in `fridge`, return 82
// Loop 6: `prev` is 82 (return from loop 3), `curr` is 6th & last object in `fridge`, return 85
// `totalDaysInFridge` is 85 (return from last loop)
