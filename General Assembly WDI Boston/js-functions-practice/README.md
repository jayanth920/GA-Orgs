[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# JavaScript Functions Practice

## Prerequisites

- [js-functions](https://git.generalassemb.ly/ga-wdi-boston/js-functions)

## Instructions

1. Fork and clone this repository.
1. Change into the new directory.
1. Install any dependencies with `npm install`.
1. Create and checkout a new branch, named `response`.
1. Follow the directions given in [`practice.md`](practice.md).
1. When finished, push to your fork and submit a pull request.

Your pull request description should contain a "fist to five" for comfort and
clarity. Additionally, you should mention the resources you used to help you
complete this diagnostic. For example:

```md
Comfort: 3
Clarity: 3

I used Google and my class notes to help with this exercise.
```

You may wish to refer to [FAQs](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/)
related to [forking,
cloning](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/ForkAndClone), and [pull
requests](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/PullRequest).

You may use **any resource** other than each other to complete this exercise.
This includes referencing talk materials, appropriate documentation, and
searching for help online.

You should be running `grunt nag` before diagnosing any bugs, since it finds
some of the most common sources of errors. After `grunt nag` passes, you should
run `grunt test` to run the included tests. Tests will tell you whether of not
your responses are correct.

## Bonus: Handling Bad Inputs

Once you've finished the exercises, feel free to attempt the bonus problems.

For the bonus, we would like you to handle **bad inputs** given to your functions.
When your functions are called, but aren't given the parameters they need, we would like them to [throw an exception](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw) that says `'Missing Arguments'`.

As an example, in math a number cannot be divided by `0`. If we
wrote a `safeDivide` function, we could throw an exception if 
someone ever attempts to divide with the **bad input** zero.

```js
const safeDivide = function (numerator, denominator) {
  // if the denominator (the number we divide by) is zero
  if (denominator === 0) {
    // throw an error
    // Best practice: Throw an `Error` object like below instead 
    // of throwing a string `throw 'Cannot divide by zero!'`
    throw new Error('Cannot divide by zero!')
  }
  
  return numerator / denominator
}

safeDivide(5, 0) // would be 5 divided by 0
```

Hint: You can check if a parameter is given to a function, by checking if it is `undefined`. Ex. `numerator === undefined` or `denominator === undefined`.

Also: be sure to set `xdescribe` to `describe` in your test files, so the **bonus**
tests will run.

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
