[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# JavaScript Objects Stack Challenge

> In computer science, a **stack** is an abstract data type that serves as a
> collection of elements, with two principal operations: *push*, which adds an
> element to the collection, and *pop*, which removes the most recently added
> element that was not yet removed. The order in which elements come off a stack
> gives rise to its alternative name, **LIFO** (for **last in, first out**).
> Additionally, a peek operation may give access to the top without modifying
> the stack. -- [Stack (abstract data type) - Wikipedia](https://en.wikipedia.org/wiki/Stack_%28abstract_data_type%29)

## Prerequisites
-   [JavaScript Objects: Referencing Own Properties](https://github.com/ga-wdi-boston/js-objects-this)
-   [JavaScript Functions: Ins and Outs](https://github.com/ga-wdi-boston/js-functions-ins-and-outs)
-   [Stack (abstract data type) - Wikipedia](https://en.wikipedia.org/wiki/Stack_%28abstract_data_type%29)

## Instructions

1.  Fork and clone this repository.
1.  Change into the new directory.
1.  Install dependencies.
1.  Create and checkout a new branch to work on.
1.  Fulfill the listed requirements.

Starter code is available in [`lib/challenge.js`](lib/challenge.js). A pull
request is not required, but it is necessary if you want a code review.

You may wish to refer to [FAQs](https://github.com/ga-wdi-boston/meta/wiki/)
related to [forking,
cloning](https://github.com/ga-wdi-boston/meta/wiki/ForkAndClone).

## Requirements

The goal of this challenge is to practice writing prototype methods by
implementing one on a construction function that models a stack as an object. As
a reminder of how prototypes are used, the provided starter code includes a
constructor function for `Stack` and a completed prototype method on it,
`pop()`. The challenge is to implement the remaining method, `push()`.

-   It should be possible to create a new stack by invoking the `Stack`
    constructor function. e.g., `const stack = new Stack();`.
-   The stack should have two methods, `push()`, and `pop()`.
    -   `push()` takes one argument and adds it to the stack.
    -   `pop()` does not take any arguments, removes the most recently added
        element from the stack, and returns it.
-   The `Array` methods `pop()` and `push()` should not be used.

You should be running `grunt nag` before diagnosing any bugs, since it finds
some of the most common sources of errors. After `grunt nag` passes, you should
run `grunt test` to run the included tests. Tests will tell you whether or not
you've met these requirements.

## Bonuses

Change `xit` to `it` in `spec/stack.spec.js` to have `grunt test` check the
bonuses.

### Enable Prefilled Stacks

Modify the constructor function to take an arbitrary number of arguments and
store them as elements in the stack upon instantiation.

```javascript
const stack = new Stack(1, 2, 3);

stack.pop();  // 3
```

### Enable Method Chaining on `push()`

Modify `push()` to allow method chaining.

```javascript
const stack = new Stack();

stack.push(1).push(2).push(3);

stack.pop();  // 3
```

Which parts of each method are the side effects and which parts are the "main"
effect?

## Tasks

Developers should run these often!

-   `grunt nag`: runs code quality analysis tools on your code
    and complains.
-   `grunt test`: runs any automated tests; may depend on `grunt build`.
-   `grunt`: runs both `nag` and then `test`
-   `grunt make-standard`: reformats all your code in the standard style.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
