#!/usr/bin/env node
'use strict'

// a function that will be passed to another function as an argument
const isTheCallback = function () {
  console.log('in isTheCallback')
}

// a function that accepts a function as an argument and then invokes it
const takesCallback = function (callback) {
  callback()
}

// running the function and passing it the callback
takesCallback(isTheCallback)

// running the function and passing it an anonymous function
takesCallback(function () {
  console.log('in anonymous function')
})

// running the function and passing it an anonymous fat arrow function
takesCallback(() => {
  console.log('in anonymous arrow function')
})
