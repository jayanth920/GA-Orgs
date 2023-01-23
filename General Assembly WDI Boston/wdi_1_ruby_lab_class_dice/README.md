![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# Ruby Lab: Dice Class

## Objectives

By the end of this, students should be able to:

- Use Test Driven Development (TDD) to write tests and a class to solve a problem

## Instructions

- Fork and clone this repo.
- In `spec/dice_spec.rb`, write tests that will reflect the requirements below for a Dice class.
- Then in `lib/dice.rb`, write a Dice class to implement the tests.
- Do a pull request to turn in your work

### Dice Requirements

- There should be a Dice class
- When I create a new instance of Dice, I should be able to optionally tell it how many sides the die will have. By default, the die will have *six* sides.
- The roll method should return a random number between 1 and the number of sides the die has.

**FIXME**: Testing the randomness of the dice is a little tricky. I would use the `be_between` matcher, like `expect(die.roll).to be_between(1, maximum).inclusive` to test it.

![Gaming Dice](http://bzorch.ca/pics/dice.jpg)

#### Notes:

We are fully aware that 'dice' is plural, and 'die' is singular, we normally use the singular form of a word for class names, but writing a Die class sounded morbid.

Frequently gaming dice have 4, 6, 8, 10, 12 or 20 sides.
