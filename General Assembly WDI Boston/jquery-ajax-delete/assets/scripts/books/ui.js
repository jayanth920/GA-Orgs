'use strict'

const onIndexSuccess = function (data) {
  console.table(data.books)

  // clear content section
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

const onShowSuccess = function (data) {
  console.log(data.book)
  const bookHTML = (`
    <h4>Title: ${data.book.title}</h4>
    <p>Author: ${data.book.author}</p>
    <p>ID: ${data.book.id}</p>
    <br>
  `)

  $('#content').html(bookHTML)
}

const onError = function (err) {
  console.error(err)

  $('#message').text('Something went wrong with that last request!')

  // 5 seconds after the message appears, clear it
  setTimeout(() => $('#message').text(''), 5000)
}

module.exports = {
  onIndexSuccess,
  onShowSuccess,
  onError
}
