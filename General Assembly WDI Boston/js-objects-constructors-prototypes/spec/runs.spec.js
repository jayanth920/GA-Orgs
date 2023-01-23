'use strict'

const chai = require('chai')
const expect = chai.expect

const runs = require('../lib/runs')

describe('Run Tracker', function () {
  const User = runs.User
  const Run = runs.Run
  const user = new User('Christopher Robin', 'wdi@christopherRobin.com')
  describe('Constructor Lab', function () {
    describe('each User instance', function () {
      it('has a name property', function () {
        expect(Object.keys(user).includes('name')).to.equal(true)
      })
      it('has an email property', function () {
        expect(Object.keys(user).includes('email')).to.equal(true)
      })
      it('has a runs property which is an array', function () {
        expect(Object.keys(user).includes('runs')).to.equal(true)
        expect(user.runs instanceof Array).to.equal(true)
        user.runs.push(new Run('2015-05-25 15:00', 1200, 600))
        user.runs.push(new Run('2015-05-25 15:00', 1400, 800))
      })
    })
    describe('each Run instance', function () {
      it('has a date property', function () {
        expect(Object.keys(new Run('2015-05-25 15:00', 1200, 600)).includes('date')).to.equal(true)
      })
      it('has a distance property', function () {
        expect(Object.keys(new Run('2015-05-25 15:00', 1200, 600)).includes('distance')).to.equal(true)
      })
      it('has a timeTaken property', function () {
        expect(Object.keys(new Run('2015-05-25 15:00', 1200, 600)).includes('timeTaken')).to.equal(true)
      })
    })
  })
  describe('Prototype Lab', function () {
    describe('each User instance', function () {
      /* eslint-disable no-prototype-builtins */
      describe('has a method totalDistance', function () {
        it('that returns the right length', function () {
          expect(user.totalDistance()).to.equal(2600)
        })
        it('that is defined on the User.prototype', function () {
          expect(User.prototype.hasOwnProperty('totalDistance')).to.equal(true)
        })
      })
      describe('has a method longestDistance', function () {
        it('that returns the right length', function () {
          expect(user.longestRunDistance()).to.equal(1400)
        })
        it('that is defined on the User.prototype', function () {
          expect(User.prototype.hasOwnProperty('longestRunDistance')).to.equal(true)
        })
      })
      describe('has a method averageSpeed', function () {
        it('has an averageSpeed method that returns the correct value', function () {
          expect(user.averageSpeed().toLocaleString('en-US')).to.equal('1.857')
        })
        it('that is defined on the User.prototype', function () {
          expect(User.prototype.hasOwnProperty('averageSpeed')).to.equal(true)
        })
      })
    })
  })
})
