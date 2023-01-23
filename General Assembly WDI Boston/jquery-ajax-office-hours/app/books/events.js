const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../lib/get-form-fields.js')

const onGetBooks = function (event) {
  // prevent default submit action
  event.preventDefault()

  // make API call
  api.index()
    // if API call is successful then
    .then(ui.onIndexSuccess)
    // if API call fails then
    .catch(ui.onError)
}

const onGetBook = function (event) {
  event.preventDefault()

  // create js object from user form data
  const data = getFormFields(event.target)

  // input validation
  if (data.book.id === '') {
    $('#content').html('<p>ID is required</p>')
  } else {
    // make API call with data
    api.show(data)
      .then(ui.onShowSuccess)
      .catch(ui.onError)
  }
}

const onDeleteBook = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)

  // input validation
  if (data.book.id === '') {
    $('#content').html('<p>ID is required</p>')
  } else {
    api.destroy(data)
      .then(ui.onDestroySuccess)
      .catch(ui.onError)
  }
}

const onUpdateBook = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  // input validation
  if (data.book.title === '') {
    $('#content').html('<p>Title is required</p>')
  } else if (data.book.author === '') {
    $('#content').html('<p>Author is required</p>')
  } else if (data.book.id === '') {
    $('#content').html('<p>ID is required</p>')
  } else {
    api.update(data)
      .then(ui.onUpdateSuccess)
      .catch(ui.onError)
  }
}

const onCreateBook = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  // input validation
  if (data.book.title === '') {
    $('#content').html('<p>Title is required</p>')
  } else if (data.book.author === '') {
    $('#content').html('<p>Author is required</p>')
  } else {
    api.create(data)
      .then(ui.onCreateSuccess)
      .catch(ui.onError)
  }
}

module.exports = {
  onGetBooks,
  onGetBook,
  onDeleteBook,
  onUpdateBook,
  onCreateBook
}
