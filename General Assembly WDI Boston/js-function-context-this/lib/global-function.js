'use strict'

const printThis = function () {
  console.log('In a function in the global scope, this is:', this)
}

printThis()
