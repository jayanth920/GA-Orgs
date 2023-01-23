'use strict'

const { LinkedList } = require('./linked-list')

const Queue = function () {
  this._items = new LinkedList()
}

module.exports = Queue
