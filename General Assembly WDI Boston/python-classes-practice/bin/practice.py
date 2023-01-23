response = {}
##
# For questions which ask for a response but do not provide a
# `response['something'] =` assignment, write code that meets the requirements
# using idiomatic and conventional Ruby. Running the tests and carefully
# inspecting messages can help if you've named something incorrectly.
#
# For questions which **do** provide a `response['something'] =` assignment, you
# should replace whatever is assigned with your answer. For example, if the
# answer to a question is the `true` boolean, you would write:
#
#   response['wdi_is_awesome'] = true
##

## QUESTION 1.1:
# Create a `Person` class, with attributes name, age, and location. All three
# attributes should be defined when you instantiate a new Person. Give the
# class a method `description` which returns a string description of the person
# using their age, name, and location attributes.
#
# Example: Person('Paul', 25, 'Georgia').description() should return
# "My name is Paul, I'm 25 years old, and I live in Georgia."

##
# your response here
##

## QUESTION 1.2:
# Instantiate a new Person object using arguments "Dave", 32, and "Ohio".
# Then change this Person's location property to "Somerville".
# Finally, `dave` is assigned to `response.dave` below.

# First, replace None with your new Person object using arguments "Dave", 32, and "Ohio"
dave = None

# Then, change dave's location property to "Somerville".

response['dave'] = dave # Don't touch this line!

## QUESTION 2:
# Create another class called Developer that inherits from Person.
# Give it a new instance method called 'solve_problems',
# which returns the string "think think think".

##
# your response here
##

## QUESTION 3:
# Study the code below before responding.

# Animal Class
class Animal:
  """Defines methods for the Animal class"""
  def __init__(self):
    self.sound = None

  def say_hello(self):
    print(f"I am a {type(self).__name__}, and I go '{self.sound}'")

# Cat Class inherits from Animal
class Cat(Animal):
  """Defines methods for the Cat class"""
  def __init__(self):
    super().__init__()

  def groom(self):
    print('lick... lick...')

# HouseCat class inherits from Cat, then Animal
class HouseCat(Cat):
  """Defines methods for the HouseCat class"""
  def __init__(self):
    super().__init__()
    self.sound = 'meow'

oliver = HouseCat()

## What will be the output from calling `oliver.say_hello()`?
# replace None with your response
response['housecat_noise'] = None

## Explain why this would be the output, based on the method lookup chain.
# your response here
##

## QUESTION 4:
# Define a new class, 'Lion', which (a) inherits from 'Cat',
# (b) uses the 'Carnivorous' class below as a mixin, and
# (c) adds a new method called `roar`, which prints out "ROAR!"

# Carnivorous module definition
class Carnivorous:
  """Defines methods for the Carnivorous mixin"""
  def can_eat_meat(self):
    return True

  def eat_meat(self, food):
    if (type(food).__name__ == 'Animal'):
      print(f"NOM NOM NOM. {type(food).__name__} is delicious")
    else:
      print('Yuck!')

##
# your response here
##


## QUESTION 5:
# What are some of the differences between mixins and regular classes?

##
# your response here
##

## QUESTION 6:
# Fix the 'ComboAttack' class below so that calling
# `ComboAttack().punch().move('left').kick().damage` doesn't cause an error.
#
# Then, create a new class method called "possible_moves",
# which returns the string "kick, move, punch"

# ComboAttack Class definition
class ComboAttack:
  """Defines methods for the ComboAttack class"""
  def __init__(self):
    self.moves = []
    self.damage = 0

  def punch(self):
    self.moves.append('punch')
    self.damage += 5
    self.damage *= self.multiplier()

  def move(self, direction):
    self.moves.append(f"move {direction}")
    self.damage *= self.multiplier()

  def kick(self):
    self.moves.append('kick')
    self.damage += 10
    self.damage *= self.multiplier()

  def multiplier(self):
    moves = ''.join(self.moves)
    if (moves == 'punch move left kick'):
      return 1.5
    elif (moves == 'kick punch move up'):
      return 2
    else:
      return 1
