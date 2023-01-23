'use strict'

const chai = require('chai')
const expect = chai.expect

const Hero = require('../lib/hero')

describe('Storm', function () {
  const storm = new Hero('Ororo Iquadi T\'Challa',
    'Storm', 'weather control')

  xdescribe('super power', function () {
    it('weather control', function () {
      expect(storm._power).to.equal('weather control')
    })
  })
})
