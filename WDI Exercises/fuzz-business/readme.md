# Fuzz Business

## Setup

```bash
$ git clone git@github.com:ga-wdi-exercises/fuzz-business.git
```

## Instructions

Write a function `sumFizzBuzzFactors` that takes one argument, `maximum`, which is an integer. The function should return the sum of the numbers **in between** 0 and `maximum` **that are divisible by 3 OR 5**.

## An Example

```js
sumFizzBuzzFactors(11)  // => 33
// 3 + 5 + 6 + 9 + 10 = 33
```

## Testing

A test suite is included with this exercise and will automatically run each time you load `index.html` in the browser.

## Bonuses

- Solve the challenge using `.reduce` and without any other higher order functions.
- Instead of using any higher-order functions or loops, write a solution that uses  [recursion](https://medium.com/@kevincennis/recursion-in-javascript-1608032c7a1f#.osuenxz9w).
