'use strict'

/*
  JS Basics Diagnostic
  NOTE: This is the only file you will need to edit!

        The only changes you make to this file should be replacing values of
        predefined variables.
*/

/* =============== QUESTION #1 ==================

Javascript traditionally has 5 primitive data types.(not considering the BigInt
type or the Symbol type) Theses primitive data types are:
  - String
  - Number
  - Boolean
  - Null
  - Undefined

GOAL: Read the description of the primitive data type and using the list from
      above fill in '<your answer here>' with the matching primitive data type.
      Don't worry about capitalization.

      The first two are already done for you! ('String', 'Number')
*/

// 1a) This primitive data type is a sequence of characters used to represent text.
const primitiveOne = 'String'

// 1b) This primitive data type is a numeric data type
const primitiveTwo = 'Number'

// 1c) This primitive data type is automatically assinged to a variable that has
// just been declared.
const primitiveThree = '<your answer here>'

// 1d) This primitive data type is a logical data type that can only have two values
// true or false.
const primitiveFour = '<your answer here>'

// 1e) This primitive data type respesents a nonexistent element.
const primitiveFive = '<your answer here>'

/* =============== QUESTION #2 ==================
  Take some time to look at the following block of code. We first assign 'c' with
  the value of 5. The next line we add the value of 'c' to 2 and assign that value
  to 'd'. On the final line we take the original value of 'c' an the newely assigned
  value of 'd' and add them together assigning a new value to 'c'.
*/

let c = 5
const d = 2 + c
c = c + d

/*
  2a) What is the new value of 'c'?

  GOAL: Replace 'null' with the expected value of 'c'.
*/
const valueOfC = null

/*
  2b) JavaScript operators are used to modify, compare, and assign values.

      Here is a list of some common operators:
      - 'assignment'
      - 'grouping'
      - 'subtraction'
      - 'addition'
      - 'multiplication
      - 'division'

      Look at the last line in the above code block:
      'c = c + d'

  GOAL: There are 2 types of operators from the above list being used in
        that expression.

        Below, replace 'null' with the actual operator being used.
*/
const firstOperator = null // first operator being used in expression
const secondOperator = null // second operator being used in expression

/* =============== QUESTION #3 ==================
  Take some time to look at the following block of code.

  After each line of code executes, what are the values of x and y?
    Do the variables change? Do their values?

    GOAL: Replace 'null' with the actual value of 'x' and 'y' at
          the specified point in the code block.
*/

// 3a) first values of x and y
let x = 4 // What is x? assign value to firstValOfX
let y = 3 // What is y? assign value to firstValOfY

const firstValOfX = null
const firstValOfY = null

// 3b) second values of x and y
x = y + 2 // What is x? assign value of x to secondValOfX
          // What is y? assign value of y to secondValOfY

const secondValOfX = null
const secondValOfY = null

// 3c) final values of x and y
y = 10 + x // What is x? assign value of x to finalValOfX
           // What is y? assign value of y to finalValOfY

const finalValOfX = null
const finalValOfY = null

/* =============== QUESTION #4 ================== */
let weather // initWeather
weather = 'cloudy' // cloudyWeather
weather = 'sunny' // sunnyWeather
console.log(weather === 'sunny') // weatherLog

/*
  Each of the lines above are expressions that will "evaluate" to a
  certain value.

  GOAL: Replace 'null' for each of the following variables with the
        value each expression will evaluate to.

        (e.g. What will the expression `let weather` evaluate to when it gets run?
              Assign that value to the initWeather variable below.)

  HINT: Try entering a Node REPL (type `node` on your command line)
        and running the above expressions!
*/

const initWeather = null
const cloudyWeather = null
const sunnyWeather = null
const weatherLog = null

/* =============== QUESTION #5 ==================
  Navigate to bin/diagnostic.js to complete question 5!
*/

/* !!! DO NOT MODIFY ANYTHING BELOW HERE !!! */

module.exports = {
  primitiveOne,
  primitiveTwo,
  primitiveThree,
  primitiveFour,
  primitiveFive,
  firstOperator,
  secondOperator,
  valueOfC,
  firstValOfX,
  firstValOfY,
  secondValOfX,
  secondValOfY,
  finalValOfX,
  finalValOfY,
  initWeather,
  cloudyWeather,
  sunnyWeather,
  weatherLog
}
