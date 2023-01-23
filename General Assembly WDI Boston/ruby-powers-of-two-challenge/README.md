[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# 'Powers Of Two' Challenge

Write a method to determine if a given number is a power of two.

Adapted from this CodeWars exercise, created by user [yuriy.tsemashko](https://www.codewars.com/users/yuriy.tsemashko):

-   [Power of Two](https://www.codewars.com/kata/power-of-two/train/ruby)

## Prerequisites

-   None

## Instructions

1.  Fork and clone this repository.
1.  Change into the new directory.
1.  Install dependencies.
1.  Create and checkout a new branch to work on.
1.  Fulfill the listed requirements.

Starter code is available in the [`lib`](lib) directory.
A pull request is not required,
but it is necessary if you want a code review.

You may wish to refer to [FAQs](https://github.com/ga-wdi-boston/meta/wiki/)
related to [forking,
cloning](https://github.com/ga-wdi-boston/meta/wiki/ForkAndClone).

## Requirements

A 'predicate' is a method that returns true or false based on some condition.
In Ruby, it's conventional for these methods' names to end in question marks.

Your challenge is to create a predicate method called  `power_of_two?`
which determines whether or not a given number
is a power of two (in other words, a solution to the formula 2^i = x,
where x is the number you're given and i is an integer).

For instance, 2 is 2 raised to the first power,
so `power_of_two?(2)` should evaluate to `true`.
However, 10 is not a power of two
-- 2 cannot be raised to any whole number in order to equal 10 --
so `power_of_two?(10)` should evaluate to `false`.

Please run the Rubocop linter (`rubocop lib`) before debugging your code,
 since the linter will make it easy to spot many common sources of errors.
After `rubocop` passes your code, run `rspec` to run the included tests,
 which will tell you whether or not your code meets the requirements.

> HINT: It's not cheating to read the tests --
> they might give you a clue about how to solve the problem.

## Bonus

2^3 is 8, 2^2 is 4, and 2^1 is 2.
What is 2^0?
Well, to increase the exponent by one, you multiply by two,
and to decrease the exponent by one, you divide by two.
In other words, 2^3 = (2^2) * 2, and 2^2 = (2^3) / 2.

Therefore, by extension, 2^0 = (2^1)/2, or 2/2, which equals 1.
Taking this even further, you can conclude that 2^(-1) = (2^0)/2, or 1/2!

Change `power_of_two?` so that it can check for cases where
the exponent is a whole negative number, such as 2^(-2),
or where the exponent is zero.

Uncomment and run the second set of tests to see if your code passes!

## [License](LICENSE)

Source code distributed under the MIT license. Text and other assets copyright
General Assembly, Inc., all rights reserved.
