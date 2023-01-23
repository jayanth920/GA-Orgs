require 'pry'

# What are the Ruby Data Types we've learned about already?

# Lets create our own Data Types using Ruby classes.

# Create a Person class/data type.
# This will act as kind "template" when creating people.

# class is a keyword in Ruby
# Q: Whats unique about keywords?
# Q: What can you not do with keywords?
class Person

end

# To create "an instance" of the Person class you must call the
# Person#new method.
# AKA Creating a person object (You'll hear both of these used.)

# The new method is inherited, we'll talk about inheritence later.
tom = Person.new
jill = Person.new

# Now we have two people, but they are alot alike. They have no attributes or properties.

# Lets give them some attributes.
# How can we distinguish btw people?
# What attributes can we can a person have. (Write these on the whiteboard)

# How about a first and last name

# Create a person class with a first and last name.
class Person

  # Every class's initialize method is invoked when we call 'new'
  def initialize(fname, lname)

    # NOTE: instance attribute ALWAYS are preceded by the '@' sign
    @first_name = fname
    @last_name = lname
  end
end

# Couple new concepts here.
# - Every class typically has an initialize method.
# - Its automatically invoked by the new method.
# - It typically has arguments that set the initial state of the
# object's attributes.
# - Instance attributes belong to each instance of a class. In this
# case each person.
# - Instance attributes are ALWAYS preceded by the @ sign.
# - Instance attributes are NEVER available outside a an object. There
# is a way that we can make these available though.

# Lets create these people again
# tom = Person.new
# jill = Person.new
# Oops
# person.rb:32:in `initialize': wrong number of arguments (0 for 2) (ArgumentError)

# Person#initialize requires two arguments
tom = Person.new('tom', 'Dyer')
jill = Person.new('jill', 'Pill')


# Lets print out tom and jill
# Just prints out some strangeness, kind of looks like a memory address?
puts "tom is #{tom}"
puts "tom is #{jill}"

# Let's try the inspect method
puts "tom is #{tom.inspect}"

# Lookup the inspect method, helpful for debugging.
# http://ruby-doc.org/core-2.1.1/Object.html#method-i-inspect
# Returns a string containing a human-readable representation of
# obj. By default, show the class name and the list of the instance
# variables and their values

# The inspect method is defined on the Ruby Object class. All classes
# are subclasses of the Object class so all classes inherit this Object
# class methods. We'll see more later on inheritence.


# Show them how to load a ruby file in pry here?
# Maybe set them up with a .pryrc ?

# puts "Tom's last name is #{tom.last_name}"
# Oops
# person.rb:83:in `<main>': undefined method `last_name' for
# #<Person:0x007feb94074248 @first_name="tom", @last_name="Dyer">
# (NoMethodError)


# An object's instance attributes are "Encapsulated" OR hidden.
# We'll use methods to determine the behavior exposed to clients.
# More Later on why.

# Remember the object instance attributes are HIDDEN!!!!

# Let's create an instance method to calculate the Person's full name.
class Person
  # Every class's initialize method is invoked when we call 'new'
  def initialize(fname, lname)
    @first_name = fname
    @last_name = lname
  end

  # This is an instance method.
  def full_name
    "#{@first_name} #{@last_name}"
  end
end


# The methods of a class defines the classes Behavior.
# Above people can ONLY give you their last name. Thats all the
# behavior they have!

puts "tom's full name is #{tom.full_name}"

# Oh, well there may be times when we do want to know what a person's
# first and last names are. So lets give people the ability, behavior,
# of 'getting' these. Lets add instance variable 'getter' methods.

class Person
  def initialize(fname, lname)
    @first_name = fname
    @last_name = lname
  end

  def full_name
    "#{@first_name} #{@last_name}"
  end

  # instance variable 'getter' method, aka 'getter'
  def first_name
    @first_name
  end

  # instance variable 'getter' method, aka 'getter'
  def last_name
    @last_name
  end
end


puts "Tom's first name is #{tom.first_name}"
puts "Tom's last name is #{tom.last_name}"

# Q: What behaviors does the Person class expose now?
# A: (set/get first and last name, get full name)

# Q: How often does a person's name change?
# A: Hardly ever. Maybe a marriage? And then only the last name.

# Lets add a instance attribute/variable 'setter' method for
# last_name.

# Let's create an instance method.
class Person

  def initialize(fname, lname)
    @first_name = fname
    @last_name = lname
  end

  # Setter for last name
  def last_name=(lname)
    @last_name = lname
  end
end


# Ok now I can change the last_name.
jill = Person.new('jill', 'stein')
puts "jill's name is #{jill.full_name}"

jill.last_name = "Smith"
puts "jill's name is #{jill.full_name}"

# Q: Oops why doesn't this work?
# jill.last_name("Foo")

jill.last_name=("Foo")  # same as jill.last_name =
puts "jill's name is #{jill.full_name}"


# So, the take away is only allow changes that are reasonable. Needed
# RIGHT NOW, by the specfic app you writing.

# Don't try to guess what the future behaviors this class will
# need. 
# It's a common fail, you'll never know less about your app than
# right now!
# You'll discover more about whats needed when the app is actually
# being used.

# YAGNI - You aint gonna need it!


############################################
# LAB 
############################################
# Create a Song class that will have:
# But this in  the lib directory.
# A title, artist_name, duration (seconds) and price.
# Add ONLY the appropriate accessors (getters/setters)

# In another file, in the bin dir:
# Create 3 songs
# Show the songs.
# Calculate and show the average duration and price.
# Change the one or more songs attributes.
# Calculate and show the average duration and price.



# Lets talk about a shorter way to create 'getters' and 'setters'
class Person
  attr_reader :first_name
  attr_accessor :last_name

  # Every class's initialize method is invoked when we call 'new'
  def initialize(fname, lname)
    @first_name = fname
    @last_name = lname
  end

  def full_name
    "#{@first_name} #{@last_name}"
  end

end

# attr_reader - creates a getter method
# attr_writer - creates a setter method
# attr_accessor - creates a getter and setter method.

############################################
# LAB 
############################################
# Update the Song class and app to use the attr_* 

# Lets give people a dob, age, years_to_live, ...
# Maybe this is part of a life insurance app?

# Ruby gem to handle time.
require 'chronic'

class Person
  attr_reader :first_name, :dob
  attr_accessor :last_name

  # dob_str format must be '%m-%d-%Y'
  def initialize(fname, lname, dob_str)
    @first_name = fname
    @last_name = lname

    @years_to_live = 79 - age
  end

  # calculate the age from dob
  def age
    now = Date.today
    now.year - dob.year - (now.strftime('%m%d') < dob.strftime('%m%d') ? 1 : 0)
  end

  # Get the expected death year for person
  def expected_death_year
     Chronic.parse("#{@years_to_live} years from
now").year
  end

  def give_insurance?
    # Huh? What is this bang, bang?
    !!(@years_to_live > 20)
  end
end

#
jack = Person.new('jack','sprat', '4-4-1952')
puts "Jack is #{jack.age} years old"
puts "Jack will likely die in #{jack.expected_death_year}"
puts "Jack should be sold insurance?  #{jack.give_insurance?}"

jill = Person.new('jill','stein', '5-13-1990')
puts "jill is #{jill.age} years old"
puts "Jill will likely die in #{jill.expected_death_year}"
puts "Jill should be sold insurance?  #{jill.give_insurance?}"


############################################
# LAB 
############################################
# Update the Song class to have a release date and artist percentage.
# Note, these will never change.
# Add the following behavior to your app.
# Calculate the % of price given to artist.
# For every 5 years that the song is available decrease the
# artist percentage by 5 percent.

# Research shows people that are married live 5 years longer than single
# Update the class to reflect this research

class Person
  attr_accessor :married

  def is_married?
    married
  end

  # Get the expected death year for person
  def expected_death_year
    if is_married?
      Chronic.parse("#{@years_to_live + 5} years from now").year.to_s
    else
      Chronic.parse("#{@years_to_live} years from now").year.to_s
    end
  end

  def give_insurance?
    ytl = @years_to_live
    if is_married?
      ytl += 5
    end
    !!(ytl > 20)
  end
end
jack = Person.new('jack','sprat', '4-4-1952')
jack.married = true
puts "Jack is #{jack.age} years old"
puts "Jack will likely die in #{jack.expected_death_year}"
puts "Jack should be sold insurance?  #{jack.give_insurance?}"


# We'll it works BUT
# But we had to make the changes in two places for this new feature.
# LAB: (group with neighor)
# Q: How might we improve this implementation. Hint: make code change
# in one place?


class Person
  attr_accessor :married

  def initialize(fname, lname, dob_str)
    @first_name = fname
    @last_name = lname
    @dob = DateTime.strptime(dob_str, '%m-%d-%Y').to_date
    # @years_to_live = 79 - age remove
  end

  def years_to_live
    79 - age + (is_married? ? 5: 0)
  end

  # Get the expected death year for person
  def expected_death_year
      Chronic.parse("#{years_to_live} years from now").year.to_s
  end

  def give_insurance?
    !!(years_to_live > 20)
  end
end
jack = Person.new('jack','sprat', '4-4-1952')
jack.married = true
puts "Jack is #{jack.age} years old"
puts "Jack will likely die in #{jack.expected_death_year}"
puts "Jack should be sold insurance?  #{jack.give_insurance?}"

# We "Refactored" the years_to_live calculation in one getter method.
# This Helped improve the class by reducing the number of places in we
# needed to change code.

# Keep the object data, it's attributes "Encapsulated". Good DRY
# principle.


# Lets make the years_to_live behavior 'private'
# Only available within the class. Clients can't invoke it

puts "Jack has #{jack.years_to_live} years to live"
class Person
  private
  def years_to_live
    79 - age + (is_married? ? 5: 0)
  end

end
puts "Jack has #{jack.years_to_live} years to live"
# NoMethodError
# private method `years_to_live' called for #<Person:0x007fab08e99d40> (NoMethodError)


# Lab:
# Another feature. Lets take off 7 years for smokers. Only current
# smokers.

# Inheritence
# We want to re-use the Person class but it has all kinds of behavior only
# used for calculating life insurance.

# Lets create a InsuredPerson that is a subclass of Person.
# Move the expected_death_year to InsuredPerson class.

# create a another test for adding insured clients
# add_insured_clients2.rb

# Class variables/methods
# Give the Insured People an id when they are created,'ins_id'.
# It should be calculated from calling a InsuredPerson.generate_id method.

# Create a method to generate ids for InsuredPersons


# Module as a Mixin
# Add lib/log.rb
# define a log method that will call the say method.

# Lab:
# Create a method to find all the People that can be insured. Use InsuredPerson.give_insurance?

# Create a whole bunch of clients in the insure_clients.rb
require 'faker'
# make sure you run bundle install to get these gems.

# Lab
# Human/Superhero AND Car classes and objects.
# https://github.com/ga-wdi-boston/wdi_1_ruby_lab_objects_classes

# Alternative Lab
# class_methods_modules_lab.txt
#
# Homework
# HappiTails
# https://github.com/ga-wdi-boston/wdi_1_ruby_hw_happitails#

# Rental-App
# https://github.com/ga-wdi-boston/wdi_1_ruby_hw_objects_rental_app

# Write a Junk Yard mgmt app.
# It will have Cars.
# Cars will have a make, model, year, current value and date received.
# where appropriate.

# Lab:
# Create a class named JunkYard

# Add Cars to the JunkYard. Just create a bunch programatically and
# add them,

# Prompt the user for to search for all cars older than 20 years.

# Prompt the user for to search for all cars older than 10 years and
# the current price is < 1K..

# Allow the removal of all cars older than 20 years.

# Allow the removal of all cheaper cars, book value < 1K, over 10 yrs old.

# Prompt the user to search for all cars that "have been in the
# JunkYard" for more than 5 years.

# Prompt the user for a make and model and show me all cars.


# Show the total value of all the cars in the junk yard.
