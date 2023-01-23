'use strict'

const booksApi = require('./api.js')
const booksUi = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')

// get in the habit of naming your handlers, it eases debugging.
//
// also, follow a convention for handlers. here, I name my handler
// beginning with 'on' to denote that it is done when the GET /books
// button is clicked

const onGetBooks = function (event) {
  event.preventDefault()
  booksApi.index()
    .then(booksUi.onIndexSuccess)
    .catch(booksUi.onError)
}

const onGetBook = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)

  booksApi.show(data)
    .then(booksUi.onShowSuccess)
    .catch(booksUi.onError)
}

const onDeleteBook = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)

  booksApi.destroy(data)
    .then(booksUi.onDestroySuccess)
    .catch(booksUi.onError)
}

module.exports = {
  onGetBooks,
  onGetBook,
  onDeleteBook
}
