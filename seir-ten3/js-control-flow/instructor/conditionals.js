// let age = 16

// if(age >= 16){
//     console.log('You can drive!')
// }

// console.log('Hey what\'s up')


// for (let i = 0; i < 5; i++) {
//     console.log('hello world')
// }


// let temp = 75
// while (temp >= 70) {
//     console.log('Wow it is really HOT!')
//     // temp = temp - 1 -- This line and 19 are the same
//     temp -= 1
// }

// console.log('Ah that\'s better')



// Truthiness & Falsiness
// truthy values: Any string with a value -- anything
// not an empty string.
// Numbers: any number other than zero is truthy.
// true is truthy!

// Falsey statements : 0, "" -- empty string, undefined
// null, false


// let dog = ""
// // console.log(dog)
// // console.log(dogg)

// if(dog){
//     console.log('Woof woof')

// }

// let light = 0
// if (light) {
//     console.log('Light is on')
// } else {
//     console.log('Light is off')
// }

// let temp = 81
// if (temp > 80) {
//     console.log('Wow it\'s really hot')
// } else if(temp > 70){
//     console.log('It\'s pretty nice out')
// } else {
//     console.log('Hey it\'s kinda cold')
// }


// else if() & and else statements depend on an 'if' statement
// else if(){

// }


// let assignmentCompletion = 1;

// if (assignmentCompletion === 0) {
//   console.log("Work on your homework!");
// } else if (assignmentCompletion === 1) {
//   console.log("Good work, still more to go");
// } else if (assignmentCompletion === 2) {
//   console.log("Almost there!");
// } else {
//   console.log("You are done!");
// }

// let assignmentCompletion = 1;
// let checkpointScore = 79;

// if(assignmentCompletion === 0) {
//   console.log("Work on your homework!");
//   if(checkpointScore === 100) {
//     console.log("Well you did great on the quiz at least");
// } else if(checkpointScore < 60) {
//     console.log("Time for a retake!");
//   } else {
//       console.log('Great job on this assignment')
//   }
// } else if( checkpointScore >= 80 ) {
//   console.log("You're doing great!");
// } else {
//   console.log("Keep on truckin");
// }


// let awesome = 1
// if (1 + 5 > 3 && awesome) {
//     console.log('I am the truth!')
// }

// if(awesome || false){
//     console.log('I am half true but all true')
// }


// * Create a variable called a and assign it a number. Write a conditional that
//  * matches the following conditions:
//  *   - if (a * 3) % 2 is equal to 0, print "After running our calculations, the
//  *   result is even"
//  *   - otherwise, print "After running our calculations, the result is odd"
//  */
// let a = 15
// if ((a * 3) % 2 === 0) {
//     console.log("After running our calculations, the result is even")
// } else {
//     console.log("After running our calculations, the result is odd")
// }

/*
* Create a variable called b and assign it a random number between 0 and 100.
* Write a conditional that matches the following conditions:
*
*   - if b is less than or equal to 25, print "bottom quartile"
*   - if b is between 25 and/or equal to 50, print "lower quartile"
*   - if b is between 50 and/or equal to 75, print "upper quartile"
*   - if b is between 75 and/or equal to 100, print "top quartile"
*/

let b = -101

if(b >= 0 && b <= 25){
    console.log('bottom quartile')
} else if(b <= 50){
    console.log('lower quartile')
} else if(b <= 75){
    console.log('upper quartile')
} else if(b <= 100){
    console.log('top quartile')
} else{
    console.log('Not on the chart')
}
