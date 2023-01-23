'use strict'

const config = require('../config.js')

const index = function () {
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

module.exports = {
  index,
  show
}
