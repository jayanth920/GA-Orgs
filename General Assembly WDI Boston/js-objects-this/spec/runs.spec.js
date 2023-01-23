'use strict'

const chai = require('chai')
const expect = chai.expect

const runs = require('../lib/runs')

describe('runs', function () {
  const testUser = {
    runs: [
      {
        date: '2017-05-25 15:00',
        distance: 2300,
        timeTaken: 800
      },
      {
        date: '2017-05-25 15:00',
        distance: 1700,
        timeTaken: 1200
      }
    ],
    totalDistance: runs.totalDistance,
    longestRunDistance: runs.longestRunDistance,
    averageSpeed: runs.averageSpeed
  }

  describe('total distance', function () {
    it('has the correct length', function () {
      expect(runs.totalDistance.call(testUser)).to.equal(4000)
    })
  })

  describe('longest distance run', function () {
    it('has the correct length', function () {
      expect(runs.longestRunDistance.call(testUser)).to.equal(2300)
    })
  })

  describe('average speed', function () {
    it('has the correct value', function () {
      expect(runs.averageSpeed.call(testUser)).to.equal(2)
    })
  })
})
