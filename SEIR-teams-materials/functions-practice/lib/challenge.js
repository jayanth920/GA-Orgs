/*
 * Before you start, add this javascript file in a script tag in index.html.
 *
 * Tip: Comment out your console.logs for a prompt before moving on to the next one.
 * It will keep your console clean and easy to read!
 */

//  Sanity check: if you see this message in the browser console, you are all set!
// console.log("challenge.js is loaded and ready to go 🤠");

/*
 * Prompt 1:
 *
 * Write a function, using the function keyword. Call the function sayHello.
 * When invoked, sayHello should `return` the string 'hello world'.
 */

function sayHello() {
  // your code here
  return "hello world";
}

// comment in the code below to see the output in the browser console
// console.log(sayHello()); //should return 'hello world'

// 😎 Make a commit: "Complete prompt 1"

/*
 * Prompt 2:
 *
 * Create a function called print. Print should take a parameter called message.
 * When invoked and passed a string, print should `return` the message.
 */

function print(message) {
  // your code here
}

// comment in the code below to see the output in the browser console
// console.log(print("hello from prompt 2")); //should return 'hello from prompt2'

// 😎 Make a commit: "Complete prompt 2"

/*
 * Prompt 3:
 *
 * Create a function called printMessage. This function should take a parameter
 * called message. When invoked and passed a string, return 'Today's message
 * is:', followed by the message passed in as a parameter.
 */

function printMessage(message) {
  // your code here
}

// comment in the code below to see the output in the browser console
// console.log(printMessage("hello world from prompt 3")); //should return "Today's message is: hello world from prompt 3"

// 😎 Make a commit: "Complete prompt 3"

/*
 * Prompt 4:
 *
 * Most functions need an explicit return; otherwise, they return undefined. Fix the following function so that it returns the square of a number.
 */

/** Your Solution */
function getSquare(a) {
  a ** 2;
}

// comment in the code below to see the output in the browser console
// console.log(getSquare(3)); //should return 9
// console.log(getSquare(5)); //should return 25

// 😎 Make a commit: "Complete prompt 4"

/*
 * Prompt 5:
 *
 * Create a function called reverseMessage. This function should take
 * a parameter called message. When invoked and passed a string, print the
 * string in reverse. (hint: look up some ways of doing this.)
 */
function reverseMessage(message) {
  //  your code here
}

// comment in the code below to see the output in the browser console
// console.log(reverseMessage("hello")); //should return "olleh"
// console.log(reverseMessage("JavaScript is awesome")); //should return "emosewa si tpircSavaJ"

// 😎 Make a commit: "Complete prompt 5"

/*
 * Prompt 6:
 *
 * Create a function called multiply that takes two parameters: a and b. When
 * invoked, multiply a times b. If b an argument is not passed in for b, then
 * double a (i.e. multiply it by two).
 *
 * Hint: use Google to look up how to pass a default parameter.
 */

function multiply(a, b = 2) {
  //  your code here
}

// comment in the code below to see the output in the browser console
// console.log(multiply(2, 5)); // should return 10
// console.log(multiply(3)); //should return 6

// 😎 Make a commit: "Complete prompt 6"

/*
 * Prompt 7:
 * Functions can return anything, even objects!
 * Write a function that returns an object with the invoked function's arguments as the values of the firstName and lastName keys:
 * {
 *  firstName: 'Zakk',
 *  lastName: 'F'
 * }
 */

/** Your Solution */
function makePerson(firstName, lastName) {
  // your code here
}

// comment in the code below to see the output in the browser console
// const zakk = makePerson("Zakk", "F");
// console.log(zakk); //should return {firstName: 'Zakk', lastName: 'F'}
// const jimmy = makePerson("Jimmy", "B");
// console.log(jimmy); //should return {firstName: 'Jimmy', lastName: 'B'}

// 😎 Make a commit: "Complete prompt 7"

/*
 * Prompt 8:
 *
 * Write a function called makeAnObject that returns an object. The object can be anything. If needed, pass in parameters to the function, or you can hard-code an object to return.
 */

function makeAnObject() {
  //  your code here
}

// comment in the code below to see the output in the browser console
// pass any necessary arguments to the function below
// console.log(makeAnObject());

// 😎 Make a commit: "Complete prompt 8"

/*
 * Prompt 9:
 *
 * Write a function called makeAnArray that returns an array. The array can be of anything, and can be hard-coded or dynamically created from arguments.
 */

function makeAnArray() {
  //  your code here
}

//  comment in the code below to see the output in the browser console
// pass any necessary parameters to the function below
// console.log(makeAnArray()); //should return an array

// 😎 Make a commit: "Complete prompt 9"

/*
 * Prompt 10:
 *
 * Side effects! Write a function that, when called, adds a number passed in as a parameter to
 * the sum variable below and returns the new sum. Your function should CHANGE the value of `sum` by performing a side effect. Invoke your method a few times and then print the sum.
 */

let sum = 0;
function addToSum(num) {
  // your code here
}

// comment in the code below to see the output in the browser console
// addToSum(30);
// addToSum(5);
// addToSum(-6);
// console.log(sum); //should be 29

// 😎 Make a commit: "Complete prompt 10"

/*
 * Prompt 11:
 *
 * Write a function that takes an array of number values and returns the sum.
 * Test it out to make sure it works.
 * Think about edge cases: for an empty array, return 0
 * Hint: You can use a for or while loop for this. You do NOT need to use an array method like `.reduce`. We'll learn about array methods tomorrow.
 */

function getArraySum(array) {
  // your code here!
}

//  comment in the code below to see the output in the browser console
// console.log(getArraySum([1, 2, 3])); //should return 6
// console.log(getArraySum([23, 25, -46, 7, 123])); //should return 132

// 😎 Make a commit: "Complete prompt 11"

/*
 * Prompt 12:
 *
 * Write a function that takes a string and returns an array of every word in
 * the string. Any mid-string punctuation can stay with the word it precedes.
 */

function arrayifyString(string) {
  //  your code here!
}

// comment in the code below to see the output in the browser console
// console.log(arrayifyString("The rain in Spain falls mainly on the plain")); // should return ["The", "rain", "in", "Spain", "falls", "mainly", "on", "the", "plain"]

// 😎 Make a commit: "Complete prompt 12"

///////////////////////////////////////////
// DO NOT MODIFY CODE BENEATH THIS LINE :)
///////////////////////////////////////////

if (!this.window) {
  module.exports = {
    sayHello,
    print,
    printMessage,
    getSquare,
    reverseMessage,
    multiply,
    makePerson,
    makeAnObject,
    makeAnArray,
    sum,
    addToSum,
    getArraySum,
    arrayifyString,
  };
}
