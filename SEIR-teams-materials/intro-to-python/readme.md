[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Intro to Python

Let's start learning our second programming language!

## Prerequisites

- Fundamentals of programming in JavaScript

## Objectives

By the end of this, developers should be able to:

- Describe the history, background, and use-cases of Python
- Compare and contrast Python with a previous language
- Write basic programs in Python

## What is Python? (5 min / 0:05)

Python is a high-level, general purpose programming language created by Guido
van Rossum in 1991.  It was mainly developed for emphasis on code readability, and its syntax allows programmers to express concepts in fewer lines of code.  Not surprisingly, it is one of the most popular
programming languages. Python can be used for data
science, devops, or general purpose programming. In this class, we will be using
it as a server-side, "back-end" programming language.


### Getting Python

Before we begin, let's ensure Python is installed on your computer:

```sh
$ which python3
```

If it is _not_ installed, go ahead and install it:

```sh
$ brew install python3
```

Note that `python` and `python3` are different commands, and run different
versions of python. `python` runs python 2, which we're not using for this
course.

Run this command to see if the default `python` is correctly configured to
`python3`, which is part of the core Installfest process.

```sh
$ python --version
```

### Interacting with Python

There are a few ways that we can interact with Python:

#### By File

The first way that we can interact with Python is by running a Python file.
Python files have the extension `.py` and can be run through the command line:

```sh
cd sandbox/
mkdir py-test
cd py-test
touch app.py     # Create a Python file
python3 app.py   # Run that Python file
```

> NOTE: Running an empty Python file will not result in anything, so don't worry
> if nothing happens when you run `python3 app.py` above.

#### By REPL (Read-Evaluate-Print-Loop)

The second way that we can interact with Python code is with a tools like
IPython or the Python shell. These are both REPLs. Have we used these before?

```sh
pip3 install ipython # install IPython
ipython               # start IPython REPL
exit                  # quit IPython
python3                # start Python3 REPL
exit()                # quit Python REPL
```

> IPython is an alternative Python shell that adds a bunch of features like tab
> completion, better syntax highlighting, and the ability to inline embed
> graphics.

We'll use IPython for the first portion of this lesson.

## Fundamental Characteristics of Python

### Variables

Variables in Python are assigned by using a single equals sign (`=`):

```python
my_favorite_animal = "flying squirrel"
# => "flying squirrel"
```

Notice a few other things about the above block of code:

- We no longer need to precede new variables with `var`, `let`, or `const`. Just
  use the name of the variable!
- Variables are instantiated as they are used
- Variables are also written in `snake_case`. That means all lower case with
  words separated by underscores.
- Variable names should still be semantic

### No Semicolons

While your code will work if you close a line with `;`, common practice is not
to use them.

## You Do: Data Types (20 min / 0:25)

Start the IPython REPL in your terminal and start working through the prompts
below.

<details>
<summary>Why do we have to read all this ourselves?</summary>

This is part of the gradual release of responsibility that we have discussed and
that you have experienced during your projects, this is the part where you
become developers and you don't rely on others to teach you. Developers have to
teach themselves all the time, right now you are doing that in an environment
where you have support.

While we could re-teach you what numbers, strings, conditionals, etc. are like
in Python, you know enough about programming languages from your experience with
JavaScript to pick up on this information pretty quickly on your own. Honestly,
if we taught it to you, you'd get bored really quickly.

Because of this, the peculiarities of Python will be apparent. These are the
things you need to be aware of in the next few classes.

I will come by and check your understanding one-on-one and ask you questions

</details>

<details>
<summary>Do I have to do the exercises? Can't I just read the code?</summary>

Just reading the code wont lead to learning it, so type everything out into the
IPython REPL!

</details>

### Everything Is An Object!

Everything in Python is an **object**.

- By "object" we mean that everything has its own set of properties and methods
- Not a new concept. Data types in JavaScript had their own properties and
  methods (e.g., `string.length` or `function.bind()`)
- You will learn more about this when you dive into Python OOP next week

### Numbers

Python uses similar arithmetic operators to JavaScript

- `+`, `-`, `*`, `/`, `%`
- Same order of operations too: P.E.M.D.A.S.

```py
1 + 2 # Addition
# => 3

6 - 5 # Subtraction
# => 1

5 * 2 # Multiplication
# => 10

30 / 5 # Division
# => 6.0

31 // 5 # Note: integer division
# => 6

30 % 5 # Modulo (remainder)
# => 0

31 % 5
# => 1

3 ** 2 # Exponentiation
# => 9
```

> Are any of these different in JavaScript?

### Strings

Text, just like in JavaScript.

- Surrounded by single or double-quotes
- Python uses similar escape characters
  - [Here is a list of them](http://python-reference.readthedocs.io/en/latest/docs/str/escapes.html)

```py
name = "John"
# => "John"

full_name = "John\nDoe"
# => "John\nDoe"

print(full_name)
# John
# Doe
```

Not only can you concatenate strings, now you can multiply them too! Remember we
couldn't do that in JavaScript?

```py
# Concatenation
"Hello " + "there!"
# => "Hello there!"

# Multiplication
"Hello there! " * 3
# => "Hello there! Hello there! Hello there! "
```

#### String Interpolation

Sometimes you will want to print out a string that incorporates a variable. For
example:

```py
my_name = "Ali"
# => "Ali"

print("Hi my name is: " + my_name)
# Hi my name is: Ali
```

This works fine. Things aren't so simple when that variable is of a different
data type. Like a number:

```py
class_number = 32
# => 32

print("I am teaching SEI " + class_number)
# TypeError: must be str, not int
```

This is something JavaScript would just handle for you, but Python is more
strict. In this case, you either need to convert the variable to a string using
`str()` or use the `.format()` method. The best way of doing string
interpolation in Python is using `.format()`.

`.format()` is a string method that takes the strings to be concatenated as its
parameters. If the string contains `{}`s, the parameters fill the `{}`s in the
order passed in. If they contain a number (beginning with 0), they will be
mapped to the parameter passed to `.format()` at said index.

> Is there a similar way to format strings in JavaScript?

```python
class_number = 22

"I am teaching WDI {}.".format(class_number)
# => "I am teaching WDI 22."

person1 = "Lauren"
person2 = "Frank"
occupation = "consultant"

"{0} is a {1}. {2} is a {1} as well.".format(person1, occupation, person2)
# => "Lauren is a consultant. Frank is a consultant as well."
```

F strings are also a brand new way of doing string interpolation in Python - you
won't see them as often because they're in python 3.6 and newer, but they are
super helpful. Check your version with `python3 --version` before trying this or
it may not work!

```py
class_number = 29
print(f"I am teaching SEI {class_number}.")
```

> Note the `f` at the beginning of the string!

This is similar to Javascript template string syntax!

### Booleans

They are `True` and `False` (note the capitals!)

- We'll be using them in conditionals and comparisons just like in JavaScript

Comparison operators in Python are nearly identical to JavaScript. However, the
check for equality is always for both value and data type (i.e. strict
comparison).

- `<`
- `>`
- `<=`
- `>=`
- `==`
- `!=`

> In JavaScript, what is the difference between `==` and `===` ?

Logical operators are also similar.

- and, or, not

|                      |              JavaScript              |           Python            |
| :------------------- | :----------------------------------: | :-------------------------: |
| logical operators    | `&&`, <code>&#124;&#124;</code>, `!` |     `and`, `or`, `not`      |
| relational operators |  `==` `!=` `>` `<` `>=` `<=` `===`   | `==` `!=` `>` `<` `>=` `<=` |

### None

Python's "nothing".

- The equivalent of JavaScript's `null`
- it is falsey
- Always written with a capital letter: `None`

### Conditionals

Pretty similar to JavaScript, with some differences:

- No parentheses or curly brackets required
- Begin blocks using `if`, `elif` and `else`
- Use colons after each condition
- Indentation matters! 4 spaces is the standard indent.

Here's an example where we check for height at a roller coaster:

> Write the above code in a `roller_coaster.py` file and run it from the command
> line.

```py
print("Welcome to the Iron Rattler! How tall are you (in feet)?")
height = int(input())

if height < 4:
    print("Sorry, you'll fly out of your seat if we let you on.")
elif height < 7:
    print("All aboard!")
else:
    print("If you value your head, you should not get on this ride.")
```

## Print and Input (`input` & `output`)

To print out to the console like `console.log()` does in JavaScript, we use the
`print` function:

```python
print("Hello, World!")
# Hello, World!
```

Python also makes it easy for us to accept user input from the command line
using `input`:

![input](assets/user_input.png)

## We Do: Python Bouncer (20 min / 0:45)

Back during our first few lessons on JavaScript, you used conditionals and
variables to create a Bouncer.

We'll now write a program in Python to do the same! Make a Python file for this
in your sandbox called `bouncer.py`

Here's the recap of the bouncer rules:

> If the age variable is below 21, the program should output that the person
> cannot enter because they are too young, if they are over 21 they can enter,
> and if age is not a number it outputs an error.
>
> Bonus: if age is 18 or older, but under 21, output that the person can enter
> the bar but cannot drink!

## You Do: Data Types Exercises (15 min / 1:00)

Open [Data Types](../../blob/master/data-types.py) and work through the prompts.

## Break (10 min / 1:10)

## Lists & Collections(15 min / 1:30)

An ordered collection of related values. Same syntax as JavaScript arrays. The
data type is called a **list**.

- Square brackets
- Values separated by commas
- Zero-indexed

```python
numbers = [1, 2, 3]
# => [1, 2, 3]

animals = ["dog", "cat", "horse"]
# => ["dog", "cat", "horse"]

animals[0]
# => "dog"

animals[1] = "elephant"
# => "elephant"

animals
# => ["dog", "elephant", "horse"]
```

### List Methods

Python provides us with an extensive library of list methods we can use to
traverse and manipulate lists.

- The Python
  [documentation](https://docs.python.org/3.6/tutorial/datastructures.html) for
  `List` is a great resource for learning more about these methods
- Can't go over them all, but chances are if you could do it in JavaScript then
  you can do it in Python.

> **IMPORTANT:** You DO NOT need to memorize these. The following is just a
> sample of array methods available to you. You'll come to be more familiar with
> these as you need them and look them up in documentation.
>
> **tl;dr:** The more you Google them, the better you'll remember them.

#### `.append()`, `.extend()`, and `.pop()`

- Append inserts an item into the end of the list.
- Extend adds two arrays together.
- Pop removes an item from the end of the list. You can also supply an index to
  `pop` to remove at that index.

You can think of them in comparison to these equivalent javascript methods:

| Python | Javascript |
| ------ | ---------- |
| append | push       |
| extend | concat     |
| pop    | pop        |

```py
numbers = [1, 2, 3, 4, 5]
# => [1, 2, 3, 4, 5]

numbers.append(6)
# => [1, 2, 3, 4, 5, 6]

numbers.append([1, 2, 3])
# => [1, 2, 3, 4, 5, 6, [1, 2, 3]]

numbers.extend([7, 8, 9])
# => [1, 2, 3, 4, 5, 6, [1, 2, 3], 7, 8, 9]

numbers.pop()
# => 9

numbers
# => [1, 2, 3, 4, 5, 6, [1, 2, 3], 7, 8]

numbers.pop(0)
# => [2, 3, 4, 5, 6, [1, 2, 3], 7, 8]
```

Python also has a few methods that JS doesn't have:

### `list.insert(index, value)`

```
Insert an item at a given position. The first argument is the index of the element before which to insert, so a.insert(0, x) inserts at the front of the list, and a.insert(len(a), x) is equivalent to a.append(x).
```

```py
numbers = [3, 1, 5, 2, 4]

numbers.insert(2, 11)

# => [3, 1, 11, 5, 2, 4]
```

### `sorted()`

Organizes list values from lowest to highest. Numbers and strings.

```py
numbers = [3, 1, 5, 2, 4]
# => [3, 1, 5, 2, 4]

sorted(numbers)
# => [1, 2, 3, 4, 5]
```

### `.remove()`

- Removes an argument from a list
- If there are multiple instances of that argument, it will delete just the
  first.

```py
numbers = [3, 1, 2, 2, 4]
# => [3, 1, 2, 2, 4]

numbers.remove(2)
# => 2

numbers
# => [3, 1, 2, 4]
```

## Dictionary

A Python dictionary is an unordered collection organized by key-value pairs. A
dictionary is very similar to a JavaScript object.

```py
sei_class= {
  "teacher": "Jimmy",
  "students": ["Yacko", "Wacko", "Dot"],
  "classroom": 2,
  "in_session": True,
  "schedule": {
    "morning": "Python Basics",
    "afternoon": "Enumerables"
  }
}
```

Accessing dictionary values:

```py
sei_class["teacher"]
# => "John"
```

Note that you can't do this, like you can in javascript!

```py
sei_class.teacher

# => AttributeError: 'dict' object has no attribute 'teacher'
```

Modifying dictionary values:

```py
sei_class["teacher"] = "Jimbo"
# => "Jimbo"
```

Nested values:

```py
sei_class["schedule"]["morning"]
```

### Dictionary Methods

Like lists, Python also provides us with a library of dictionary methods.

- [Again, the Python documentation is a great resource](https://docs.python.org/3/tutorial/datastructures.html#dictionaries)

> As mentioned with lists, do not worry about memorizing these methods. Just
> know how to look them up should the need arise.

#### Keys

Returns a `dict_keys` structure with all the keys in the dictionary. Can easily
be translated to a list using `list()`.

```py
sei_class.keys()
# => dict_keys(['teacher', 'students', 'classroom', 'in_session', 'schedule'])

list(sei_class.keys())
# => ['teacher', 'students', 'classroom', 'in_session', 'schedule']
```

Note that `dict_keys` is not a list. It's a specific data type, so it doesn't
have all the same methods that lists have.

## Ranges

Use ranges to quickly generate lists of numbers.

- Parentheses
- Min and max value - 1 inside `range`. Range is not inclusive, meaning that it
  includes numbers up until the second parameter but not the second parameter
  itself, similiar to using a `<` in for loops.
- Generate list using `list()` function

```py
list(range(1, 6))
# => [1, 2, 3, 4, 5]
```

You can also use ranges in for loops!

```py
for i in range(1, 6):
  print(i)

# => 1
# => 2
# => 3
# => 4
# => 5
```

### length

Python uses a special function called `len()` to get the length of different
data structures.

You can use `len()` on any iterable type, which includes lists and dictionaries.

```py
sei_class = {
  "teacher": "John",
  "students": ["Yacko", "Wacko", "Dot"],
  "classroom": 2,
  "in_session": True,
  "schedule": {
    "morning": "Python Basics",
    "afternoon": "Enumerables"
  }
}

len(sei_class)
# => 5
```

> Note that there is no array.length property!


## Functions

In Python, functions are defined like this:

```py
def double(number):
    return number * 2
```

- `def` - the Python equivalent of `function`
- `double` - the function name in the above example
- `number` - the parameter name in the above example
- Use a `:` instead of curly brackets `{}`

We invoke it like this:

```
double(3)
# => 6
```

You may have noticed that we use the same `return` notation as JavaScript.

Python functions can also establish default argument values. In the below
example, if we do not provide our `double` function with an argument, it will
default to 5

```py
def double(number=5):
    return number * 2

double()
# => 10
```

## You do: Exercise: Temperature Converter

> 15 minutes exercise. 10 minutes review.

[Temperature Converter (Python)](../../../temperature-converter-python)

## Compare and Contrast

<img src="https://media.giphy.com/media/l4FGw4d101Sa0pGTe/giphy.gif" margin-left="24%"/>

Break out in to groups of 3, then, with your group, compare and contrast again
what you know about JavaScript with what you now know about Python. 

Some things to think about:

- Syntax. How are they similar? How are they different?
- Functions & methods
- Terminology differences

## Conclusion

One of the things we said back when we were learning JavaScript is that it's
challenging to learn programming and a programming language at the same time
(but also necessary, there's no way around that). Now that you know programming
and a programming language (JavaScript), you only need to learn the new
programming language!

The more you use a language, the more comfortable you get with it. The more
comfortable you get with it, the easier it is to "think" in that language.

## You Do: Javascript vs. Python Lab 

[Convert some JS functions into Python functions to really see the differences](../../../python-v-js/blob/master/README.md)

## Additional Resources

- [Python Docs](https://docs.python.org/3/)
- [Python Starter](https://git.generalassemb.ly/dc-wdi-python-django/python-starter)
- [Python Beginner Tutorial (Docs)](https://docs.python.org/3/tutorial/index.html)


## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
   alternative licensing, please contact legal@ga.co.
