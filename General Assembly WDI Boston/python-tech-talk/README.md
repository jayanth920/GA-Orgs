[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Python Crashcourse

## Prerequisites

- Experience with JavaScript

## Objectives

By the end of this, developers should be able to:

- Translate basic JavaScript expressions into Python
- Write conditionals, loops, and basic data structures in Python
- Use iteration methods to traverse lists and other iterables
- Create classes and have classes inherit from others

## Preparation

1. Fork and clone this repository.
 [FAQ](https://github.com/ga-wdi-boston/meta/wiki/ForkAndClone)
1. Create a new branch, `training`, for your work.
1. Checkout to the `training` branch.

## Zen of Python

Guido van Rossum built Python as a hobby project on his winter break, with a
few goals:

- An easy and intuitive language just as powerful as major competitors
- Open source, so anyone can contribute to its development
- Code that is as understandable as plain English
- Suitability for everyday tasks, allowing for short development times

Some advantages of Python include:

- General purpose scripting language that runs outside a browser
- Free and open source (community development through Python Enhancement Proposals)
- Huge library of builtin functions
- Thorough documentation

There have been a couple versions of Python, and you may see tutorials out there
that use version 2. Be careful to not get caught up in Python2 - this version
is officially EOL (end of life) as of 2020, so we should use Python3 instead.

Python also comes with an easter egg (hidden joke), if you ever need a reminder
of it's goals. Let's jump into the REPL environment by typing `python3` in the
terminal to check it out.

Once we are in the REPL, you should see `>>>`, which is where we can type our
code! Type in `import this`.

This prints out the "Zen of Python" which was written as a set of guidelines
for the design of the Python language.

## Syntax Basics

Python will feel very similar to JavaScript, but with some syntactical
differences.

We won't be using nearly as many curly braces `{}` in Python to identify
blocks. Instead, we will use colons `:` and **whitespace** to help us write
readable code. If you were following good indentation practices in JavaScript,
you should be in a good place to get used to this in Python.

### Primative Types

Primitive types in Python will look very similar to primitive types in
JavaScript, with a few important differences:

1. In Python, we use `None` to represent nothingness. This would be similar to
`null` or `undefined` in JavaScript.
2. In Python, booleans are represented with **capitalized** `True` and `False`.
3. In Python, numbers can be **integers** (`23`, `-4`), **floats** (`0.3`, `-8.9`), or
["complex"](https://www.journaldev.com/23435/python-complex-numbers-cmath) (`2+3j`)
4. In Python, strings are represented by the `str` class, so we cannot use that
as a variable name.

To find out a value's type in Python, we can use the built-in `type`
function, which will print out the value of the primitive type, such as `int`:

```py
>>> type(5)
<class 'int'>
>>> int
<class 'int'>
```

### Declaring Variables

In Python, we don't use `let`, `const`, or `var` to declare variables. Instead,
the first time we use a variable it will be "declared" and any time after that,
it will be "referenced." Convention is to use `snake_case` to declare local
variables.

```py
my_awesome_variable = 6
print(my_awesome_variable)
```

### Strings

There's no quote preferences for strings, just pick single or double quotes and
stick with it. We can use the other type of quote for quotes inside quotes
to avoid backslashes.

```py
"this string uses double quotes with 'single quotes' inside"
'this string uses single quotes with "double quotes" inside'
```

#### Interpolation

String interpolation in Python will feel very similar to interpolation in JavaScript, but instead of using backticks to surround our template strings, we
idetify them with the letter `f` (for "format") in front of our quotes.

```py
state = "Washington State"
year = 1889
n = 42
my_message = f"{state} was the {n}nd state to join the union in {year}."
# "Washington State was the 42nd state to join the union in 1889"
```

### Operators

Most operators will be the same in Python as they were in JavaScript, like our
math operators `+`, `-`, `*`, `/`, etc. There are, however, a few differences
outlined in this table:

| JS | Python |
|---|-----|
| ===  | ==  |
| !==  | !=  |
| ||   | or  |
| &&  |  and |
| !   | not  |

**Note:** To divide in Python, we can use the regular `/` operator we are used
to. However, this will treat the output as a float (decimal) so to force integer
division, we can use `//`. This will cut off the floating decimal left over,
rounding down to the whole number.

```py
15 / 6
# output will be 2.5
15 // 6
# output will be 2
```

### Conditionals

Conditionals (if/else statements) in Python use colons `:` to identify blocks,
and use the `elif` keyword to handle extra checks, like how we used `else if`
in JavaScript.

```py
vip = True
food_place = "busy"
if (food_place == "full" and not vip):
  print("Sorry, we have no room tonight.")
elif (food_place == "busy" and not vip):
  print("Please wait 10 minutes for a table.")
else:
  print("Welcome! Come sit down right away.")
```

Notice we don't have any curly braces `{}` to identify when our blocks end, or
if we are writing code inside of a block. Instead, we use **indentation** to
show we are inside of a block, and Python will know when we are done with that
block when we stop indenting our lines.

### Loops

`while` loop example:

```py
n = 0
while n < 10:
  n += 3
```

Python `while` loops are generally used for counting, so if you want to go from
0 to 9 and count by 3's, then you want a `while` loop. In contrast, `for` loops
are going to do the counting for you, so you won't have control over **how** it
counts.

`for` loop example:

```py
for i in range(0, 10):
  if i % 2 == 0:
    print(f"{i} is even")
  else:
    print(f"{i} is odd")
```

Python `for` loops **always act on sequences, like arrays**. They will always
automatically pull things out of a sequence and loop through those things one
by one.

```py
foods = ["carrots", "kale", "beets"]
for food in foods:
  print(f"I like {food}")
```

If you want access to the current index of each item then you need to pass your
list through a function called `enumerate`. Enumerate takes items out of an
iterator one by one and returns a tuple (more on these later) of the index of
the item and the item like `(index, item)`.

```py
print("My favorite foods:")
foods = ["carrots", "kale", "beets"]
for i, food in enumerate(foods):
  print(f"{i}. {food}")

# My favorite foods:
# 0. carrots
# 1. kale
# 2. beets
```

### Functions

To write functions in Python, we use the keyword `def` to "define" the function
and the colon `:` to declare the function block.

```py
def say_hello():
  """Says Hello World!"""
  print("Hello, World!")

say_hello()
# Prints "Hello, World!"
```

Notice that funky triple-quoted string at the beginning of our function?

`"""Says Hello World!"""`

These are called `docstrings` and are conventionally used in Python to provide
documentation throughout a codebase. Code will run fine without them, but that
would stray from Python's conventions as well as throw you into linter message
hell.

## Lab: Translating Basic Syntax

Inside `/labs/translate.py`, write valid Python code by translating the following JavaScript:

```js
const checkForAs = function (str) {
  // This function checks if a string contains 'A'
  if (str[0] === 'A') {
    return `The string "${str}" starts with "A"!`
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'A') {
      return `We found an "A" in "${str}" at character ${i + 1}.`
    }
  }

  return `There's not a single "A" in the string "${str}"...`
}

console.log(checkForAs('Someone should move to the Andes.'))
console.log(checkForAs('After work we can finally sleep.'))
console.log(checkForAs('There be no beginning of the letter list here!'))
```

Run the file with `python labs/translate.py` and use `pylint labs/translate.py`
to make sure you're following PEP8 standards.

## Data Structures

### Lists

A list is Python's name for an array. They function very similarly to
JavaScript arrays. If you want to access a specific element, you access it with
bracket notations in the same way as JavaScript.

```py
colors = ["red", "yellow", "blue"]
colors[1]
# "yellow"
```

We can also use negative indexes to access elements in lists from the **end**.

```py
colors = ["red", "yellow", "blue"]
colors[-1]
# "blue"
colors[-2]
# "yellow"
```

#### Lab: Basic List Operations

Use the Python documentation to look up the following list of operations we can
perform on our lists in Python. Try out each one in the REPL!

- `len()`
- `append()`
- `insert()`
- `pop()`
- `sum()`
- `min()`
- `max()`

#### Demo: Slice Notation

We already know that bracket notation allows us to access elements in our lists,
but we can also use bracket notation to slice (grab some of) our lists!

We can do this by using a combination of indexes and colons, identifying a
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

# grab all items in our list from `start` to `end`
# this does NOT include the item with index `end`
# will use `step` to count by a number of items
my_list[start:step:end]
```

Open [`./demos/slice.py`](./demos/slice.py) and follow along with some examples
of how we can use this slice notation.

### Dictionaries

Dictionaries hold key value pairs just like JavaScript objects. They can hold
different types of values, strings, integers, even functions, so they function
almost the exact same as Objects in JavaScript. The only difference is that
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

#### Accessing and Modifying Dictionaries

Once you've made a dictionary, you can start adding values using bracket
notation. The value inside the bracket will be the key, so it has to either be
hashable, or representing a variable that is.

```py
# Making an empty dictionary
my_dictionary = {}
print(Dict)
# => {}

# Adding elements one at a time
my_dictionary[0] = 'Hello'
my_dictionary[2] = 'World'
my_dictionary[3] = 1
print(my_dictionary)
# => {0: 'Hello', 2: 'World', 3: 1}

# Adding tuple of values
# to a single Key
my_dictionary['value_set'] = 2, 3, 4
print(my_dictionary)
# => {0: 'Hello', 2: 'World', 3: 1, 'value_tuple': (2, 3, 4)}
```

The same bracket notation is used for reassigning values.

Keys are case-sensitive, so if you are reassigning a value and capitalize your
key, you'll just create a entry in your dictionary.

```py
# Updating existing Key's Value
my_dictionary[2] = 'Nerd'
print(my_dictionary)
# => {0: 'Hello', 2: 'Nerd', 3: 1, 'value_set': (2, 3, 4)}
```

### Looping with Lists and Dictionaries

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
  0: 'zero',
  1: 'one',
  2: 'two'
}

# Logs the value associated with each key
# 'zero', 'one', 'two'
for key in my_dictionary:
  print(my_dictionary[key])
```

### Sets and Tuples

#### Code Along: Sets

Sets are similar to lists, with some major differences:

1. Sets are unordered, so there aren't indexes to identify values
2. We define sets with curly braces `{}` instead of square brackets `[]`
3. Sets **cannot contain duplicates**. If we try to add a value to a set that
already exists, it will be ignored.

```py
my_set = {1, 2, 3}
type(my_set) # <class 'set'>

# We can use the `add` method to add to our set
my_set.add(8) # This new value will be added to our set
my_set # {1, 2, 3, 8}
my_set.add(3) # This duplicate value will be ignored
my_set # {1, 2, 3, 8}

# We can use the `in` keyword to check if a value is in our set
4 in my_set # True

# Alternatively, we can use `not in` to check for the opposite
9 not in my_set # True

# We can use the `clear` method to empty our set
my_set.clear()
my_set # {}
```

#### Code Along: Tuples

Tuples are also similar to lists. They are ordered and indexed collections that
support iteration, however they are **immutable** which means once they are
defined, their contents cannot change.

```py
my_tup = (1, 2, 3)
my_tup # (1, 2, 3)
type(my_tup) # <class 'tuple'>

# Cannot mutate (change) tuples
my_tup[0] = 4
# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
# TypeError: 'tuple' object does not support item assignment
```

Tuples are often used to return multiple values from a function:

```py
def nums(x, y):
  return (x, y) # Return both values as a tuple

nums(4, 5) # (4, 5)
```

## Classes

### Abstraction and Modeling

Back in JavaScript land, we discussed modeling objects by abstracting out
relevant data from complex systems. Things like the weather, transportation,
power grids, etc. could all be abstracted into simpler "models" that can be used
in programming.

From [`js-object-modeling`](https://git.generalassemb.ly/ga-wdi-boston/js-object-modeling):

> A **model** is a simplified or partial representation of the real thing.
> Models are based on a real entity, and are used to represent the real entity
> in a system. Modeling is great for planning, designing, discussing, and
> understanding a system.

Let's think back to how we abstracted and modeled a crayon. Our crayon models
had different properties or traits, like `color` and `length`. They also
had functionality that were defined as **methods**, like `getUsedUp`, which
reduced the crayon's length when it was called.

We will be using similar concepts in Python, though we will refer to the traits
defined on our classes as **attributes** instead of properties. This is a small
vocab shift, but it's important to use the right words when working in different
languages.

| Purpose | JavaScript | Python |
| ---- | ---- | ---- |
| trait, description | property  | attribute  |
| functionality   | method  | method  |

#### Demo: Class Syntax

Let's say we wanted to recreate our crayon model from our JavaScript days.

We will use the keyword `class` to define our classes, and will need a
special built-in method called `__init__` to get our class set up with any
initial values it might need. This is similar to JavaScript's `constructor`
method, but in Python we refer to methods with the double underscore ("Dunder")
as "magic methods" where this one's job is to initialize our class instance. We
will never write these methods ourselves, be we will use the ones built in to
Python, like `__init__`.

Each of the methods on our class (including `__init__`) need to be defined with
a parameter called `self`. This will be the way we refer to the instances of our
class once we start creating them. `self` is similar to JavaScript's `this`
keyword.

```py
class Crayon():
  def __init__(self, color, length):
    self.color = color
    self.length = length
    self.form = 'solid'

  def draw(self):
    if self.length > 0:
      self.length -= 1
    else:
      print('This crayon is all used up!')

  def melt(self):
    if (self.form == 'solid'):
      self.length = 0
      self.form = 'liquid'
    else:
      print('This crayon is already melted!')
```

We can create new **instances** of our class by calling the class like a method.
We don't need to use a special keyword like `new` to do this.

```py
blue_crayon = Crayon('blue', 5)
yellow_crayon = Crayon('yellow', 10)
```

Our instances will hold the values initialized in `__init__`, so our
`blue_crayon` should have a `color` of `'blue'` and a `length` of `5`.

Find our crayon class in [`./demos/crayon.py`](./demos/crayon.py).
In there, we can create new instances of our `Crayon` class and run the script
to see how our instances function.

#### Lab: Coffee Class

Now you try!

Write a `CoffeeCup` class in [`./labs/coffeecup.py`](./labs/coffeecup.py) using
the following specifications:

- Should keep track of a `capacity` that is the total coffee it can hold.
- Should keep track of an `amount` that is the current coffee in the cup.
- Should set the initial value of `amount` to be 0.
- Should be able to `fill` up our cup, making `amount` equal to `capacity`.
- Should be able to `empty` our cup, setting `amount` to 0.
- Should be able to `drink` from the cup.
  - Accept a parameter of how much was drunk to be subtracted from `amount`.
  - If the cup's `amount` is 0, print a message saying the cup is empty.
  - If the cup's `amount` is less than the amount being drunk, print a message saying there's not enough coffee.

### Class Inheritance

Inheritance allows us to build new classes out of old classes. It allows us to
extend functionality defined in a parent class and create children classes that
use, compartmentalize, and expand on different pieces of that functionality.

Inheritance models natural hierarchies and relationships that we're used to
thinking about in the world. We can define one general class to model something
like a `Car` and then inherit the methods and properties of the class to make
new classes out of the first class, like `Truck` and `Sedan`.

When we say sub-classes, or child classes, inherit methods and properties from
a parent class we mean the child class has access to all of the functionality
of it's parent, and it can define it's own functionality on top of that.

#### Demo: Basic Inheritance

Let's look at an example of our `Car`/`Truck` inheritance modeling:

```py
class Car:
  gas = 0
  seats = 4
  def __init__(self, color, tank_size):
    self.color = color
    self.tank_size = tank_size

  def drive(self, distance):
    if self.gas > 0:
      self.gas -= distance
    else:
      print('Empty tank! Fill me up!')

  def fill_tank(self):
    self.gas = self.tank_size

class Truck(Car):
  seats = 2
  def __init__(self, color, tank_size, bed_size):
    super().__init__(color, tank_size)
    self.bed_size = bed_size

big_red_truck = Truck('red', 50, 12)
big_red_truck.fill_tank()
big_red_truck.drive(5)
print(big_red_truck.gas)
# 45
print(big_red_truck.seats)
# 2
```

There's two new pieces of syntax used in the code above.

1. Class definitions can accept a parameter specifying what class they inherit
  from: `class Truck(Car)`
2. Child classes can invoke a method called `super()` to gain access to methods
  defined in the parent class and execute them: `super().__init__(color, tank_size)`

Classes can also inherit from multiple parents by accepting multiple class
parameters in their definition:

```py
class ChildOfMany(ParentOne, ParentTwo, ParentThree):
  ...
```

#### Lab: Modeling Shapes with Classes

A `Rectangle` is a `Shape`, and a `Square` is a `Rectangle`.

Create a `Rectangle` class in `labs/shapes.py` that inherits from the
`Shape` class defined in that same file. You will need to define an `__init__`
method inside `Rectangle` to take two sides of different lengths. Since all
rectangles have four sides, you can set a default value for `num_sides` inside
`Rectangle`'s initialization method by calling `Shape`'s `super` method.

Requirements for `Rectangle`s:

- Rectangles should be instantiated with the syntax `Rectangle(3, 4)`, for
  example, where the created rectangle has a length of 3 and a width of 4.
- Instances of `Rectangle` should respond to the `calculate_area` method and
  give the correct result.

Next, create a `Square` class in the same file that inherits from the
`Rectangle` class.

Requirements for `Square`s:

- Squares should be instantiated with `Square(4)` to create a square with all
  sides equal to 4.
- Instances of Square should respond to the `calculate_area` method and give
  the correct result.
- Do not override anything that doesn't need to be overridden.

## Additional Resources

-

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
