[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Python

You've already learned the basics of programming with JavaScript, and you've
begun to think like a problem-solver. You've had practice reading JS code and
predicting execution by evaluating expressions in your mind.

We'll continue to reinforce the basics of programming, but this time with
Python. This may seem like a lot of material to cover in a short time, but the
truth is our task is simpler than it was when we introduced JS. Instead of
teaching you how to program, we'll focus on the differences between Python and
JS with the goal of utilizing the foundation we've already built.

"Polyglot" is a term used to refer to someone who can use two or more
languages. By learning two languages, we increase your understanding of basic
programming concepts, as well as give you an edge in the job market.

You will reference this material again and again over the next few weeks. Focus
on noting the differences between Python and JS. You should use this material
as you would the  [HyperPolyglot](https://hyperpolyglot.org/scripting)
reference: not as reading material, but as a handy place to define and
experiment with the basics of Python.

## Prerequisites

- [python-vs-js-study](https://git.generalassemb.ly/ga-wdi-boston/python-vs-js-study)

## Objectives

By the end of this, developers should be able to:

- Identify fundamentals and concepts of the Python language
- Utilize different primitive types, control structures, and methods in Python
- Use the python3 interactive shell

## Preparation

1. Fork and clone this repository.
 [FAQ](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/ForkAndClone)
1. Create and checkout to a new branch, `training`, for your work.
1. Run `pipenv shell` to get into virtual environment
1. Install dependencies with `pipenv install -e .`
    - Note: This will install everything defined in `Pipfile` as well as any local modules.
1. Open the repository in Atom with `atom .`.

## Python

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

## The Basics

### Syntax

Python will feel very similar to JavaScript, but with some syntactical
differences.

We won't be using nearly as many curly braces `{}` in Python to identify
blocks. Instead, we will use colons `:` and **whitespace** to help us write
readable code. If you were following good indentation practices in JavaScript,
you should be in a good place to get used to this in Python.

We will see examples of this later on.

### Comments

In JavaScript, we used the double forward slash `//` for comments, and could also
do multi-line comments with different syntax:

```js
// a single comment

/*
Multiple comment
lines with the
slash and star
*/
```

In Python, we use the octothorp (hashtag) `#` for comments. We can do multi-line
comments in Python, but we don't normally since single-line comments are often considered more
readable:

```py
# One comment on it's own

# A group of
# line separated
# comments
```

### Primative Types

Primitive types in Python will look very similar to primitive types in
JavaScript, with a few important differences:

1. In Python, we use `None` to represent nothingness. This would be similar to
`null` or `undefined` in JavaScript.
2. In Python, booleans are represented with **capitalized** `True` and `False`.
3. In Python, numbers can be integers (`23`, `-4`), floats (`0.3`, `-8.9`), or
["complex"](https://www.journaldev.com/23435/python-complex-numbers-cmath) (`2+3j`)
4. In Python, the string type is `str`.

#### Code-Along: Types

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

#### Code-Along: Type Conversion

If we wanted to convert a variable's number value from an `int` to a `float`,
we can use type conversion. There special methods we can use to convert types
to other types.

```py
>>> num = 6
>>> float(num)
6.0
>>> num2 = 5.4
>>> int(num2)
5
```

### Strings

In JavaScript, we used community guidelines known as Standard JavaScript to tell
us to use single quotes for our strings. However, we really could have used
either depending on what rules we wanted to follow.

Python is the same way! Pick single or double quotes and stick with it; Python's community standards known as pep8 has no preference. We can use the other type of quote for quotes inside quotes
to avoid backslashes.

```py
"this string uses double quotes with 'single quotes' inside"
'this string uses single quotes with "double quotes" inside'
```

#### Interpolation

String interpolation in Python will feel very similar to interpolation in JavaScript, but instead of using backticks to surround our template strings, we
identify them with the letter `f` (for "format") in front of our quotes.

```py
state = "Washington State"
year = 1889
n = 42
my_message = f"{state} was the {n}nd state to join the union in the year {year}."
# "Washington State was the 42nd state to join the union in the year 1889"
```

These "format strings" are pretty cool, and every string comes with a `format()`
method as well which you could also use. To use this method, you can specify
empty curly braces and pass values as parameters and the parameter values will
fall in line in the order the curly braces appear.

```py
template = "My name is {} and I like {}"
template.format("Steve", "Cheese")
'My name is Steve and I like Cheese'
```

You can also give names to the curly braces and use the `format()` function to
send them values:

```py
template = "My name is {name} and I like {food}"
template.format(food="Cheese", name="Steve")
'My name is Steve and I like Cheese'
```

It's good to know about the `format` method, but format strings are newer and
are preferred in our version of Python, so try to get comfortable using them
instead.

```py
name = "Steve"
food = "cheese"
template = f"My name is {name} and I like {food}"
'My name is Steve and I like cheese'
```

### Operators

Most operators will be the same in Python as they were in JavaScript, like our
math operators `+`, `-`, `*`, `/`, etc. There are, however, a few differences
outlined in this table:

| JS | Python |
|---|-----|
| `===`  | `==`  |
| `!==`  | `!=`  |
| `\|\|`   | `or`  |
| `&&`  |  `and` |
| `!`   | `not`  |

**Note:** To divide in Python, we can use the regular `/` operator we are used
to. However, this will treat the output as a float (decimal) so to force integer
division, we can use `//`.  Integer division will remove the fractional leftovers.

```py
15 / 6
# output will be 2.5
15 // 6
# output will be 2
```

## Control Flow

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

We have both the `while` and `for` loops we are used to in Python. These will
look similar to JavaScript, but we want to make sure we are using them the way
Python intended!

**In Python, `while` loops are used for counting, and `for` loops are used to
iterate over arrays or ranges of numbers.** That means we never use a `for` loop
where it increments a value like `i` manually. If you want to have fine-grain
control over what's happening to `i`, and you don't want to just step through
everything in a sequence one by one, then you're probably better off using a
`while` loop.

`while` loop example:

```py
n = 0
while n < 10:
  print(n)
  n += 1
```

`for` loop example:

```py
for i in range(0, 10):
  if i % 2 == 0:
    print(f"{i} is even")
  else:
    print(f"{i} is odd")
```

Python `for` loops always act on sequences, like arrays. They will always
automatically pull things out of a sequence and loop through those things one
by one.

```py
foods = ["carrots", "kale", "beets"]
for food in foods:
  print("I like", food)
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

Just like in JavaScript, we will always start our count at `0` when iterating
over lists, since that is the first index.

### Lab: FizzBuzz!

This time, rather than using the Python REPL, we're going to write a longer
program in Atom, and then run it in the terminal using `python`, a command line
Python environment. Open up the file fizzbuzz.py; in pairs, you're going to
solve "FizzBuzz", a simple programming challenge based on a childrens' game.
Essentially, your program should print out all of the numbers from 1 up to
max_num, which is a variable to which you can assign an arbitrary (positive,
integer) value. However, if a number is divisible by 3, instead of printing the
number, your program should print the word "Fizz"; for numbers divisible by 5,
it should print "Buzz"; for numbers divisible by both 3 and five, it should
print "FizzBuzz".

For example:

```py
max_num = 16

# what should print to the console

1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
```

To run your code, simply navigate to the root of this repository and run
`python bin/fizzbuzz.py`

> Running a script in this way should seem familiar, since it's exactly what we
> were doing with node in Unit 1. It's a deliberate similarity - Node was
> modeled off of other console-based runtime environments, as a way of giving
> JavaScript a solid platform for running on the server side.

## Functions

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
documentation throughout a codebase. Code will technically run fine without
them, but that would stray from Python's conventions as well as throw you into
linter message hell.

> "A docstring is a string literal that occurs as the first statement in a
> module, function, class, or method definition. Such a docstring becomes the
> __doc__ special attribute of that object."
>
> [PEP 257 - Docstring Conventions](https://www.python.org/dev/peps/pep-0257/)

Some cool things we can do with Python functions are give parameters default
values and return multiple things in one statement!

### Code Along: Default Parameter Values

We can define functions with default values for certain parameters, which will
change how we can use them later on!

Let's look at [`./bin/functions.py`](./bin/functions.py) to see
how we can use these default values.

### Demo: Returning Tuples

Python has a datatype called a `tuple` which groups "multuple" things
together. Sometimes a nice way to remember what Tuples are is by thinking of
"mulTuples".

A tuple is a collection of multiple values wrapped in parentheses.

Don't get tuples confused with lists - tuples are **not** lists. Lists support
more operations than tuples.

Tuples are immutable, which means once one is made it never changes. You can't
add or remove things from a tuple.

Python will automatically unpack tuples into variables if the number of
variables on the left side of an equals sign is equal to the number of
variables on the right hand side.

```py
tuple = ("Fireman", "Fire Department")
job_title, office = tuple
```

With that in mind, we can use tuples to return multiple values in one return
statement. Follow along with the demo in [`bin/tuples.py`](./bin/tuples.py).

## Additional Resources

### Try More:

- [Odd or Even Practice Problem](https://www.practicepython.org/exercise/2014/02/05/02-odd-or-even.html)
- [CodingBat Practice Problems](https://codingbat.com/python)

### Dive Deeper:

- [Type Conversion in Python](https://www.geeksforgeeks.org/type-conversion-python/)
- [Tuples in Python](https://www.geeksforgeeks.org/tuples-in-python/)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
