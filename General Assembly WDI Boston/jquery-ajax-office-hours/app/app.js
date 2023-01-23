'use strict'
const events = require('./books/events')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#books-index').on('submit', events.onGetBooks)
  $('#books-show').on('submit', events.onGetBook)
  $('#books-delete').on('submit', events.onDeleteBook)
  $('#books-update').on('submit', events.onUpdateBook)
  $('#books-create').on('submit', events.onCreateBook)
})
