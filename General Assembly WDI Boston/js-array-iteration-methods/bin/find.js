#!/usr/bin/env node

'use strict'

// Starting array
const ages = [7, 24, 21, 18, 22]

// Use find to return the first age that is 18 or older
// using a predicate function
const isAdult = age => {
  return age >= 18
}
ages.find(isAdult) // 24

// 1.  Find the first food that is more than 20 days old
// using a predicate function called isRotten
const fridge = // eslint-disable-line no-unused-vars
  [
    { name: 'Carrots', daysInFridge: 32 },
    { name: 'Onions', daysInFridge: 23 },
    { name: 'Bell Peppers', daysInFridge: 16 },
    { name: 'Soda', daysInFridge: 7 },
    { name: 'Pizza', daysInFridge: 4 },
    { name: 'Cake', daysInFridge: 3 }
  ]

// CODE ALONG CODE GOES HERE
