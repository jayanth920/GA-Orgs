// https://repl.it/@jkeohan/SEI-Arrays-Methods-Review

const nums = [1,2,3,4,5,11,2,5]
let multiDims = ['a',['b']]
console.log('this is multiDims', multiDims.indexOf(['b']))

// .length => property
// .indexOf() => method

// INDEXOF
// indexOf look for an element
// and return it's index position
console.log('this is indexOf', nums.indexOf(11,5))
// first num is the element were looking for
// the second num the position to start at
// nums.indexOf(5,5)
// if element is not in array..-1 is returned
// nums.indexOf('a')

// PUSH
// adds an element to the END of the array
nums.push(6)

// POP
// removes & returns the element from the END of the array
let lastElem =  nums.pop()
lastElem

// REVERSE
let rev = nums.reverse()
rev

// UNSHIFT
// add elements to the begining of array
nums.unshift(0)
nums

// SHIFT
// removes &  returns the element from the BEGINNING of array
let firstElem  =  nums.shift()
firstElem

// SORT
// sort an array
let sorted =  nums.sort()
sorted

// SLICE
// returns a copy  of the array
let copy =  nums.slice()
copy.push(6)
copy

// it also return elements based on position
let firstThree  = nums.slice(2,3)
firstThree

// SPLICE
// returns and/or mutates the array
let firstTwo = nums.splice(0,2)
firstTwo
