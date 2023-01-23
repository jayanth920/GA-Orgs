const config = require('./../config')

const index = function () {
  // make GET request to /books
  return $.ajax({
    url: config.apiUrl + '/books',
    method: 'GET'
  })
}

const show = function (data) {
  return $.ajax({
    url: config.apiUrl + '/books/' + data.book.id,
    method: 'GET'
  })
}

const destroy = function (data) {
  return $.ajax({
    url: config.apiUrl + '/books/' + data.book.id,
    method: 'DELETE'
  })
}

const update = function (data) {
  return $.ajax({
    url: config.apiUrl + '/books/' + data.book.id,
    method: 'PATCH',
    data
  })
}

const create = function (data) {
  return $.ajax({
    url: config.apiUrl + '/books',
    method: 'POST',
    data
  })
}

module.exports = {
  index,
  show,
  destroy,
  update,
  create
}
