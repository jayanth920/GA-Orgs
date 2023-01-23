


# Fork and clone this repo. Create a new file for your cheatsheet and say who wrote it - e.g. `arrays_by_david_anna.rb`

# Your cheatsheet should demonstrate all the important things about a particular topic. Comment every line to explicitly say what it's doing - especially the tricky parts. Try to give the higher-level perspective too - what's the point of using an array vs. a hash? What is each datatype useful for?

# Sample cheatsheet (as a starting point): https://github.com/ga-wdi-boston/wdi_1_ruby_demo_array_manipulation/blob/master/array_colors_demo.rb

# When you're done with your cheatsheet, submit a pull request. I will accept your pull request and we will have a class collection of cheatsheets!


# CLASS

# class is lowercase, Class name is uppercase
class Animal
end
# This sets the attributes of the class
#(attr_accessor) creates getter and setter methods


class Animal
attr_acessor :name, :age, :trait
end
#Classes are good for scalability, inheritance keeps code DRY
#Classes allow for objects
#To create an object for a class we have to specify an object by name
#the class it belongs to and the method(verb)
class Animal
end
# Class variables are shared by all class instances (subclasses) whereas class variables are specific only to that class.

#The class Viking has initialize 'name'...
class Viking
    def initialize(name, age, health, strength)
        #@ creates an instance of the class because not two vikings are the same

#These are instance variables of the class
        @name = name
        @age = age
        @health = health
        @strength = strength
    end
end



#When you creat an instance and you call .new you will need to call the initialize method to call on the attr_accessor traits


#Another example of class
class Animal
  attr_accessor :name, :age, :trait

# We have created a dog that belongs to the class Animal and inherits the attributes

  dog = Animal.new

#This creates a method that makes the dog do bark "woof"

  def bark
    "woof"
  end

# This calls the method bark on dog
puts dog.bark
end






