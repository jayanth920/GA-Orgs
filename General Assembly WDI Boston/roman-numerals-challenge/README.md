[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Roman Numeral Challenge

Write code to convert back and forth between Arabic numerals (e.g. `23`) and
strings representing [Roman numerals](https://en.wikipedia.org/wiki/Roman_numerals)
 (e.g. `"XXIII"`).

## Instructions

1. Fork and clone this repository.
1. Change into the new directory.
1. Install dependencies with `npm install`.
1. Create and checkout a new branch to work on.
1. Fulfill the listed requirements.

For reference:

| Language   | Install Dependencies | Run Linter      | Run Tests      |
|:----------:|:--------------------:|:---------------:|:--------------:|
| JavaScript | `npm install`        | `grunt nag`     | `grunt test`   |

JavaScript starter code is available in
[`lib/challenge.js`](lib/challenge.js).
A pull request is not required, but it is necessary if you want a code review.

You may wish to refer to [FAQs](https://github.com/ga-wdi-boston/meta/wiki/)
related to [forking,
cloning](https://github.com/ga-wdi-boston/meta/wiki/ForkAndClone).

## Requirements

In JavaScript, implement `arabicToRoman`, a method/function that converts
arabic numbers to strings of characters representing Roman numerals.
It's worth noting that in Roman numerals, there is no way to represent either
 zero, negative numbers, or fractions, so if the input is any of these (or any
 other obviously invalid input), `arabicToRoman` should return `null`.

You should be running the appropriate linter before diagnosing any bugs, since
 linters find some of the most common sources of errors.
After your linter passes, you should run the corresponding test command to run
 the included tests.
Tests will tell you whether or not you've met these requirements.

You're welcome to view and work on the [original challenge on CodeWars](http://www.codewars.com/kata/51b6249c4612257ac0000005).

## Bonus

Once you've implemented `arabicToRoman`, implement the inverse method,
 `romanToArabic`.
As with `arabicToRoman`, you'll need to do some input validation --
 if you receive any strings that don't follow the rules of Roman numerals
 (e.g. no more than three of the same character in a row) or are otherwise
 obviously invalid, return `null`.
Also: be sure to set `xdescribe` to `describe` in your test file, so that
 the tests for `romanToArabic` will also run.

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
