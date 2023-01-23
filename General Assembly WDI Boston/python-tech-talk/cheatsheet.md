## Basic Syntax

| Thing | What's it do | Python Syntax |
|-------|--------------|--------|
| Comments | Leave notes in code | ` # this is a comment ` |
| None (null, nil, undefined)  |  Represents nothing | `None`  |
|  Booleans |  Represent yes or no | `True` and `False` |
| Integers and Floats  | Represent whole numbers (integers) or decimal numbers (floats)  | `5` (int) and `4.5` (float) |
| Variables  |  Named storage spot for data | `my_variable = 'a string value'` |
| Strings  |  Ordered lists of characters | `"My string's so awesome"` or `'My string"s so awesome'`  |
| Interpolation  | "Interpolate" or insert expressions into strings  | if we had `x = 2` we could do `f"When you add {x} and 4 you get {x + 4}"`  |
| Incrementing  | Add or subtract by one  |  `x += 1` or `x -= 1` (NO `++` or `--`) |
| Equality Operator  | Checks for equality and returns `True` or `False`  | `==` (`!=` for NOT equal)  |
|  Conditional And |  Use to combine conditional statements. Returns `True` only if all are true |  `and` |
|  Conditional Or |  Use to combine conditional statements. Returns `True` if at least one is true |  `or` |
| Tuples  | Ordered and indexed **immutable** sequence of values. | `('value', 4, 'another value', 'value')`  |
| Sets  | Unordered sequence of **unique** values.  | `{'value', 1, 5, 'another value'}`  |
| Lists  | Ordered, number-indexed, lists of values (arrays)  |  `[1, 2, 3, 'something', 4]` |
| Dictionaries  | Unordered lists of key/value pairs (objects)  |  `my_dictionaryionary = { 'key': 'value' }` |
| Docstrings  | In-code documentation for functions and files  |  `"""This function/file does this thing"""` |


### Conditionals

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

### Loops

```py
n = 0
while n < 10:
  n += 1
```

```py
for i in range(0, 10):
  if i % 2 == 0:
    print(f"{i} is even")
  else:
    print(f"{i} is odd")
```

```py
foods = ["carrots", "kale", "beets"]
for food in foods:
  print("I like", food)
```

### Functions

```py
def say_hello():
  """Says Hello World!"""
  print("Hello, World!")

say_hello()
# Prints "Hello, World!"
```

### Classes

```py
class Crayon():
  def __init__(self, color, length):
    self.color = color
    self.length = length
    self.form = 'solid'

blue_crayon = Crayon('blue', 5)
```
