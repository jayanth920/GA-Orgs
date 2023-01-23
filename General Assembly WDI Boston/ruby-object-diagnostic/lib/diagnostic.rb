# frozen_string_literal: true

require 'ostruct'
Response = OpenStruct.new

##
# For questions which ask for a response but do not provide a
# `Response.something =` assignment, write code that meets the requirements
# using idiomatic and conventional Ruby. Running the tests and carefully
# inspecting messages can help if you've named something incorrectly.
#
# For questions which **do** provide a `Response.something =` assignment, you
# should replace whatever is assigned with your answer. For example, if the
# answer to a question is the `true` boolean, you would write:
#
#   Response.wdi_is_awesome = true
##

##
# Create a Person class, with attributes name, age, and location. All three
# attributes should be defined when you instantiate a new Person. Name should be
# readable and writeable, age should only be readable, and location should only
# be writable.

##
# your response here
##

# Instantiate a new Person object using arguments "Dave", 32, and "Ohio".
# Then change this Person's location property to "Somerville".
# Finally, `dave` is assigned to `Response.dave` below.

dave = nil
# replace nil with your new Person object using arguments "Dave", 32, and "Ohio"
# change this Person's location property to "Somerville".
Response.dave = dave

##
# Create another class called Developer that inherits from Person.
# Give it a new instance method called 'solve_problems',
# which returns the string "think think think".

##
# your response here
##

##
# Study the code below before responding.

# Animal Class
class Animal
  def initialize
    @sound = nil
  end

  def say_hello
    puts "I am a #{self.class.name}, and I go '#{@sound}'"
  end
end

# Cat Class inherits from Animal
class Cat < Animal
  def groom
    puts 'lick... lick...'
  end
end

# HouseCat class inherits from Cat, then Animal
class HouseCat < Cat
  def initialize
    @sound = 'meow'
  end
end

## What will be the output from calling `HouseCat.new.say_hello`?
# replace nil with your response
Response.housecat_noise = nil

## Explain why this would be the output, based on the method lookup chain.
# your response as a comment here
##

##
# Define a new class, 'Lion', which (a) inherits from 'Cat',
# (b) uses the 'Carnivorous' module below as a mixin, and
# (c) adds a new method called `roar`, which prints out "ROAR!"

# Carnivorous module definition
module Carnivorous
  def can_eat_meat?
    true
  end

  def eat_meat(food)
    if food.class == 'Animal'
      puts "NOM NOM NOM. #{food.class} is delicious"
    else
      puts 'Yuck!'
    end
  end
end

##
# your response here
##

# #
# What are some of the advantages of using composition (i.e. mixins)
# over using direct inheritance?

##
# your response as a comment here
##

##
# Fix the 'ComboAttack' class below so that calling
# `ComboAttack.new.punch.move('left').kick.damage` doesn't cause an error.
#
# Then, create a new class method called "possible_moves",
# which returns the string "kick, move, punch"

# ComboAttack Class definition
class ComboAttack
  attr_reader :moves, :damage

  def initialize
    @moves = []
    @damage = 0
  end

  def punch
    @moves << 'punch'
    @damage += 5
    @damage *= multiplier
  end

  def move(direction)
    @moves << "move #{direction}"
    @damage *= multiplier
  end

  def kick
    @moves << 'kick'
    @damage += 10
    @damage *= multiplier
  end

  private

  def multiplier
    case moves
    when %w[punch move\ left kick]
      1.5
    when %w[kick punch move\ up]
      2
    else
      1
    end
  end
end
