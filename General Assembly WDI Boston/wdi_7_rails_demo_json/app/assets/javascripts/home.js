$(document).ready(function() {
  $('#load_books').on('click', TodoApp.requestBooks);
});

var TodoApp = TodoApp || {};

// 1 ) Show Trending tweets when a button is clicked
// 2 ) Show tweets from a user, whose name I put in a box and hit 'show user'

TodoApp.requestBooks = function(result) {
  $.ajax({
    url: '/books',
    method: 'get', // optional, defaults to GET
    data: {query: 'apple'}
  })
  .done(TodoApp.displayBooks);
}

TodoApp.displayBooks = function(result) {
  result.forEach(function(book) {
    var book_div = $('<div class=\'book\'>').text(book.title);
    var author = $('<div class=\'author\'>').text(book.author.name);
    book_div.append(author);
    $('#books').append(book_div);
  });
}
