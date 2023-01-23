[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Ruby Binary Search Challenge

For this challenge, you will be writing a function that performs a Binary
Search. Please follow [this link](https://git.generalassemb.ly/ga-wdi-boston/cs-algorithms#predicting-complexity) from the `Prerequisites` and read the section describing the algorithm before beginning.

## Prerequisites

- [ga-wdi-boston/cs](https://git.generalassemb.ly/ga-wdi-boston/cs)
- [ga-wdi-boston/cs-algorithms](https://git.generalassemb.ly/ga-wdi-boston/cs-algorithms)

## Instructions

1.  Fork and clone this repository.
1.  Change into the new directory.
1.  Install dependencies.
1.  Create and checkout a new branch to work on.
1.  Fulfill the listed requirements.

Starter code is available in [`lib/binary_search.rb`](lib/binary_search.rb). A pull
request is not required, but it is necessary if you want a code review.

You may wish to refer to [FAQs](https://github.com/ga-wdi-boston/meta/wiki/)
related to [forking,
cloning](https://github.com/ga-wdi-boston/meta/wiki/ForkAndClone).

## Requirements

Implement a class,`BinarySearch`, that when is initialized, has a method `start_search` that can be called to locate a value within an array.

`BinarySearch#start_search` should be called with 2 arguments: the array (an ordered collection), and the value to locate within the array (that falls within the lower and upper bounds of the array, non-inclusive). `BinarySearch#do_search` should return the item from the array as well as the number of times `do_search` was called. It should achieve this by recursivelly calling `BinarySearch#do_search` the correct amount of times based on the [definition of Binary Search.](https://git.generalassemb.ly/ga-wdi-boston/cs-algorithms#predicting-complexity), and incrementing a counter each time.

The tests will ensure that you are completing a Binary Search with the
appropriate runtime complexity.

## Additional Resources

- [Harvard CS50 - Binary Search Video](https://www.youtube.com/watch?v=5xlIPT1FRcA)
## Bonus

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
