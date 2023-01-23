'use strict'

const onSuccess = function (data) {
  console.table(data.books)
  
  // clear content div, in case something was already there
  $('#content').html('')

  data.books.forEach(book => {
    const bookHTML = (`
      <h4>Title: ${book.title}</h4>
      <p>Author: ${book.author}</p>
      <p>ID: ${book.id}</p>
      <br>
    `)

    $('#content').append(bookHTML)
  })
}

const onError = function (err) {
  console.error(err)

  $('#message').text('Something went wrong with that last request!')

  // 5 seconds after the message appears, clear it
  setTimeout(() => $('#message').text(''), 5000)
}

module.exports = {
  onSuccess,
  onError
}
