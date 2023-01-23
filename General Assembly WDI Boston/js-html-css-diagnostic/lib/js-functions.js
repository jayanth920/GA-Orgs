'use strict'

// You may use for loops and/or array iteration methods to complete this
// diagnostic.

// Make sure to run `grunt test` early and often!!!

// Question 1
// Write a function that takes someones first name and last name
// and returns their full name. Don't forget the space between the
// first name and last name!
const fullName = function (firstName, lastName) {
    /* your response here */
}

// Question 2
// Write a function that takes in a number and returns true
// or false if the number is greater than 5.
const greaterThan = function (num) {
    /* your response here */
}

// Question 3
// Write a function that takes an array of numbers
// and returns the sum of that set
// **Note:** This diagnostic is testing your knowledge of functions, **not** array
// iteration methods. Feel free to solve this problem with any type of loop.
const sum = function (numbers) {
    /* your response here */
}

// Question 4
// Write a function that takes an array of numbers
// and returns the smallest number from that array.
const min = function (numbers) {
    /* your response here */
}

// Question 5
// Write a function that takes an array and a string and returns an array of all
// the elements in the array which are NOT equal to that string.

// Example: stringRemover(['snap', 'crackle', 'pop'], 'snap') should return
// ['crackle', 'pop']
const stringRemover = function (strings, removalString) {
    /* your response here */
}

// Used by testing
module.exports = {
    fullName,
    greaterThan,
    sum,
    stringRemover,
    min
}
