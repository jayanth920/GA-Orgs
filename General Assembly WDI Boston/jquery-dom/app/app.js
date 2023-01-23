'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  // Element with the id of red-and-green should be green when mouse is not over element
  $('#red-and-green').on('someevent', function (event) {
    // your code here
  })

  // Element with the id of red-and-green should be red when mouse traverses over the element
  $('#red-and-green').on('someevent', function (event) {
    // your code here
  })

  // Element with the id of change-my-text should change it's text value when it's clicked
  $('#change-my-text').on('someevent', function (event) {
    // your code here
  })

  // Element with the id of disappear-me should fade out when the mouse traverses over the element
  $('#disappear-me').on('someevent', function (event) {
    // your code here
  })

  // Set the value of special-input with a new value
  $('#input-set').on('someevent', function (event) {
    // your code here
  })

  // Get the value from special-input
  $('#input-get').on('someevent', function (event) {
    // your code here
  })
})
