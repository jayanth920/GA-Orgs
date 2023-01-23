'use strict'

const booksApi = require('./api.js')
const booksUi = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

// get in the habit of naming your handlers, it eases debugging.
//
// also, follow a convention for handlers. here, I name my handler
// beginning with 'on' to denote that it is done when the GET /books
// button is clicked

const onGetBooks = function (event) {
  event.preventDefault()
  booksApi.index()
    .then(booksUi.onSuccess)
    .catch(booksUi.onError)
}

const onGetBook = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const book = data.book
  if (book.id.length !== 0) {
    booksApi.show(book.id)
      .then(booksUi.onSuccess)
      .catch(booksUi.onError)
  } else {
    console.log('Please provide a book id!')
  }
}

const onDeleteBook = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const book = data.book
  if (book.id.length !== 0) {
    booksApi.destroy(book.id)
      .then(booksUi.onDeleteSuccess)
      .catch(booksUi.onError)
  } else {
    console.log('Please provide a book id!')
  }
}

const onUpdateBook = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const book = data.book
  if (book.title === '') {
    // alert('title required')
    $('#content').html('<p>Title is required</p>')
    $('#content').css('background-color', 'red')
    return false
  }
  if (book.id.length !== 0) {
    booksApi.update(data)
      .then(booksUi.onUpdateSuccess)
      .catch(booksUi.onError)
  } else {
    console.log('Please provide a book id!')
  }
}

module.exports = {
  onGetBooks,
  onGetBook,
  onDeleteBook,
  onUpdateBook
}
