'use strict';

var firstName = 'John'; // 1
var lastName = 'Dowd'; // 2
var age = 19; // 3

function displayPerson(fname, lname){ //4, 4.i
  var prefix = 'Mr'; // 4.ii
  var fullName = null; // 4.ii

  function getFullName(){ // 4.iii
    var suffix = 'Esq.';  // 4.iii.a; Everybody's a lawyer, eh.
    fullName = prefix + ' ' + fname + ' ' + lname + ' ' + suffix;
    return fullName;
  } // 4.iii.b

  return getFullName();
} // 4.iv

function removeYears(){ // 5
  var minusYears = 10, age = 49; // 5.i
  return age - minusYears;
} // 5.ii

console.log(displayPerson(firstName, lastName));
console.log(removeYears());
