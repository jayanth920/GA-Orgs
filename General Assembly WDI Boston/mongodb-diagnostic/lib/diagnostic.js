'use strict'
// Assessment: An Introduction to MongoDB

// do not change anything between here and question 1
const db = new Mongo().getDB('westeros')
db.dropDatabase()

// **************************************
// Document links for all methods that can be used for this diagnostic
// can be found in mongoDBDoc.md
// **************************************
// Question 1
//
// Using .insertOne(), create a collection called houses, and insert the following houses,
// with name and motto fields:
//
// House Arryn, motto 'As High as Honor'
// House Stark, motto 'Winter is Coming'
// House Targaryen, motto 'Fire and Blood'

// your code begins here

// your code ends here

// Question 2
//
// Using .updateOne() at least once and $push at least once, add the following people
// to the respective houses in a "members" array.
//
// Ned Stark
// Arya Stark
// Sansa Stark
// Viserys Targaryen
// Daenerys Targaryen
// Jon Arryn

// your code begins here

// your code ends here

// Question 3
//
// House Arryn is not honorable!  Delete their motto by using $unset.

// your code begins here

// your code ends here

// Question 4
//
// You are George R. R. Martin!  Delete, without mercy,
// House Stark using .deleteOne().

// your code begins here

// your code ends here

// Do not change anything after this line
db.houses.find().forEach(printjson)
