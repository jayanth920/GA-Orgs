[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Python Classes

Python is an object oriented language. Object oriented languages allow us to
create things that act like physical objects in our day-to-day lives. Every day
we interact with objects like chairs, beverages, and computers. These objects have
properties that define them, and they have things we can do with them.

## Prerequisites

- [python-iteration-methods](https://git.generalassemb.ly/ga-wdi-boston/python-iteration-methods)
- [js-object-modeling](https://git.generalassemb.ly/ga-wdi-boston/js-object-modeling)

## Objectives

By the end of this, developers should be able to:

- Understand difference between objects and classes
- Understand how classes are defined
- Understand how objects are initialized
- Understand instance variables and instance methods
- Differentiate between objects and dictionaries
- Utilize the `self` keyword
- Understand method chaining in a class

## Preparation

1. Fork and clone this repository.
 [FAQ](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/ForkAndClone)
1. Create and checkout to a new branch, `training`, for your work.

## Abstraction and Modeling

Back in Javascript land, we discussed modeling objects by abstracting out
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

| Purpose | Javascript | Python |
| ---- | ---- | ---- |
| trait, description | property  | attribute  |
| functionality, behavior   | method  | method  |

## Code-Along: First Python Class

Let's say we wanted to recreate our crayon model from our Javascript days.

Crayons have a few traits: `color`, `length`, and `form`. They also have a couple
behaviors: `draw` and `melt`.

### Flashback: JavaScript Classes

Here's how we might do this in JavaScript, as a little reminder of that
syntax:

```js
class Crayon {
    // The constructor function is what's implicitly run when we
    // create a new `Crayon` & provide initial values
    constructor (color, length) {
        // Use the `this` keyword to create new properties
        // for instances
        this.color = color
        this.length = length
        this.form = 'solid'
    }

    // Instance methods will be accessible on future Crayons
    draw () {
        if (this.length > 0) {
            this.length--
        } else {
            console.log('This crayon is all used up!')
        }
    }

    melt () {
        if (this.form === 'solid') {
            this.length = 0
            this.form = 'liquid'
        } else {
            console.log('This crayon is already melted!')
        }
    }
}
// Use the `new` keyword to create a Crayon instance
const yellowCrayon = new Crayon('yellow', 5)
// Use dot-notation to access methods/properties
yellowCrayon.draw()
console.log(yellowCrayon.length) // 4
```

### Flashforward: Python Classes

Let's see how we can convert that JavaScript code into Python
in `bin/crayon.py`.

We will use the keyword `class` to define our classes, and will need a
special built-in method called `__init__` to get our class set up with any
initial values it might need. This is similar to Javascript's `constructor`
method.

Each of the methods on our class (including `__init__`) need to be defined with
a parameter called `self`. This will be the way we refer to the instances of our
class once we start creating them. `self` is similar to Javascript's `this`
keyword.

```py
class Crayon():
    """Class for crayon objects"""
    def __init__(self, color, length):
        self.color = color
        self.length = length
        self.form = 'solid'

    def draw(self):
        """Reduces length of crayon to draw"""
        if self.length > 0:
            self.length -= 1
        else:
            print('This crayon is all used up!')

    def melt(self):
        """Changes length and form to melt"""
        if self.form == 'solid':
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

Find our crayon class in [`./bin/crayon.py`](./bin/crayon.py).
In there, we can create new instances of our `Crayon` class and run the script
to see how our instances function.

### The `self` Keyword

Like we've seen, the `self` keyword is a required parameter for instance methods,
and acts similarly to JavaScript's `this` keyword.

When we invoke instance methods like `draw` or `melt`, we won't actually send
an explicit value for `self`. Nonetheless, we have to define it as a parameter.
So what's going on there?

Turns out, Python is taking the object calling the method and passing that object
as the value for `self` automatically for us. That means we can call a method like
we're used to:

```py
blue_crayon.draw()
```

In the code above, the `blue_crayon` object will be passed along as the value
for `self` to be used in the `draw` instance method.

## Heads Up: Objects vs Dictionaries

In JavaScript, we used the term "object" to describe data structures containing
key-value pairs. In Python, we know that the key-value pair data structure is
a "dictionary", based on the `dict` class.

In Python, the term "object" is reserved for **instances of a class.** The
dot-notation we're used to using on objects in JavaScript can only be used
to access **class instance attributes or methods**, not dictionary types to
access custom key-value pairs.

```py
class MyClass:
    def __init__(self, foo):
        self.foo = foo

# a class instance, or object
my_obj = MyClass(5)
print(my_obj.foo) # 5

# a dictionary, with key-value pairs
my_dict = { 'key': 'value' }
print(my_dict.key) # AttributeError: 'dict' object has no attribute 'key'
print(my_dict['key']) # 'value'
```

Make sure to remind yourself of this distinction when working with Python -
it's easy to confuse these data structures. You can always use the `type`
built-in method to see what type of data you're working with. Use this liberally.

```py
type(my_obj) # <class '__main__.MyClass'>
type(my_dict) # <class 'dict'>
```

> Note: Dictionary types, aka data created with the literal `{}` or `dict` class
> are also objects. However, they only support dot-notation to access built-in [`dict`
> attributes or methods](https://docs.python.org/3/library/stdtypes.html#dict),
> as they are instances of the `dict` class.

## Printing Instances

If you try to print an instance of a class, Python will print a representation
of the object where you'll see what type of an object it is and it will show
you a number representing something about where the object exists in memory.

```py
print(blue_crayon)
<__main__.Crayon object at 0x10db4dfd0>
```

### Demo: `__str__`

We can write a special method `__str__` that Python will call when an object is
printed or turned in to a string. Customizing this method in our classes makes
our programs much easier to interact with.

Notice that Python goes out of it's way to improve the readability of code. Any
method that looks like `__init__` or `__str__` with underscores has a special
purpose in the language. Python uses the underscores, called "Dunders", to make
it immediately clear that _this is where the magic happens!_

We can edit our `Crayon` class' printing functionality by adding this `__str__`
method and having it return a formatted string.

```py
def __str__(self):
    """Provides string representation of crayon object"""
    return f"Color: {self.color}, Length: {self.length}cm, Form: {self.form}"
```

Then if we create our `blue_crayon` and try to print it, we should see our now
formatted output:

```py
blue_crayon = Crayon('blue', 5)
print(blue_crayon)
# Color: blue, Length: 5cm, Form: solid
```

### Code-Along: `__dict__`

Alternatively, there's also a built-in `__dict__` attribute that will give us
a dictionary representation of the instance.

```py
blue_crayon = Crayon('blue', 5)
print(blue_crayon.__dict__)
# {'color': 'blue', 'length': 5, 'form': 'solid'}
```

## Lab: Coffee Class

Now you try!

Write a `CoffeeCup` class in [`./bin/coffeecup.py`](./bin/coffeecup.py) using
the following specifications:

- Should keep track of a `capacity` that is the total coffee it can hold.
- Should keep track of an `amount` that is the current coffee in the cup.
- Should be able to `fill` up our cup, making `amount` equal to `capacity`.
- Should be able to `empty` our cup, setting `amount` to 0.
- Should be able to `drink` from the cup.
  - Accept a parameter of how much was drunk to be subtracted from `amount`.
  - If the cup's `amount` is 0, leave it be.

## Scope and Namespaces

In Javascript, we had to keep in mind where we defined our variables and
functions in order to make sure they were _in scope_ wherever we wanted to use
them later. We had concepts of global, local, and function scope to help us
determine what we could access where.

In Python, we also have the concept of scope, which is directly tied to
**namespaces**.

From the Python Docs:

> A scope is a textual region of a Python program where a namespace is directly
> accessible.
> ...
> A namespace is a mapping from names to objects. Most namespaces are currently
> implemented as Python dictionaries, but that’s normally not noticeable in any
> way (except for performance), and it may change in the future. Examples of
> namespaces are: the set of built-in names (containing functions such as
> `abs()`, and built-in exception names); the global names in a module; and the
> local names in a function invocation. In a sense the set of attributes of an
> object also form a namespace. The important thing to know about namespaces is
> that there is absolutely no relation between names in different namespaces;
> for instance, two different modules may both define a function maximize
> without confusion — users of the modules must prefix it with the module name.
> https://docs.python.org/3/tutorial/classes.html

So, we can think of these namespaces as the different scope levels we can access
in a Python program. For our classes, we should make sure we understand the
difference between the class' namespace and it's methods' namespaces.

## Class Variables

So far, we have only created attributes (variables) attached to our class
**instances**, or the objects we create with our class like `blue_crayon`.
However, we can also create variables attached to the class itself, `Crayon`.

We can do a lot with these class variables, however there are several common
patterns to be aware of:

- Storing constants (ex: storing the value of `pi` to use in the class)
- Defining default values (so we don't have to set it in `__init__`)
- Tracking data across instances (like all of the instances created)

```py
class Crayon():
    """Class for crayon objects"""
    # class attribute to track all instances
    all_crayons = []
    # class attribute to use as a default value
    # will act the same as `self.form = solid` in `__init__`
    form = 'solid'
    # class attribute to use as a constant
    company = 'Crayola'

    def __init__(self, color, length):
        self.color = color
        self.length = length
        # Add this instance to our class attribute `all_crayons`
        Crayon.all_crayons.append(self)

# ...
# Access the class constant attribute we defined
print(Crayon.company)
# 'Crayola'
```

> Note: All of these examples of class attributes will work and act the same,
> however the above code highlights different use-cases of class attributes.

## Lab: Method Chaining

How did we do method chaining in Javascript? If you don't remember, review the
[`js-function-context-this`](https://git.generalassemb.ly/ga-wdi-boston/js-function-context-this/blob/solution/lib/method-chain.js) method chaining lab.

Turns out, we can do pretty much the same thing in our Python classes, keeping
in mind the differences between Python and Javascript syntax.

Currently, running `python bin/method_chain.py` gives an error:

```py
Bleep bloop... I have orbited the earth 1 times.
Traceback (most recent call last):
  File "bin/method_chain.py", line 10, in <module>
    sputnik.orbit().orbit().orbit() # Make this work!
AttributeError: 'NoneType' object has no attribute 'orbit'
```

Fix the class in [`./bin/method_chain.py`](./bin/method_chain.py) to make
`sputnik.orbit().orbit().orbit()` work properly.

## Additional Resources

### Try More

- [Python Classes Tutorial](https://docs.python.org/3/tutorial/classes.html)
- [PyNative Classes Practice Problems](https://pynative.com/python-object-oriented-programming-oop-exercise/)

### Dig Deeper

- [Python Scope and Namespaces](https://docs.python.org/3/tutorial/classes.html#python-scopes-and-namespaces)
- [Python Class Attributes: An Overly Thorough Guide](https://www.toptal.com/python/python-class-attributes-an-overly-thorough-guide)
- [Python's Instance, Class, and Static Methods Demystified](https://realpython.com/instance-class-and-static-methods-demystified/#class-methods)

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
