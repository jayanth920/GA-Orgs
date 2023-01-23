[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

### Javascript Calculator

Build a JS Calculator

## Prerequisites

-   Javascript

## Instructions

1.  Fork and clone this repository.
1.  Change into the new directory.
1.  Fulfill the listed requirements.

Starter code is available in [`calculator.js`](calculator.js). You are required to turn in your submission by making a pull request on the original repository.

Unless otherwise specified on the calendar or by an instructor, homework is due the next morning by 10:00am ET. 

### Preview Tomorrow's Content

Check out the videos below to prepare for tomorrow's lecture on array methods: 

- [Array Iteration Methods](https://www.youtube.com/watch?v=Urwzk6ILvPQ)
- [Must-Know JS Array Methods](https://www.youtube.com/watch?v=R8rmfD9Y5-c&vl=en-US)

## Requirements

Your task is to create a Javascript object that represents a calculator. It should have methods that provide it with the following functionality...

- Addition
- Subtraction
- Multiplication
- Division
- Exponents (Hint: Look up Javascript's Math object)
- An operation of your choice!

You should be able to run these methods like so from your browser's Javascript console...

```js
calculator.add(1,2);
// => 3
```

## Bonus 1
Give your calculator memory and allow it to persist the result of multiple operations.
* Store this result in a `value` property.
* Give your calculator a `clear` method that resets `value`.

For example:

```js
calculator.add(1)
// value is 1
calculator.add(2)
// value is 3
calculator.add(2)
// value is 5
calculator.multiply(2)
// value is 10
```
## Bonus 2

Give your calculator a "master" method that can parse through a string of operations (e.g., `(2 - 1) * (5 ^ 2)`)
* Your calculator should still have memory.

## Bonus 3 

Too easy? Try your hand at building out geometric objects and methods in this bonus [assignment](https://git.generalassemb.ly/sei-921/js-geometry).

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
2.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
