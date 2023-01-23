# JavaScript Functions Practice


## Arguments Practice

Follow the instructions in [`./lib/arguments-practice.js`](./lib/arguments-practice.js) to complete the `addNums`, `nameChange`, and `removeProp` functions.

## Callbacks Practice

Follow the instructions in [`./lib/callback-practice.js`](./lib/callback-practice.js) to complete `waitThenRun` and `runWithNull`.

## Terminology Practice

Follow the instructions in [`./bin/terminology-practice.md`](./bin/terminology-practice.md) and answer the questions to the best of your abilties. 

## Deep Dive: Functions as Return Values

Remember that in JavaScript, everything is an object, even a function. We
already know how to return objects from functions. We can also return functions
from functions that can be invoked whenever we like.

Say we want a counter that stores a number and increments it by some fixed
amount, e.g. starting at 0 and then counting up to 4, 8, 12, 16, etc. We can
accomplish that with a function that references an outside variable to keep
track of the counter, like this:

```js
let counter = 0
const countBy4 = function () {
  counter += 4
  return counter
}
```

To accomplish the above, you are taking into account where the variable
`counter` is defined, and what _scope_ it has. A variable declared outside of
a function can be accessed inside a function, but a variable declared
inside a function is only accessible inside the function.

What if we needed several of these functions, each with a different sized
increment? We could accomplish that with a function that returns another
function. Run the code in [`lib/function-factory.js`](lib/function-factory.js) to see how this works.

Then, fill in the `additionFactory` function so that it takes in two number values and returns a function that adds the numbers together and returns the result.

Example:
```js
const add4And5 = additionFactory(4, 5)
console.log(add4and5()) // 9
```
