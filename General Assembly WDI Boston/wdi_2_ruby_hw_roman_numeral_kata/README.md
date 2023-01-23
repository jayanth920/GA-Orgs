# RSpec/TDD Roman Numeral Kata Homework

Use TDD to write a method `to_roman` that will accept a single Integer as an argument and return a String with the value being the equivalent [Roman Numeral](http://en.wikipedia.org/wiki/Roman_numerals). 

Then write a `to_arabic` method that will accept a single String argument (a Roman Numeral) and will return its equivalent [Arabic Numeral](http://en.wikipedia.org/wiki/Arabic_numerals) as an integer.

This is a common TDD programming challenge. This should work for positive integers from at least 1 to 2000.

You do **not** need to write any input/output prompts for this program.

### Testing Method

* Write a single test that fails
* Write additional code that makes that test pass, and doesn't break prior tests
* Once this passing test is finished, do a git commit with a good commit message that describes your work.
* Repeat until complete

At the end of this exercise, you should have a git commit for every test, and each commit should light up green on Travis when I look at them.

## BONUS STAGE - HARD MODE UNLOCKED

Write a `RomanNum` class which will hold the above logic. It should have a `to_i` method that will return the number as an [Arabic Numeral](http://en.wikipedia.org/wiki/Arabic_numerals). If I attempt to initialize a new RomanNum with an invalid string, it should raise an appropiate error. So I should be able to do the following. 

```ruby
number = RomanNum.new("X")
puts number # prints "X" to the screen
number.to_i # Returns the integer 10
```

Then *extend* the FixNum class with a `to_roman` method which will return an instance of the `RomanNum` class. The following code should work 

```ruby
number = 10
roman_number_object = number.to_roman # Returns a RomanNum object with value of "X"
puts roman_number_object # Prints "X" to the screen
```

