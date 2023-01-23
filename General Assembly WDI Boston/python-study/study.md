# Python Study

## Python Introduction

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

> Note: There have been a couple versions of Python, and you may see tutorials
> out there that use version 2. Be careful to not get caught up in Python2 -
> this version is officially EOL (end of life) as of 2020, so we should use
> Python3 instead.

### The Python REPL

Python also comes with an easter egg (hidden joke), if you ever need a reminder
of it's goals. To see this, we can step into the REPL. There are two possible
commands we can use to step into the Python REPL environment, depending on how
many Python versions you have installed.

#### Practice

Follow the steps outlined below.

1. Run `python --version && python3 --version` in the terminal. You should see
something like this:

```sh
$ python --version && python3 --version
Python 2.7.16
Python 3.7.7
```

**If the first version printed (the version of `python`) starts with `2` like
the example above, you have to use `python3` instead of `python` for running
all scripts and other commands**. If both versions are the same, you can safely
use `python` or `python3` interchangeably. Keep this in mind moving forward,
and double-check that you are using the correct python version if you run into
strange bugs.

2. Depending on the output from the previous command, run either `python` or `python3` and hit enter to step into the Python REPL.

3. Once we are in the REPL, you should see `>>>`, which is where we can type our
code! Type in `import this` and hit enter.

4. This prints out the "Zen of Python" which was written as a set of guidelines
for the design of the Python language.

Paste the "Zen of Python" below:

```md
<!-- your answer here -->
```

You can run `exit()` or hit `cmd+D` to exit the REPL.

## Syntax

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
comments in Python, but we don't normally since single-line comments are often
considered more readable:

```py
# One comment on it's own

# A group of
# line separated
# comments
```

## Primative Types

Primitive types in Python will look very similar to primitive types in
JavaScript, with a few important differences:

1. In Python, we use `None` to represent nothingness. This would be similar to
`null` in JavaScript. Python does not have an `undefined` (more on this later).
2. In Python, booleans are represented with **capitalized** `True` and `False`.
3. In Python, [numbers](https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex) can be integers (`23`, `-4`), floats (`0.3`, `-8.9`),
or ["complex"](https://www.journaldev.com/23435/python-complex-numbers-cmath)
(`2+3j`). We won't worry about complex numbers during this course, but should
be careful with the difference between a `float` and an `int`. JavaScript
didn't have this difference.

> Note: In Python, `str`, `int`, `float`, `bool` are class names. These are
> common parameter and variable names in JavaScript, but are reserved words in
> Python.

### Determining Value Types

To find out a value's type in Python, we can use the built-in `type`
function, which will print out the value of the primitive type, such as `int`.

#### Practice

In the Python REPL, run each command below and paste the output in place of
`<your-answer-here>`:

```py
>>> type(5)
<your-answer-here>
>>> type(True)
<your-answer-here>
>>> type(9.3)
<your-answer-here>
>>> type('hello world')
<your-answer-here>
>>> type(None)
<your-answer-here>
```

### Type Conversion

If we wanted to convert a variable's number value from an `int` to a `float`,
we can use the `int` and `float` classes. The `float` class converts input to
floating numbers, while the `int` class converts input to integers. In both
cases, these methods could take in a string value if that string contains a
number.

#### Practice

In the Python REPL, run the following commands and paste the output in place of
`<your-answer-here>`:

```py
>>> int(9.9)
<your-answer-here>
>>> float(10)
<your-answer-here>
>>> int('200')
<your-answer-here>
```

## Operators

Most operators will be the same in Python as they were in JavaScript, like our
math operators `+`, `-`, `*`, `/`, etc. and a lot of the [comparison operators](https://docs.python.org/3/library/stdtypes.html#comparisons).
There are, however, a few differences outlined in this table:

| JS | Python |
|---|-----|
| `===`  | `==`  |
| `!==`  | `!=`  |
| `\|\|` | `or` |
| `&&`  |  `and` |
| `!`   | `not`  |

The [boolean operators](https://docs.python.org/3/library/stdtypes.html#boolean-operations-and-or-not) in Python are words
rather than symbols, as Python is all about readability.

**Note:** To divide in Python, we can use the regular `/` operator we are used
to using in JavaScript. However, this will treat the output as a float
(decimal) so to force integer division, we can use `//`. Integer division will
remove the fractional leftovers.

```py
15 / 6
# output will be 2.5
15 // 6
# output will be 2
```

### Practice

In the Python REPL, run the following expressions and paste the output in place
of `<your-answer-here>`:

```py
>>> 5 == 5
<your-answer-here>
>>> 5 != 4
<your-answer-here>
>>> 5 == 5 and 5 > 9 / 2
<your-answer-here>
>>> not True
<your-answer-here>
>>> 4 + 6 < 8 or 7 > 8
<your-answer-here>
```

## Declaring Variables

In Python, we don't use `let`, `const`, or `var` to declare variables. Instead,
the first time we use a variable it will be "declared" and any time after that,
it will be "referenced." Convention is to use `snake_case` to declare local
variables.

```py
my_awesome_variable = 6
print(my_awesome_variable)
```

> Note: The `print` method is built-in to Python and works just like
> `console.log` did in JavaScript.

We cannot declare variables without values. If we write a variable name without
an assignment operator (`=`) and a value to the right, Python will try to locate
that variable in it's memory. If the variable was not previously declared
**with a value**, it will not exist in memory and Python will return an error.

```py
>>> my_variable
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'my_variable' is not defined
```

## Strings

In JavaScript, we used community guidelines known as Standard JavaScript to tell
us to use single quotes for our strings. However, we really could have used
either depending on what rules we wanted to follow.

Python is the same way! Pick single or double quotes and stick with it;
Python's community standards known as pep8 has no preference. We can use the
other type of quote for quotes inside quotes to avoid backslashes.

```py
"this string uses double quotes with 'single quotes' inside"
'this string uses single quotes with "double quotes" inside'
# vs:
'this string uses single quotes with \'escaped single quotes\'inside'
"this string uses double quotes with \"escaped double quotes\"inside"
```

[Python String Documentation](https://docs.python.org/3/library/stdtypes.html#textseq)

### Interpolation

String interpolation in Python will feel very similar to interpolation in
JavaScript, but instead of using backticks to surround our template strings, we
identify them with the letter `f` (for "format") in front of our quotes.

```py
state = "Washington State"
year = 1889
n = 42
my_message = f"{state} was the {n}nd state to join the union in the year {year}."
# "Washington State was the 42nd state to join the union in the year 1889"
```

In addition to these "format strings" or "f-strings", all strings also come
with a [`format()`](https://docs.python.org/3.8/library/stdtypes.html#str.format) method for interpolating strings.
To use this method, you can specify empty curly braces and pass values as
parameters and the parameter values will fall in line in the order the curly
braces appear.

```py
template = "My name is {} and I like {}"
template.format("Steve", "Cheese")
# "Steve" is the first argument, and will replace the first set of {}
# "Cheese" is the second argument, and will replace the second set of {}
'My name is Steve and I like Cheese'
```

You can also give names to the curly braces and use the `format()` method to
send them named argument values:

```py
template = "My name is {name} and I like {food}"
template.format(food="Cheese", name="Steve")
# The named argument `food` has the value `"Cheese"`, which is interpolated
# into the {food} named spot.
# The named argument `name` has the value `"Steve"`, which is interpolated
# into the {name} named spot.
# Order does not matter with named arguments in Python.
'My name is Steve and I like Cheese'
```

It's good to know about the `format()` method, but f-strings are newer and
are preferred in our version of Python, so try to get comfortable using them
instead. Here's the same example as above, but using f-strings:

```py
name = "Steve"
food = "cheese"
template = f"My name is {name} and I like {food}"
'My name is Steve and I like cheese'
```

## Control Flow

### Conditionals

[Conditionals](https://docs.python.org/3/tutorial/controlflow.html#if-statements) (if/else statements) in Python use colons `:` to identify blocks,
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

#### Practice: Python VS JS

```js
if (5 > 9 || 9 > 0) {
  console.log('We hit the if block')
} else {
  console.log('We hit the else block')
}
```

Convert the above JavaScript code into Python below. Test your code using the
REPL.

```py
# Python code goes here
```

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

#### The `while` Loop

Try running this `while` loop example in the REPL. Notice we change the value
of `n` explicitely. We can count by 1, 2, 5, 10 - anything we want!

```py
n = 0
# This while loop will iterate from 0 to 9, counting by 2's
while n < 10:
    print(n)
    # We have the control to iterate `n` as we choose
    n += 2
```

#### The `for` Loop

Python [`for` loops](https://docs.python.org/3/tutorial/controlflow.html#for-statements) always act on sequences, like arrays. They will always
automatically pull things out of a sequence and loop through those things one
by one.

Try running the following `for` loop examples in the REPL. Notice how we cannot
control how the `for` loop iterates. It will always run through every item in
the given sequence.

```py
# This for loop will iterate over a "range" of numbers from 0 to 9
# Ranges in Python are like lists of numbers
for i in range(0, 10):
    if i % 2 == 0:
        print(f"{i} is even")
    else:
        print(f"{i} is odd")

# This for loop will iterate over an array of strings
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

#### Practice: Python VS JS

```js
for (let i = 0; i < 5; i++) {
  console.log(i)
}
```

Convert the above JavaScript code into a Python `for` loop below. Test your code
using the REPL.

```py
# Python code goes here
```

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
> [PEP 257 - Docstring Conventions](https://www.python.org/dev/peps/pep-0257/#what-is-a-docstring)

```py
# Prints the docstring from the `say_hello` method
print(say_hello.__doc__)
```

### Default Argument Values

We can define functions with [default values for arguments](https://docs.python.org/3/tutorial/controlflow.html#default-argument-values), which will
change how we can use them later on!

Rather than working in the REPL this time, let's take a look at the code in
[`./bin/functions.py`](./bin/functions.py) and follow the instructions in the
file to see how functions work with default values and different input
arguments. We can run python files with `python` (or `python3`). Run the file
with `python bin/functions.py` (or `python3 bin/functions.py`).

The last example invocation, `move()`, results in an error - why? Explain below:

```md
your answer here
```

### Keyword Arguments

Python functions also support what is called "keyword" or "named" arguments.
Functions can accept ordered, "positional" arguments like how they worked in
JavaScript, or named arguments based on the defined parameters.

We actually saw these keyword arguments already, when we looked at the
`format()` string method.

```py
# Function defined with two parameters, `arg1` and `arg2`
def my_func(arg1, arg2):
    print(arg1, arg2)

# Invoke the function with positional arguments
# This depends on order - the first argument will map to the first param
# and the second argument will map to the second param
my_func(1, 2)

# Invoke the function with keyword arguments
# Order doesn't matter here, the argument names will map to the correct param
my_func(arg2=2, arg1=1)
```

The two invocations above will work the same, printing out `1 2` based on the
values of `arg1` and `arg2`.

### Returning Tuples

Python has a datatype called a `tuple` which is similar to an array. Sometimes
a nice way to remember what Tuples are is by thinking of "mulTuples".

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
statement. Examine and run the code in [`bin/tuples.py`](./bin/tuples.py) for
an example of this.

## Practice: FizzBuzz!

Remember good ol' FizzBuzz? Let's open up `bin/fizzbuzz.py` for your work.

Write a method called `fizzbuzz` that accepts a integer paramater `max_num`.
The function should iterate from 1 to `max_num` and print out each number.
However, if a number is divisible by 3, instead of printing the
number, your program should print the word `"Fizz"`; for numbers divisible by 5,
it should print `"Buzz"`; for numbers divisible by both 3 and 5, it should
print `"FizzBuzz"`.

For example:

```py
# Invoke your function with the max number
fizzbuzz(16)

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

To test your code, navigate to the root of this repository and run
`python bin/fizzbuzz.py` (or `python3 bin/fizzbuzz.py`).

> Running a script in this way should seem familiar, since it's exactly what we
> were doing with node in Unit 1. It's a deliberate similarity - Node was
> modeled off of other console-based runtime environments, as a way of giving
> JavaScript a solid platform for running on the server side.

## Additional Resources

### Try More:

- [Odd or Even Practice Problem](https://www.practicepython.org/exercise/2014/02/05/02-odd-or-even.html)
- [CodingBat Practice Problems](https://codingbat.com/python)

### Dive Deeper:

- [Type Conversion in Python](https://www.geeksforgeeks.org/type-conversion-python/)
- [Tuples in Python](https://www.geeksforgeeks.org/tuples-in-python/)
- [Keyword "Named" Arguments in Python](https://treyhunner.com/2018/04/keyword-arguments-in-python/)
- [The `range` Function](https://docs.python.org/3/tutorial/controlflow.html#the-range-function)
