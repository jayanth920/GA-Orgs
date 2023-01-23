[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Python Iteration Methods

When working with iterable data structures, we often want to loop over them in
order to  access or modify their contents. Python has several different
iteration methods built into it's iterable data structure.

## Prerequisites

- [python-lists-dictionaries](https://git.generalassemb.ly/ga-wdi-boston/python-lists-dictionaries)

## Objectives

By the end of this, developers should be able to:

- Access items in sequence data types
- Be able to iterate over strings, lists, dictionaries, and sets
- Write anonymous lambda functions for iteration method callbacks

## Preparation

1. Fork and clone this repository.
 [FAQ](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/ForkAndClone)
1. Create and checkout to a new branch, `training`, for your work.
1. Open the repository in VSCode with `code .`.

## Iterables

In programming, iterables are data structures that allow access to their
contents **one by one**. In Python, that means all iterables can be looped over
using a `for` loop.

### Note on Python `for` loops

Python doesn't have traditional `for` loops that use an initializer
(`let i = 0`), a condition (`i < 9`), and an iterator (`i++`) like in other
languages such as JavaScript. Instead, the Python `for` loop looks and feels
more like a [`foreach`](https://en.wikipedia.org/wiki/Foreach_loop) loop.

```py
numbers = [10, 12, 15, 18, 20]
for number in numbers:
    print(number)
```

## Sequences

Sequences are one type of data structure that can be iterated over. So far,
we have seen Lists, Tuples, and Strings, all of which are iterable sequences.

We are able to access items in sequences with bracket notation, which we saw
with our List data structures.

### Demo: Accessing With Indeces

```py
numbers = [10, 12, 15, 18, 20]
fruits = ("apple", "pineapple", "blueberry")
message = "I love Python!"

# Element access using integer indices
print(numbers[0]) # Accesses the 0th index, or first item, 10
print(fruits[2]) # Accesses the 2nd index, or third item, "blueberry"
print(message[-3]) # Accesses the 3rd to last item (character), "o"
```

### Demo: Slicing

We have seen the square-bracket slicing syntax with Lists, but turns out
we can do the same slicing with all sequences!

```py
print(numbers[:2]) # [10, 12]
print(fruits[1:]) # ('pineapple', 'blueberry')
print(message[2:]) # "love Python!"
```

## Code-Along: Iterating Over Different Data

Open up the `bin/` folder in this repository. There are some files we can use
to explore differente ways of iterating over data. We will look at iterating
over strings, dictionaries, lists, and sets.

We can use regular `for` or `while` loops to iterate over our data. The built-
in `enumerator` method will provide us with the index count as well as the
value inside our loop. When we look at dictionaries, we will see they have
special methods like `.items`, `.keys`, and `.values` that can be used for more
specific loops.

## Code-Along: Iteration Methods

### Note On Lambda

In Python, the `lambda` keyword is used to create anonymous (unnamed)
functions. These are often referred to as "lambda functions". They might look a
lot different, but they work the same way functions declared with the `def`
keyword do.

One note on lambda functions is that they can only ever contain a single
expression.

The syntax for lambda functions is as follows: `lambda arguments: expression`

An example:

```py
even = lambda num: num % 2 == 0
print(even(10)) # True
```

Even though it looks like we are defining a method `even`, we are actually
creating an anonymous lambda function that will return a function object to be
stored in the variable `even`. This is similar to:

```py
def even(num):
    return num % 2 == 0
```

### `map`

```py
# map(function_to_apply, list_of_inputs)

items = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x**2, items))
print(squared)

# Output: [1, 4, 9, 16, 25]
```

### `filter`

```py
number_list = range(-5, 5)
less_than_zero = list(filter(lambda x: x < 0, number_list))
print(less_than_zero)

# Output: [-5, -4, -3, -2, -1]
```

### `reduce`

```py
from functools import reduce
product = reduce((lambda acc, current_element: acc * current_element), [1, 2, 3, 4])
print(product)

# Output: 24
```

## Additional Resources

### Try More:

- [Map, Filter, Reduce](https://www.learnpython.org/en/Map,_Filter,_Reduce)
- [Dictionary Exercises](https://pynative.com/python-dictionary-exercise-with-solutions/)

### Dive Deeper:

- [Lambda Functions in Python](https://stackabuse.com/lambda-functions-in-python/)
- [List Comprehensions](https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
