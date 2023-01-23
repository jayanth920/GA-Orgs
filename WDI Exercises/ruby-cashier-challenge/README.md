[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Cashier Challenge

Write a method that can make correct change, given a purchase price and an
amount tendered.

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

You will write a method called `make_change`, which will take two arguments,
a purchase price and an amount of money tendered; it will return an array of the
quantities of quarters, dimes, nickels and pennies that it must give to make
proper change (without giving too many smaller coins).

Here's an example of how this should work.
Say we want to buy something for $5.60, and we pay $6.00;
we should get back 1 quarter, 1 dime, and 1 nickel. If the item was, instead,
$5.62, we would get back 1 quarter, 1 dime, and 3 pennies.

```ruby
make_change(5.60, 6.00) # => [1, 1, 1, 0]
make_change(5.62, 6.00) # => [1, 1, 0, 3]
#                             Q, D, N, P
```

> HINT: It would make things much easier if we were to work in terms of cents
> rather than in terms of fractional dollars. We can do this by multiply by 100.
> Use `.round` to deal with any rounding issues.

### Step Two

Refactor your method so that you can pass in an arbitrary set of denominations
of coins for the method to make change with.
Assume that this set of denominations will be sorted from largest to smallest.
The default denominations, if no argument is given,
should be quarters, dimes, nickels, and pennies.

```ruby
make_change(5.39, 6.00, [100, 50, 5, 1])   # => [0, 1, 2, 1]
#                        Dollars, Half-dollars, Nickels, Pennies
make_change(5.39, 6.00, [25, 1])   # => [2, 11]
#                        Quarters, Pennies
make_change(5.39, 6.00, [25, 10, 5, 1]) # => [2, 1, 0, 1]
#                        Quarters, Dimes, Nickels, Pennies
make_change(5.39, 6.00) # => [2, 1, 0, 1]
#                        Quarters, Dimes, Nickels, Pennies
```

If for whatever reason it is not possible to make perfect change given the
denominations that were passed in (for instance, if the smallest denomination
is 5 cents), 'round down' by giving the maximum amount of change without going
over.

```ruby
make_change(5.39, 6.00, [25, 10])   # => [2, 1], or 60 cents in change
#                         Q,  D
```

## [License](LICENSE)

Source code distributed under the MIT license. Text and other assets copyright
General Assembly, Inc., all rights reserved.
