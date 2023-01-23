'use strict'

const counterFactory = function (increment) {
  let counter = 0 - increment
  return function () {
    counter += increment
    return counter
  }
}

const incrementByFive = counterFactory(5)
console.log(incrementByFive()) // should print 5
console.log(incrementByFive()) // should print 10

const additionFactory = function (num1, num2) {

}

module.exports = {
  counterFactory,
  additionFactory
}
