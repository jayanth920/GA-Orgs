[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# RPN (Reverse Polish Notation) Calculator Challenge

Adapted from [this CodeWars exercise](http://www.codewars.com/kata/reverse-polish-notation-calculator/ruby),
created by user [vgrichina](http://www.codewars.com/users/vgrichina).

RPN, or [Reverse Polish Notation](https://en.wikipedia.org/wiki/Reverse_Polish_notation),
is a convention for writing arithemetic expressions.
Ordinarily, most arithemetic expressions are written as `1 + 2`: the operation
is in the middle, with arguments (in this case, 1 and 2) on either side.
In Polish Notation, this order is changed so that the operation comes
before all of the arguments, i.e. `+ 1 2`.

_Reverse_ Polish Notation is almost the same, as Polish Notation, except that
 the operation comes _after_ all of the arguments, i.e. `1 2 +`

Your challenge will be to create a simplified calculator for evaluating
expressions written in RPN.

_Please note your calculator should be able to handle expressions with more_
_than one operation._

## Prerequisites

-   None

## Instructions

1.  Fork and clone this repository.
1.  Change into the new directory.
1.  Install dependencies.
1.  Create and checkout a new branch to work on.
1.  Fulfill the listed requirements.

Starter code is available in [`lib/challenge.rb`](lib/challenge.rb). A pull
request is not required, but it is necessary if you want a code review.

You may wish to refer to [FAQs](https://github.com/ga-wdi-boston/meta/wiki/)
related to [forking,
cloning](https://github.com/ga-wdi-boston/meta/wiki/ForkAndClone).

## Requirements

Implement a method `calc` which, given a string of characters written in RPN,
returns the result of the operations.
For now, the calculator should only implement four operations: `+`, `-`, `*`,
or `/`.

Additionally, note that:

-   If the expression is empty, it should evaluate to zero.
-   The calculator must also work with floating point numbers (i.e. decimals).

For simplicity's sake, assume that all strings are properly formatted, with
a single space between every character, and that your calculator will not be
given any unusual operations (such as dividing by zero).

You should be running `rubocop` before diagnosing any bugs, since it finds
some of the most common sources of errors.
After `rubocop` passes _your_ code (ignore any warnings about `spec_helper`),
you should run `rake test` to run the included tests, which will tell you
whether or not you've met requirements.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
