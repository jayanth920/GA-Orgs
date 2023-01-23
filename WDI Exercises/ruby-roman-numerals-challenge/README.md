[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Roman Numerals

Write a method that takes an Arabic Numeral (e.g. `23`) and returns a string
containing the corresponding [Roman Numeral](https://en.wikipedia.org/wiki/Roman_numerals)
(in this case, `"XXIII"`).

## Prerequisites

-   None

## Setup

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

## Instructions

Please run the Rubocop linter (`rubocop lib`) frequently, since the linter will
make it easy to spot many common sources of errors.
Once `rubocop` confirms that your syntax is right, you can use `rspec` to run
the included tests, which will tell you whether or not your code
meets the requirements.

### Step One

Write a method called `to_roman` which takes a number as an argument and returns
a string containing a Roman Numeral.

In case you're not familiar with them,
here's a key to the Roman Numeral characters

| M    | D   | C   | L  | X  | V | I |
|:----:|:---:|:---:|:--:|:--:|:-:|:-:|
| 1000 | 500 | 100 | 50 | 10 | 5 | 1 |

Don't forget that Roman Numerals never have more than three of a kind.
For instance, 300 would be written as 'CCC', but 400 would be written as 'CD'.

Here are some more examples.

-   999 -> MCMXCIX
-   444 -> CDXLIV

> HINT: Start with solving the simplest cases first. 1, 2, 3... etc.

> ALSO: Is this problem similar to any problems that you've seen before?

### Step Two

Let's handle some edge cases.

The Romans had no character to represent 0 - they would simply not write
anything. If given a 0, `to_roman` should return an empty string.

Although the Romans did have ways of representing fractional numbers,
their system was complicated and often inconsistent.
If your method is given a decimal number as an argument,
it should round to the nearest whole number.

Negative numbers are not representable at _all_ in Roman numerals. If someone
passes in a negative number as an argument, your method should return `nil`.

Finally, any other bad input should be handled by returning `nil`.

### Step Three

Now that you've written a `to_roman` method, write a `to_arabic` method which
implements the reverse process: converting strings of Roman Numerals into
Arabic Numerals!

> HINT: Think carefully about how you read a Roman Numeral. How do you know
> what value it has?

If someone passes in an empty string, interpret it as 0.

If someone passes in an improper Roman Numeral (e.g. "XDLM", "IIII"), or any
other kind of bad input, return `nil`.

Here are some Regex matchers you can use to determine whether or not a Roman
Numeral is structured properly:

-   `/(.)\2{3}` : more than three of a given character in a row

-   `[^MDCLXVI]` : contains characters that are not Roman Numerals

-   `I[^XVI]|V[^I]|X[^CLXVI]|L[^XVI]|C[^MDCLXVI]|D[^MCLXVI]|M[^MDCLXVI]` :
    contains incorrect sequences of characters (e.g. 'IVM', 'LC', etc)

## [License](LICENSE)

Source code distributed under the MIT license. Text and other assets copyright
General Assembly, Inc., all rights reserved.
