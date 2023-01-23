[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# JavaScript Reference Types

## Prerequisites

- [ga-wdi-boston/js](https://git.generalassemb.ly/ga-wdi-boston/js)

## Objectives

By the end of this, developers should be able to:

- Identify array, object, and function literals
- Create and invoke functions
- Store, access, and update data values in objects and arrays
- Iterate through an array or object and operate on its elements
- Highlight the differences between reference types and primitive types in JS

## Preparation

1. [Fork and clone](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/ForkAndClone)
  this repository.
1. Create a new branch, `training`, for your work and change into it.
1. Install dependencies with `npm install`.

## Reference Types

Javascript has three different reference types:

- Plain Object
- Array
- Function

All JavaScript reference types are technically objects, which we will discuss more
in a later lesson but for now we will think of objects, arrays and functions individually.

`Object` and `Array` are used to hold collections.

`Function` holds encapsulated executable code.

All three can be created using reference type literals.  The following shows the
simplest examples of these types created with literal syntax:

```js
const list = []
const dictionary = {}
const code = function () {}
```

### Demo: Arrays

In JavaScript to represent a list we can use an [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).
Elements in an `Array` or items in our list are ordered. JavaScript arrays are
zero-indexed: the first element of an array is at index 0, and the last element
is at the index equal to the value of the array's length property minus 1. Using
an invalid index number returns `undefined`.

```js
// Create an empty array literal
const list = []

// Create an array literal with values
const anotherList = ['Nelly', 100, false, 2]

// Read value from an Array, use index
anotherList[0]
anotherList[2]

// Update value in an Array, use index
anotherList[2] = true

// Add value to an Array, use index
anotherList[5] = 'Add Me'
```

#### Code Along: Iterate through an Array

```js
const developers = ['Susan', 'Charlotte', 'Aaron']

// Individually print message for each item in array
console.log('Hello ' + developers[0])
console.log('Hello ' + developers[1])
console.log('Hello ' + developers[2])

// Loop through array using i as the index
for (let i = 0; i < developers.length; i++) {
  console.log('Hello ' + developers[i])
}
```

### Demo: Objects

In JavaScript to represent a dictionary of data with key/value pairs, we can use
an [Object](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics).

```js
// Create an empty object literal
const emptyDictionary = {}

// Create an object literal with values
const car = {
  make: 'Ford',
  model: 'Mustang',
  year: 1999
}

// Read value from an Object, use key
car['make']
car.make

// Update value in an Object, use key
car.make = 'Toyota'

// Add value to an Object, use key
car.topSpeed = 120
```

#### Code Along: Iterating through an Object

```js
const car = {
  make: 'Ford',
  model: 'Mustang',
  year: 1999
}

// Individually print message for each property of object
console.log(car.make)
console.log(car.model)
console.log(car['year'])

// Loop through object using key
for (const key in car){
  console.log(car[key])
}
```

#### Code Along: Objects and Variables

Often we will create an object with values that are input by a user, a database,
or an API.  That means the value is unknown and will need to be referenced using
a variable.

```js
const userInput = 'Mike'

const person = {
  userName: userInput
}
```

We will often use the same variable name as the key.  At first it may look less
readable, but the pattern is common.

```js
const userName = 'Mike'

const person = {
  userName: userName
}
```

It is so common that in ES6, a shorthand syntax was introduced.

```js
const userName = 'Mike'

const person = {
  userName
}
```

### Code Along: Collections

We'll be using the file `lib/collections.js` as a starting point to:

- create a list of normalized words from a paragraph of text.
  ```js
  const sentence = 'The Cat in the Hat is in the house'
  // After being normalized
  // 'THE CAT IN THE HAT IS IN THE HOUSE'

  // As a normalized list
  // [ 'THE', 'CAT', 'IN', 'THE', 'HAT', 'IS', 'IN', 'THE', 'HOUSE' ]
  ```

- find the word frequencies (how many times does each unique word appear in
  the string).
  ```js
  const sentence = 'The Cat in the Hat is in the house'

  // As an object, that maps each normalized word to the number of times it occurs
  // { THE: 3, CAT: 1, IN: 2, HAT: 1, IS: 1, HOUSE: 1 }
  ```

### Demo: Functions

In mathematics, a function maps one or more inputs to a single output.

JavaScript isn't that strict, allowing zero inputs or no specified output.

```js
const hello = function () {
  console.log('Hello')
}

hello()
```

Functions can accept inputs

```js
const hello = function (name) {
  console.log('Hello ' + name)
}

hello('Mike')
```

Does the result of `hello` change depending on the arguments
used?

What can we do with functions?

Functions provide important parts of the building blocks of programs,
abstraction and encapsulation.

It is important to remember that `console.log` prints its arguments to the
`console` (the terminal using node, the console area of the debug tools using
chrome) but does not return a value. *this is a common point of confusion*.
`console.log` does *not* return a value (it returns `undefined`).

### Demo: Return Values

```js
const addOne = function (num) {
  return num + 1
}

const addOneNoReturn = function (num) {
  num + 1
}

const sum = addOne(10) // ?

const sum = addOneNoReturn(10) // ?
```

The important piece to remember is that you need the `return` keyword to return
a value. If you forget it or choose not to include it, the function still
returns something to the caller, and it will be `undefined`.

Strictly speaking, all JavaScript functions evaluate to a value, but that value
is `undefined` if we do not provide a return (explicitly or implicitly).

### Code Along: Functions

```js
const helloWorld = function () {
  return 'Hello World!'
}

const hello = function (name) {
  return 'Hello ' + name
}
```

### Parameters and Arguments

When you create a function, you specify the parameters.  When you call a
function, you specify the arguments (which are the values that the parameters
are set to when your function executes).

In JavaScript, functions can be defined as taking zero or more arguments.

```js
const zero = function () {
  return 0
}

// You call this function by writing: `zero()`

const one = function (param) {
  return param
}

// You call this function by writing: `one('argumentExample')`

const three = function (param1, param2, param3) {
  return param2
}

// You call this function by writing: `three(1, 'two', 'example')`

// What would happen if we called this function using only one argument?

three(1)
```

What is the result of this code?

```js
const add = function (a, b) {
  return a + b
}

add(1, 2) // ?
add(2, 'cat') // ?
add('cat', 'dog') // ?
```

### Lab: Return Values and Function Syntax

In `lib/function-syntax-lab.js`, get some practice writing functions, accepting
arguments, and returning the appropriate values.

### Lab: Functions

We'll use `lib/lab.js` to build functions to wrap some of the collection
processing we've done before.  This practice is meant to be challenging.

### Lab: Methods

Methods are functions that we invoke on an object.
Even primitive types have [object wrappers](https://javascript.info/primitives-methods)
in javascript which allows us to use methods on primitives like strings.

For each of the following methods:

- What is the method used for?
- What are the parameters/arguments?
- What does the method return?
- Try the method yourself!

#### String Methods

- `.toUpperCase()`
- `.toLowerCase()`
- `.indexOf()`
- `.split()`

#### Arrays Methods

- `.pop()`
- `.push()`
- `.shift()`
- `.unshift()`
- `.indexOf()`

### Code Along: Assignment with Reference Types

A key difference between a reference and primitive type is that a variable that
holds a reference points to the object's location in memory. **When you change**
**one reference value, you change any other variables that point to the same**
**reference value.**

Alternatively, when a variable holds a **primitive type**, it holds the value
itself, and another variable that holds the same primitive value has no relation
with any other variable that holds the same primitive value. **When you change**
**one primitive value, it will not change the other variables that point to**
**the same primitive value**.

To see this working in JavaScript, take a look at the following code:

```js
// Primitives
let primitive = 2
let otherPrimitive = primitive
primitive = 7

primitive // 7
otherPrimitive // 2

// Reference Types
let reference = {}
let otherReference = reference
reference.property = 'value'

reference // { property: 'value'}
otherReference // { property: 'value'}
```

Notice how the initial `primitive` example does not update the value held in
`otherPrimitive` (it remains 2). However, because we've told `otherReference` to
*point to* `reference`, the variable `otherReference` will continue pointing to
that object until told otherwise, and will therefore appear to have "updated"
its value.

### Test your solution

Test your solution to the lab using the command:

```bash
grunt test
```

Completed the lab and curious about what the tests are doing?
The tests are written in Javascript.  Take a look under the hood!

## Additional Resources

### Objects

- [Object Basics](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)
- [Working with Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
- [Objects JS Info](https://javascript.info/object)

### Arrays

- [Arrays Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Arrays JS Info](https://javascript.info/array)
- [Eloquent JS: Objects and Arrays](https://eloquentjavascript.net/04_data.html)

### Functions

- [Functions Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)
- [Function Basics JS Info](https://javascript.info/function-basics)

### Primitive vs Reference Types & Memory

- [Explaining Value vs Reference](https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0)
- [Copying by Reference JS Info](https://javascript.info/object#copying-by-reference)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
