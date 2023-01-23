# ----- Intro ----- #
# Author: George Banis
# Version: 1.0
# Date Modified: 2014/09/26

# ----- Why Use Classes? ------ #

# To group datatypes and methods and create flexible/reusable code.

# ----- Basics ----- #

# class definition (most basic)
# use CamelCase for class names
class Guitar
end

# Creating a new Guitar
# This code will:
#   1. creates a new guitar object that is empty
#   2. if there is an 'attr_accessor' creates getter/setter methods for attributes named with symbols
#   3. if we have 'initialize' method it runs it passing along arguments from '.new'

telecaster = Guitar.new

# ----- More Class Details ----- #

class Bass

  # Shortcuts the creation of methods to get/set attributes
  attr_accessor :num_strings

  # Defines a SETTER method for 'num_strings'
  # Returns 'num_strings'
  def num_strings(num_strings)
    @num_strings = num_strings
  end

  # Defines a GETTER method for 'num_strings'
  # Returns 'num_strings'
  def get_num_strings
    @num_strings
  end

  # Defines initialize method used when we call '.new'
  # Requires 'name'
  # Returns 'name'
  def initialize(name)
    @name = name
  end

# ----- Inheritance ----- #

# Defines an 'ElectricGuitar' clsass that inherits everything from its parent class 'Guitar'
class ElectricGuitar < Guitar
  # Defines an 'initialize' method for ElectricGuitar
  #   that requires a 'name' parameter
  #   but also accepts a 'pickups' parameter.
  # If we don't parse 'pickups' parameter it will use default value 'magnetir' for 'pickups'.
  def initialize(name, pickups='magnetic')
    # 'super' will execute the initialize of the parent class, 'Guitar'.
    # Make sure it has equal parameters to its parent's initialize method.
    # Note: We can use 'super' in methods other than 'initialize'.
    #   In that case, it will call the method that has the same name as
    #   the method that 'super' is in.
    super(name)
    @pickups = pickups
  end

end

# ----- Creating Objects ----- #

# works
fender = Guitar.new 'Fender'

# works but rather not use parentheses
fender_2 = ElectricGuitar.new('Fender')

# works and sets @pickups = 'magnetic' by default
gibson = ElectricGuitar.new 'Gibson'

# works but now sets @pickups = 'piezo'
epiphone = ElectricGuitar.new('Epiphone', 'piezo')

# does NOT work - number of arguments error - need at least 1 parameter
broken_guitar = ElectricGuitar.new

# does NOT work - number of arguments error - can pass max 2 params
broken_guitar_2 = ElectricGuitar.new('Godin', 'magnetic', 'no_warranty')
