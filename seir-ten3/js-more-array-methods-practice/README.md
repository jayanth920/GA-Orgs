[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly)

# More Array Methods

In this exercise we'll practice with `.sort()` and `.reduce()`, as well as tackle some array methods we've previously learned.

## Prerequisites

- Functions
- Array methods

## Instructions

1. Clone this repository.
2. Change into the new directory.
3. Fulfill the listed requirements, and commit after solving each prompt!
4. An `examples.js` file has been provided for our in-class examples.
5. Starter code for exercises is available in lib/challenge.js. The JS file is already linked to your HTML.

## [.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

The `.sort()` method is another higher-order function.

If no input function is supplied, values are sorted as strings by default.

```js
['chips', 'salsa', 'guacamole', 'cheese', 'jalapenos', 'sour cream'].sort();
// => [ 'cheese', 'chips', 'guacamole', 'jalapenos', 'salsa', 'sour cream' ]
```

If the elements are not strings, it converts them to strings and sorts based on
**unicode** values (alphabetized but with all uppercase characters before all
lower case characters).

This leads to the odd behavior of `10` being sorted in front of `2`...

```js
[111, 2, 10, 20, 3, -1, 12].sort();
// => [-1, 10, 111, 12, 2, 20, 3]
```

To make the sort method work as expected, you can write a compare function. It
takes two arguments `a` and `b`, which represent any two elements being sorted.

Rather than returning `true` or `false` as in the case of the other test
functions we've looked at, the elements are sorted according to the return value
of the compare function. 

Here is what the compare function should return according to the MDN [documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#description): 

| compareFunction(a, b)  return value	| sort order | 
|--------------------------------------|------------|
| > 0	| sort b before a | 
| < 0	| sort a before b |
| === 0	| keep original order of a and b | 

Thus the compare function should look something like this in order to sort numbers in ascending order: 

```js
function compareNumbers(a,b){
  if (a < b) {
    return -1
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
}

compareNumbers(1,2) // => 1-2 = -1, these two numbers are already in ascending order
compareNumbers(10, 7) // => 10 - 7 = 3, these two numbers are not in ascending order, need to be switched
compareNumbers(5,5) // => 5-5 = 0, these two numbers are equal and don't need to be sorted

```

This compare logic can be written more concisely as:

```js
function compareNumbersShort(a, b) {
	return a - b;
}
```

```js
const array = [111, 2, 10, 20, 3, -1, 12];

// with a named function
array.sort(compareNumbers);
// => [-1, 1, 2, 3, 10, 12, 20]

// with an anonymous function
array.sort((a, b) => a - b);
// => [-1, 1, 2, 3, 10, 12, 20]
```

> Observe that `.sort` is an array method that mutates the original array and does not require you to store a return value, unlike other methods like `.map` and `.filter`. To avoid mutating the original array, you can make a shallow copy of the array using the [spread](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) operator before calling sort on it: `const newSortedArray = [...array].sort(compareNumbers)`. This will save the results of the `sort` function to the new variable and leave the original array in its previous state. 
> 

### Essential Questions

**❓ What argument does `.sort` take?**

**❓ What would the compare function look like to sort an array of numbers in descending order?**

## .reduce()

The most flexible array method function is called [`.reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce). Reduce, as the name
implies, can take an array and reduce it to a single value. You can use `reduce` to return another array, a string, a number, even an object. Since it is
the most flexible of the array iteration methods, it can even implement the
functionality of `map`, `filter`, `forEach`, etc., given different callback functions. 

Reduce takes a first argument of a callback function, much like the other array methods we've learned. We call this callback a "reducer" function, because its job is to _reduce_ the array to a single return value -- a number, a string, an object, or even another array. This reducer callback has two required parameters: the previous value of the accumulator, and the current value of the element in the array.

However, unlike the other array methods, the reduce method itself can take a second argument, which is the initial value of the accumulator. If you're calculating a sum, this initial value might be `0`. If you're returning a string, it might be `''`. For the reference types, you can pass in a `[]` or an `{}` depending on what you're reducing to. As described in the MDN documentation, the reducer callback might look something like this when abstracted:

```js
const result = arr.reduce((previousValue, currentValue) => { 
  // your function logic here
}, initialValue)
```

Reduce is usually difficult to grasp at first; don't stress about this. It is
definitely not something you need to have mastered, it is just good to have an
early awareness. It takes a fair amount of practice to intuitively use
`.reduce()` when solving problems.

### Example

We can take the sum of an array of numbers (i.e. reduce the set of numbers to a
sum):

```js
const total = [1, 3, 5, 7].reduce((sum, num) => sum + num, 0);
```

You can even map with reduce, i.e., return a new array of transformed elements:

```js
const words = ['Hello', 'world'];
const stickup = words.reduce((instructions, word) => {
	instructions.push(word.toUpperCase());
	return instructions;
}, []);
```

You can use reduce to filter out even numbers and return an array of only evens:

```js
const odds = [1, 2, 3, 4, 5, 6, 7].reduce((odds, num) => {
	if (num % 2) {
		// false if num % 2 === 0
		odds.push(num);
	}
	return odds;
}, []);
```

Or count the number of even numbers in an array:

```js
const numEvens = [1, 2, 3, 4, 5, 6, 7].reduce((count, num) => {
	if (!(num % 2)) {
		// false if num % 2 !== 0
		count++;
	}
	return count;
}, 0);
```

We can even use `.reduce()` to iterate over an array of objects and generate a new object with counts of a property:

```javascript
const letterCounts = 'hello world'.split('').reduce((runningCounts, letter) => {
        // note the object key bracket notation here for computing the value of a key from a variable
	if (runningCounts[letter]) {
		runningCounts[letter]++;
	} else {
		runningCounts[letter] = 1;
	}
	return runningCounts;
}, {});
```

For a step by step of how the mechanics work, check out
[this section on the MDN page for reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce#How_reduce_works).

### Essential Questions

**❓ What argument(s) does `.reduce` take?**

**❓ Why is `.reduce` considered the most flexible of all the array iterator methods?**

## Exercises

It's your turn to practice using `.sort`, `.reduce`, and other higher-order array methods. A series of prompts are located in the `lib/script.js` file. Complete each prompt!

## Tips

- Open the `index.html` file in Google Chrome to view your console messages.
- Focus on completing one prompt at a time, and comment out your code to focus on the other prompts.

## Ready for More? 

- Need more challenges? Try this [CodeWars](https://www.codewars.com/kata/coding-meetup-number-2-higher-order-functions-series-greet-developers) kata that covers array methods that use higher-order functions.
- Also check out the rest of the
  [Coding Meetup Katas](http://www.codewars.com/kata/coding-meetup-number-1-higher-order-functions-series-count-the-number-of-javascript-developers-coming-from-europe)
  for lots more practice
- [Node School Workshoppers](https://nodeschool.io/#workshoppers) (Functional
  JavaScript elective)
- [Eloquent JS Higher-Order Functions](http://eloquentjavascript.net/05_higher_order.html)

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.
