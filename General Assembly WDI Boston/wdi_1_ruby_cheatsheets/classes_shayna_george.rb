# This is a cheatsheet about classes in Ruby
# Created for WDI by Shayna Cummings with assistance from George Banis, based upon class notes

# -------------- CLASSES --------------
# This is the highest level superclass. Every new class you create implicitly inherits from Object class. Classes define the state (attributes) and the behavior (methods) of an object:
class Collector

  # This is a shortcut for the creation of common methods to get/set attributes of a new object. you could manually write your own (this is actually an example of metaprogramming because it's a method that defines how create methods):
  attr_accessor :guitars, :basses

  def initialize
    guitars = []
    basses = []
  end

end

# This is the superclass of Guitar and Bass, and a subclass of Collector:
class Instrument < Collector

  attr_accessor :price

  # The Initialize method is what we call when we use .new to create a new object:
  def initialize(price)

    # This variable (with an @ symbol) is an instance variable. It is different from a local variable because it exists as long as the object exists. It is not confined to a method.
    @price = price
  end

  # This is how you *get* price of an Instrument
  def price
    @price
  end

  # This is you *set* price of an Instrument
  def price=(dollars)
    @price = dollars
  end

# This "play" method can be accessed by any object that inherits from Instrument class
  def play
    puts "buzz"
  end

end

# This a new instrument object in class Instrument:
theremin = Instrument.new(300)

# This is an example of the most minimal class definition. It inherits from Instrument:
class Guitar < Instrument
end

# You don't need to actually initialize anything to create a new Guitar object.
# 1. This is creating a new Guitar object that is empty
telecaster = Guitar.new(1200)

# 2. If there is an attr_accessor in the class, that is used to create getter and setter methods for attributes named with symbols (there is not one for "Guitar")

# 3. If there IS an initialize method defined in a class, when you create a new object (with .new) in that class, it runs and passes along arguments. If there isn't one, the new object can still be created with no attributes:

class Drum < Instrument

  # This is an optional method that will run after calling Drum.new:
  def initialize(price)

    # If you call "super" in a method of a subclass, it will execute the method of the same name in the superclass (but always make sure the number of args matches):
    super(price)
    @condition_of_heads = "good"
  end

  def play
    # So this line would bring in the method of "play" from the superclass:
    super
    puts "BANG"
  end

end

# This creates a new Drum object with price of $100 and "poor" condition of heads:
loud_drums = Drum.new 100, "poor"
# This returns both the "play" method from the superclass Instrument, and the "play" method from the Drum class:
drums.play


# Bass class inherits from Instrument
class Bass < Instrument

  attr_accessor :num_strings

  def num_strings
     @num_strings
  end

end

p_bass = Bass.new
jazz_bass = Bass.new

# When ANY method is called on an instance of a class, the machine looks for more the most low-level (specific) class in the tree, and runs the method from that class:
p_bass.num_strings


# This creates a new object in class Collector, and pulls the variables into the arrays "guitars" and "basses" that we initially defined
david = Collector.new
david.guitars << telecaster
david.basses << jazz_bass
david.basses << p_bass
