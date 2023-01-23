
## Recursion


### Objectives:

- Explain what recursion is and why we would want to use it. 
- Break recursion down into it's Base and Recursive case statement.
- Demonstrate several use cases for recursion.

#### What is Recursion?

Recursion, at it's most basic level, is when a function calls itself.  It's an interesting way of implementing a looping construct via one or more function calls.

#### Why would you use Recursion? 

It can be really elegant! You never *need* recursion, and, in fact, it's less performant than writing loops in JavaScript. That being said sometimes the most straightforward approach is to use it. 

### Writing a recursive function

So every loop implements one form of the above conditional logic and then proceeds to execute a code block.  Writing a recursive function operates the same way in that it also evaluates a condition (base) which then determines if it should run the function again (recusive). 

In a recursive function these conditions are refereced to as `cases` and are defined as follows: 

- **Base case:** When this condition is true the function stops calling itself.
- **Recursive case:** Call the function again.

### Examples

Multiply only using the + sign:

Using a for loop...
```js
function multiply(num1, num2) {
  let product = 0
  for (let i = 0; i < num2; i++) {
    product += num1
  }
  return product
}
```
Using recursion...

```js
function multiply(num1, num2) {
  if (num2 === 1 || num2 === 0) return num1
  return num1 + multiply(num1, num2 - 1)
}
```

Sum an array of integers...
```js
function sum(arr) {
  let s = 0;
  arr.forEach(d => {
    s += d
  })
  return s
}
```
Recursive:
```js
function sum(arr) {
  if (arr.length === 1) return arr[0]
  let firstValue = arr.shift()
  return firstValue + sum(arr)
}
```
Day 1 for Advent of Code...

Iterative:
```js
const getFuel = mass => Math.floor(mass / 3) - 2

const getFuelRecursive = mass => {
  let massSum = 0
  let newFuel
  while (newFuel > 0) {
    newFuel = getFuel(mass)
    if (newFuel > 0) massSum += newFuel
  }
}
```

Recursive:
```js
const getFuel = mass => Math.floor(mass / 3) - 2

const getFuelRecursive = mass => {
  if (mass <= 0) return 0
  let newFuel = getFuel(mass)
  return newFuel + getFuelRecursive(newFuel)
}
```

### The Call Stack

Recursion is less memory efficient than iteration in JavaScript. JavaScript stores function calls in a data structure called the call stack. So, each recursive call gets added to that.

### Practice

```js
// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion
function factorial(n) {
}

function fibonacci() {
  // This function returns the Nth number in the fibonacci sequence.
  // https://en.wikipedia.org/wiki/Fibonacci_number
  // For this function, the first two fibonacci numbers are 1 and 1
}


function findMax() {
  // This function returns the largest number in a given array.
}


function coinFlips() {
  // This function returns an array of all possible outcomes from flipping a coin N times.
  // Input type: Integer
  // For example, coinFlips(2) would return the following:
  // ["HH", "HT", "TH", "TT"]
  // H stands for Heads and T stands for tails
  // Represent the two outcomes of each flip as "H" or "T"
}

function letterCombinations() {
  // This function returns an array of all combinations of the given letters
  // Input type: Array of single characters
  // For example, letterCombinations(["a","b","c"]) would return the following:
  // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]
}
```
