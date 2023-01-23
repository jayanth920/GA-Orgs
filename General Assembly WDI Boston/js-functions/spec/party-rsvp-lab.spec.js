'use strict'

// Allow chai syntax like `expect(foo).to.be.ok;`
// jshint -W030

const chai = require('chai')
const expect = chai.expect

const outs = require('../lib/party-rsvp-lab.js')

describe('updateGuestList', function () {
  it('adds person to guestList if they have rsvp\'d', function () {
    const person = outs.invites[0]
    person.rsvp = true
    outs.updateGuestList(person)
    expect(outs.guestList.includes(person.name)).to.equal(true)
  })
})

describe('remindInvite', function () {
  it('sets person to be reminded', function () {
    const person = outs.invites[0]
    outs.remindInvite(person, outs.updateGuestList)
    expect(person.reminded).to.equal(true)
  })
  it('rsvps the person if they are not busy', function () {
    const person = outs.invites[0]
    person.busy = false
    outs.remindInvite(person, outs.updateGuestList)
    expect(person.rsvp).to.equal(true)
  })
})

describe('checkInvites', function () {
  it('returns \'Error: Missing Arguments\' when called without arguments', function () {
    expect(outs.checkInvites).to.throw(Error).and.have.property('message').equal('Missing Arguments')
  })
})
