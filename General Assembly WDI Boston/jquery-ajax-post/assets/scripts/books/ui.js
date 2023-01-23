'use strict'

const onSuccess = function (data) {
  console.log('data is ', data)
  if (!data) {
    console.warn('Either you deleted something, or something went wrong.')
  } else if (data.book) {
    console.log(data.book)
  } else {
    console.table(data.books)
  }
}

const onError = function (response) {
  console.error(response)
}

const onDeleteSuccess = function () {
  console.log('Book was successfully deleted.')
}

const onUpdateSuccess = function () {
  console.log('You successfully updated the book!')
  $('#content').html('')
}

module.exports = {
  onSuccess,
  onError,
  onDeleteSuccess,
  onUpdateSuccess
}
