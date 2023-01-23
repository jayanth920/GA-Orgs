/* eslint no-constant-condition: 0 */
/* eslint no-unused-vars: 0 */
/* eslint no-undef: 0 */

// Code Along:
//
// Predict what will be the output of each console.log(). Will any errors be thrown?
//
// Now check your predictions. Run this file using `node bin/scope-practice.js` to see the output.
// But first, ensure that each previous error has been fixed before you move on to the next part of the file. 
// To fix a scope error, make sure the scope has access to the variables being used.
//
//
// global scope
//
const english = 'hello'

if (true) {
  // local scope of 1st nested if statement
  const spanish = 'hola'

  if (true) {
    // local scope of 2nd nested if statement
    const french = 'bonjour'
    // Write console.log() statements for english, spanish, and french. First predict what the values will be.
  }
  // local scope of 1st nested if statement
  // Write console.log() statements for english, spanish, and french. First predict what the values will be.
}

// We are back in the global scope, since we are outside of `if` statements. 
// Will the following console.log work?
console.log('I am in the global scope: english = ', english )

// Will this work? Why not?
console.log('I am defined in the first if statement\'s local scope: spanish = ', spanish)

// How about this?
console.log('I am defined in the second if statement\'s local scope: french = ', french)

/*
Conditions are just 1 example of block scope.
Loops are another example of block scope.
*/

// Using loops to create block scope:

let counter = 0
while (counter < 5) {
  const a = 1
  console.log(a) // 1
  console.log('local scope of while loop. counter is', counter)
  counter++ // make sure you are exiting your while loop!
}
console.log(a) // We get an error! ReferenceError: a is not defined

//  For Loops still have block scope even though the syntax is different.
for (let i = 1; i < 2; i++) {
  console.log(i) // 1
}
console.log(i) // What will be output?

// Functions are another example of block scope.
const anyFunction = function () {
  const a = 1
  console.log(a) // 1
}
console.log(a) // ReferenceError: a is not defined

// The scope of our parameters are within the function block as well
const print = function (a) {
  console.log(a)
}
print(1) // run the function. What gets console logged?

// But when we try to access the parameter outside of the function...
console.log(a) 
// What sort of error will we get?

