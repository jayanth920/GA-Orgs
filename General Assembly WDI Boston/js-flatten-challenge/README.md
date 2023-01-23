[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# JavaScript Flatten Challenge

Multidimensional arrays are those that contain at least one array and those
arrays can also contain at least one array, and so on. Flattening a
multidimensional array results in a one-dimensional array containing every
element. For example, flattening `[0, [1], [2, 3], [4, [5, 6, [7, 8]]]]` results
in `[0, 1, 2, 3, 4, 5, 6, 7, 8]`.

Create an `Array` method named `flatten()` that, when invoked on an array,
returns a flattened array. Empty arrays should be discarded. For example,

```javascript
const array = [0, [1], [2, [3], []], []];
const flattenedArray = array.flatten();

// All of the following calls will print [0, 1, 2, 3].
console.log([0, [1], [2, [3], []], []].flatten());
console.log(array.flatten());
console.log(flattenedArray);
```

## Prerequisites

-   [Array - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
-   [JavaScript Array Methods](https://github.com/ga-wdi-boston/js-array-methods)
-   [Recursion (computer science)](https://en.wikipedia.org/wiki/Recursion_%28computer_science%29)

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

*   `flatten()`
    *   is a method defined on `Array`'s prototype.
    *   does not have any parameters.
*   `flatten()`'s return value
    *   is an array.
    *   does not contain any arrays.
    *   contains every non-array element from the original array and any nested
        arrays.

# Bonus

Add a parameter to `flatten()` that determines how many levels of nesting it
should flatten.  For example:
```javascript
[0, [1], [[2]]].flatten();  // [0, 1, 2].
[0, [1], [[2]]].flatten(0); // [0, [1], [[2]]].
[0, [1], [[2]]].flatten(1); // [0, 1, [2]].
[0, [1], [[2]]].flatten(2); // [0, 1, 2].
```

## Tasks

Developers should run these often!

-   `grunt nag` or just `grunt`: runs code quality analysis tools on your code
    and complains.
-   `grunt reformat`: reformats all your code in a standard style.
-   `grunt test`: runs any automated tests; may depend on `grunt build`.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
ls
