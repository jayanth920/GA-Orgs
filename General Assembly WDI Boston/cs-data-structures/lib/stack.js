'use strict'

const { LinkedList } = require('./linked-list')

const Stack = function () {
  this._items = new LinkedList()
}

module.exports = Stack
