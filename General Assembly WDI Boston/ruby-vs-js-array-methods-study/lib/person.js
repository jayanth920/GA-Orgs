'use strict'

const Person = function (h) {
  Object.keys(h).forEach(k => this[k] = h[k])
}

Person.prototype.age = function () {
  const dob = new Date(this.dob)
  const today = new Date()
  let thisYear = today.getUTCFullYear()
  if (dob.getUTCMonth() > today.getUTCMonth() ||
      dob.getUTCMonth() === today.getUTCMonth() &&
      dob.getUTCDate() >= today.getUTCDate()) {
    thisYear -= 1
  }

  return thisYear - dob.getFullYear()
}

module.exports = Person
