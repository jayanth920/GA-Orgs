'use strict'

const chai = require('chai')
const expect = chai.expect

const meals = require('../lib/meals')

describe('meals', function () {
  const testUser = {
    calorieTarget: 2000,
    meals: [
      {
        title: 'Breakfast',
        date: '2016-07-24',
        description: 'Smoothie',
        calories: 300
      },
      {
        title: 'Lunch',
        date: '2016-07-25',
        description: 'Roasted Veggies',
        calories: 500
      },
      {
        title: 'Dinner',
        date: '2016-07-25',
        description: 'Black Bean Burger',
        calories: 800
      }
    ],
    caloriesEatenOn: meals.caloriesEatenOn,
    avgDailyCalories: meals.avgDailyCalories,
    onTrack: meals.onTrack
  }

  describe('calories eaten on', function () {
    it('has the correct value', function () {
      expect(meals.caloriesEatenOn.call(testUser, '2016-07-25')).to.equal(1300)
    })
  })

  describe('average daily calories', function () {
    it('has the correct value', function () {
      expect(meals.avgDailyCalories.call(testUser)).to.equal(800)
    })
  })

  describe('on track', function () {
    it('has the correct value', function () {
      expect(meals.onTrack.call(testUser)).to.equal(true)
    })
  })
})
