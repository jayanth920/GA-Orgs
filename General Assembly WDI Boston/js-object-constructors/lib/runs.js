'use strict'

// move code out of this user object and into the contructor functions at the
// bottom of this file.
const user = {
  name: 'Christopher Robin',
  email: 'wdi@christopherRobin.com',
  runs: [
    {
      date: '2017-05-25 15:00',
      distance: 1200,
      timeTaken: 600
    },
    {
      date: '2017-05-25 15:00',
      distance: 1400,
      timeTaken: 800
    }
  ],
  totalDistance: function () {
    // define an accumulator
    let result = 0

    // work on accumulator
    for (let i = 0; i < this.runs.length; i++) {
      result += this.runs[i].distance
    }

    // return accumulator
    return result
  },
  longestRunDistance: function () {
    let result = this.runs[0].distance

    for (let i = 1; i < this.runs.length; i++) {
      if (this.runs[i].distance > result) {
        result = this.runs[i].distance
      }
    }

    return result
  },
  averageSpeed: function () {
    let totalTime = 0

    for (let i = 0; i < this.runs.length; i++) {
      totalTime += this.runs[i].timeTaken
    }

    return this.totalDistance() / totalTime
  }
}

console.log(user) // remove this line when you have transferred the user object into the User and Run constructor function

// use these as the starter code for your constructor functions
const User = function () {}
const Run = function () {}

module.exports = {
  User: User,
  Run: Run
}
