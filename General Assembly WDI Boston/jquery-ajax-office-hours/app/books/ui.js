const onIndexSuccess = function (response) {
  // empty content element
  $('#content').html('')

  // loop through API response data
  response.books.forEach(book => {
    // build HTML element with data
    const bookHTML = (`
      <h4>Title: ${book.title}</h4>
      <p>Author: ${book.author}</p>
      <p>ID: ${book.id}</p>
      <br>
    `)

    // append bookHTML to content
    $('#content').append(bookHTML)
  })
}

const onShowSuccess = function (response) {
  const bookHTML = (`
    <h4>Title: ${response.book.title}</h4>
    <p>Author: ${response.book.author}</p>
    <br>
  `)

  $('#content').html(bookHTML)

  // reset form
  $('#books-show').trigger('reset')
}

const onDestroySuccess = function () {
  $('#content').html('Book successfully deleted!')

  // reset form
  $('#books-delete').trigger('reset')
}

const onUpdateSuccess = function (response) {
  $('#content').html('You successfully updated the book')
  // reset form
  $('#books-update').trigger('reset')
}

const onCreateSuccess = function () {
  $('#content').html('You created a new book!')
  // reset form
  $('#books-create').trigger('reset')
}

const onFailure = function (response) {
  // log the error
  console.error(response)

  // display error to user
  $('#content').html('Something went wrong, please try again.')
}

module.exports = {
  onIndexSuccess,
  onShowSuccess,
  onDestroySuccess,
  onUpdateSuccess,
  onCreateSuccess,
  onFailure
}
