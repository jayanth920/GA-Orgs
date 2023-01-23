[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Python Lists and Dictionaries

## Prerequisites

- [Python Study](https://git.generalassemb.ly/ga-wdi-boston/python-study)

## Objectives

By the end of this, developers should be able to:

- Create lists and dictionaries in Python.
- Access elements in a list or dictionary.
- Perform common list and dictionary operations.

## Preparation

1. Fork and clone this repository.
 [FAQ](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/ForkAndClone)
1. Create and checkout to a new branch, `training`, for your work.
1. Open the repository in VSCode with `code .`.

## Lists

A list is Python's name for an array. They function very similarly to
Javascript arrays. If you want to access a specific element, you access it with
bracket notations in the same way as Javascript.

```py
colors = ["red", "yellow", "blue"]
colors[1]
# "yellow"
```

We can also use negative indeces to access elements in lists from the **end**.

```py
colors = ["red", "yellow", "blue"]
colors[-1]
# "blue"
colors[-2]
# "yellow"
```

### Lab: Basic List Operations

Use the Python documentation to look up the following list of operations we can
perform on our lists in Python. Use the [`cheatsheet.md`](cheatsheet.md) file
to fill out definitions and usage examples for each.
You can find these operations in the docs [here](https://docs.python.org/3/tutorial/datastructures.html#more-on-lists) for list specific
operations or [here](https://docs.python.org/3/library/functions.html) for more general operations

- `len()`
- `append()`
- `insert()`
- `pop()`
- `sum()`
- `min()`
- `max()`

### Code-Along: Using List Methods

Let's try out some of these methods now that we know what they do!

We will use [`./bin/list_methods.py`](./bin/list_methods.py).

### Demo: Slice Notation

We already know that bracket notation allows us to access elements in our lists,
but we can also use bracket notation to slice (grab some of) our lists!

We can do this by using a combination of indeces and colons, identifying a
starting index, an ending index, and an optional "step" index. The step index
will be used to grab from the start to the end by a certain count, like grabbing
every third item, for example.

```py
# grab all items in our list from `start` to `end`
# this does NOT include the item with index `end`
my_list[start:end]

# grab all items in our list from `start` to the end of the list
my_list[start:]

# grab all items in our list from beginning (0) to `end`
# this does NOT include the item with index `end`
my_list[:end]
```

Open [`./bin/slice.py`](./bin/slice.py) and follow along with some examples
of how we can use this slice notation.

## Dictionaries

Dictionaries hold key/value pairs just like Javascript objects. They can hold
different types of values, strings, integers, even functions, so they function
almost the exact same as Objects in Javascript. The only difference is that
dictionary keys have to be [hashable](https://www.quora.com/What-are-hashable-types-in-Python) so that the key is immutable.
That means your key must be a string or a number.

```py
empty_dict = {}

key_value_pairs = {
  'key': 'value',
  0: 'some string value',
  'another_key': 901,
  'nested_dict': {
    4: 'something',
    'a_key': 'a value'
  }
}
```

The type for dictionaries is `dict`.

```py
print(dict)
<class 'dict'>
```

### Accessing and Modifying Dictionaries

Once you've made a dictionary, you can start adding values using bracket
notation. The value inside the bracket will be the key, so it has to either be
hashable, or representing a variable that is.

```py
# Making an empty dictionary
# with the dictionary literal syntax
my_dictionary = {}
# Or using the `dict` class
my_dictionary = dict()
print(my_dictionary)
# => {}

# Adding elements one at a time
my_dictionary['name'] = 'Mike'
my_dictionary['city'] = 'Boston'
my_dictionary['age'] = 1
print(my_dictionary)
# => {'name': 'Mike', 'city': 'Boston', 'age': 1}

# Adding group of values to a single key
# This ends up turning into a "tuple" data type, which is similar to a list
my_dictionary['value_tuple'] = 2, 3, 4
print(my_dictionary)
# => {'name': 'Mike', 'city': 'Boston', 'age': 1, 'value_tuple': (2, 3, 4)}
```

The same bracket notation is used for reassigning values.

Keys are case-sensitive, so if you are reassigning a value and capitalize your
key, you'll just create a entry in your dictionary.

```py
# Updating existing Key's Value
my_dictionary['city'] = 'NYC'
print(my_dictionary)
# => {'name': 'Mike', 'city': 'NYC', 'age': 1, 'value_tuple': (2, 3, 4)}
```

Key/value pairs can also be deleted. Python gives us access `del` method for just this purpose.

```py
print(my_dictionary)
# => {'name': 'Mike', 'city': 'NYC', 'age': 1, 'value_tuple': (2, 3, 4)}
del my_dictionary['age']
print(my_dictionary)
# => {'name': 'Mike', 'city': 'NYC', 'value_tuple': (2, 3, 4)}
```

The only problem with the `del` method is that if you try to delete a key/value pair that does not exist, it will give you a `KeyError`.

```py
print(my_dictionary)
# => {'name': 'Mike', 'city': 'NYC', 'value_tuple': (2, 3, 4)}
del my_dictionary['not_a_real_key']

# => Traceback (most recent call last):
#      File "<stdin>", line 1, in <module>
#    KeyError: 'not_a_real_key'
```

To avoid getting this error, we can use the `pop` method! This method will take a key as the first argument, and a default value as a second. The default value will be returned if the key is not present, instead of the `KeyError`.

```py
print(my_dictionary)
# => {'name': 'Mike', 'city': 'NYC', 'value_tuple': (2, 3, 4)}
print(my_dictionary.pop('not_a_real_key', None))
# => None
```

> Note: While it is bad form and useless, it is possible to have have a
> dictionary with two keys that are the same (`my_dictionary = {'name': 'Jeff', 'name': 'Steve'}`), your python code will still run.
> If this happens, the last value will be the one that’s kept.

### Lab: FizzBuzz with Dictionaries

Time to recreate the classic FizzBuzz problem with dictionaries!

Inside [`./bin/fizzbuzz.py`](./bin/fizzbuzz.py), create a dictionary containing keys `"fizz"`, `"buzz"`,
`"fizzbuzz"`, and `"other"`, each with lists as values. As you iterate through
all the numbers from 1 to `max_num`, add each number to one of the lists
mentioned above; numbers divisible by 3 *only* should go into the `"fizz"`
list, numbers divisible by 5 *only* should go into the ``"buzz"`` list,
numbers divisible by both should go into the `"fizzbuzz"` list, and numbers
divisible by neither should go into the `"other"` list. Finally, once you're
done, return the dictionary as the result of `fizzbuzz`.

Run your code from the console using `python labs/fizzbuzz.py`

## Looping with Lists and Dictionaries

We can easily iterate over lists in Python, which are one kind of "sequence"
data-structure.

```py
nums = [1, 2, 3, 4, 5]

# Logs each item in the `nums` list
for num in nums:
  print(num)
```

We can also iterate over dictionaries (a "mapping" data-structure) by accessing
their keys:

```py
my_dictionary = {
  'first_name': 'Mike',
  'last_name': 'Finn',
  'age': 2
}

# Logs each key
for key in my_dictionary:
  print(key)
# => 'first_name'
# => 'last_name'
# => 'age'

# Logs the value associated with each key
for key in my_dictionary:
  print(my_dictionary[key])
# => 'Mike'
# => 'Finn'
# => 2
```

## Additional Resources

- Try More
  - [List Practice](https://pynative.com/python-list-exercise-with-solutions/)
  - [Dictionary Practice](https://pynative.com/python-dictionary-exercise-with-solutions/)
- Dive Deeper
  - [Data Structures in Python: Lists and The Avengers](https://dev.to/georgeoffley/data-structures-in-python-lists-and-the-avengers-305f)
  - [Designing Intelligent Python Dictionaries](https://towardsdatascience.com/designing-intelligent-python-dictionaries-cc138ac3f197)

## [License](LICENSE.md)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
