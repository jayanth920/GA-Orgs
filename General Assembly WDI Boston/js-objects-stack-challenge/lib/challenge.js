'use strict'

// Stack constructor function.
const Stack = function Stack () {
  this._size = 0
  this._storage = {}
}

// Stack prototype method push().
Stack.prototype.push = function push (value) {
  // Implement this method so that it increments the size counter and adds the
  // value argument to the storage.

}

// Stack prototype method pop().
Stack.prototype.pop = function pop () {
  const size = this._size
  const target = size - 1
  let deleted

  // If there is data in the storage, then remove the most recently added value
  // from the storage and decrement the size counter.
  if (size) {
    deleted = this._storage[target]
    delete this._storage[target]

    this._size--
  }

  // Return the removed value.
  return deleted
}

// Do not change the following line.
module.exports = Stack
