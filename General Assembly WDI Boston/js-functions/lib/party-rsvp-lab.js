'use strict'

// invite one
const personOne = {
  name: 'Taylor Kiss',
  rsvp: true,
  reminded: false,
  busy: false
}

// invite two
const personTwo = {
  name: 'Spencer Icasiano',
  rsvp: false,
  reminded: false,
  busy: true
}

// invite three
const personThree = {
  name: 'Rylee Kirkpatrick',
  rsvp: false,
  reminded: false,
  busy: false
}

// invites array
const invites = [personOne, personTwo, personThree]
const guestList = []
let message = ''

// parameters:
// person: an invite object
//
// This function should add the person's name to the `guestList`
const updateGuestList = function () {
  // where do you define the parameters for this function?
  // how do you then use the parameters?

  // uncomment the following when ready:
  // message += `${person.name} is going.\n`
}

// parameters:
// person: a person object
// addGuest: a function to add person to guestList
//
// This function should set the person's `reminded` key to `true`
// and check if the person is `busy` - if they aren't, assume they will RSVP
// and add them to the guestList making use of callbacks
const remindInvite = function () {
  // uncomment the following when ready:
  // message += `Reminded ${person.name} to RSVP.\n`
}

// parameters:
// inviteArray: an array of invite objects
// addGuest: a function to add person to guestList
// reminder: a function to remind person to RSVP
//
// This function makes use of callbacks (functions passed to other functions).
// It should accept an array of invites and two callback functions as parameters.
// It should loop through the people in the inviteArray,
// and then pass the person to the correct callback function as an argument.
const checkInvites = function () {
  console.log('running invite script...')
  message += `Final Tally: ${guestList.length} people coming to the party!`
}

// Invoke the checkInvites() function when this script is loaded.
// use like: `node lib/party-rsvp-lab.js`
// Alternatively, you can load this file into node and directly invoke
// any of the functions defined in this file.
checkInvites()

// Based on the included dummy people,
// the following console log should read:
// Taylor Kiss is going.
// Reminded Spencer Icasiano to RSVP.
// Reminded Rylee Kirkpatrick to RSVP.
// Rylee Kirkpatrick is going.
// Final Tally: 2 people coming to the party!
console.log(message)

module.exports = {
  invites,
  guestList,
  remindInvite,
  updateGuestList,
  checkInvites
}
