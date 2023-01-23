## Timing Notes

Start: 1pm
- Setup/Intro (5-10 minutes in case of people needing to do Python installation)
- Zen of Python (5-10 min for REPL)
- Syntax Basics (30 min)
  - Primative Types
  - Declaring Variables
  - Strings
    - Interpolation
  - Operators
  - Conditionals
  - Loops
  - Functions
- Lab: Basics (10 min)
-- 5 min break --
Back: 2pm
- Data Structures (55 min)
  - Lists (5 min)
    - Lab: List Operations (10 min)
    - Demo: Slice Notation (10 min)
  - Dictionaries (5 min)
    - Accessing + Modifying (5 min)
  - Looping w/ Lists + Dicts (< 5 min)
  - Sets (5 - 10 min) and Tuples (5 - 10 min)
-- 5 min break ---
Back: 3pm
- Classes (60)
  - Abstraction and Modeling (5 min)
    - Demo: Class Syntax (10 min)
    - Lab: Coffee Class (15 min)
  - Class Inheritance (5 min)
    - Demo: Basic Inheritance (10 min)
    - Lab: Modeling Shapes with Classes (10 min)

## Lab: Translating

```py
def check_for_as(str_input):
    """Checks if string contains 'A' """
    if str_input[0] == 'A':
        return f'The string "{str_input}" starts with "A"!'

    for i, char in enumerate(str_input):
        if char == 'A':
            return f'We found an "A" in "{str_input}" at character {i + 1}.'

    return f'There"s not a single "A" in the string "{str_input}"...'


print(check_for_as('Someone should move to the Andes.'))
print(check_for_as('After work we can finally sleep.'))
print(check_for_as('There be no beginning of the letter list here!'))
```

## Lab: CoffeeCup Class

```py
class CoffeeCup():
  def __init__(self, capacity):
    self.capacity = capacity
    self.amount = 0

  def fill(self):
    self.amount = self.capacity

  def empty(self):
    self.amount = 0

  def drink(self, drunk):
    if self.amount == 0:
      print("The cup is empty!")
    elif self.amount >= drunk:
      self.amount -= drunk
    else
      print("We don't have enough coffee to drink that much!")
```

## Lab: Shapes

```py
import math

class Shape():
  pi = 3.14159
  def __init__(self, num_sides, side_length):
    self.num_sides = num_sides
    self.side_length = side_length
    self.color = None

  def calculate_area(self):
    n = self.num_sides
    l = self.side_length
    return n * l * l / (4 * math.tan(pi/n))

class Rectangle(Shape):
  def __init__(self, height, width):
    super().__init__(4, height)
    self.height = height
    self.width = width

my_rect = Rectangle(3, 4)
print(my_rect.num_sides)
```
