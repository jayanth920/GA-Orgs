'use strict'

const config = require('../config')

const index = function () {
  return $.ajax({
    url: config.apiOrigin + '/comments',
    method: 'GET'
  })
}

const create = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/comments',
    method: 'POST',
    data
  })
}

module.exports = {
  index,
  create
}
