'use strict'

// O(n) loop through each element, incrementing the distance variable each time
const distanceSlow = (arr, start, stop) => {
  let distance = 0

  // O(n) loop through each element from start to stop
  for (let i = start; i < stop; i++) {
    distance++
  }

  return distance
}

// O(1) Instead, use the distance formula
const distanceFast = (start, stop) => {
  return stop - start
}

const animals = ['ant', 'bee', 'cat', 'dog', 'elephant']

const begin = 1
const end = 4
console.log(`distance from ${begin} to ${end} is`, distanceSlow(animals, begin, end))
console.log(`distance from ${begin} to ${end} is`, distanceFast(begin, end))
