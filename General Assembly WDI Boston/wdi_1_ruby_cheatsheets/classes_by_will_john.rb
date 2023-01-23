# #cheatsheet for classes

# require 'pry'

# #how to define a class
# class Sports
# end

# #basic way of initializing an instance variable of the class Sport
# new_sport = Sports.new



# #steps that a class takes when initialized
# #after calling the class
# # 1) creates a new 'class' object
# # 2) if there exists attr_accessor, it will create getter/setter methods for the attributes listed as symbols
# # 3) it runs the 'initialize' method if it exists, passing arguments from the .new call of the class

# class Sports

#
#   def initialize(players) #instance method
#     @players = players #instance variable
#   end

# end

# #below we create a new instance of the Sports class
# new_sport = Sports.new 100



# #if we want to make a Sports class and use an attr_accessor
# #the code below shows how to
# class Sports

#   attr_accessor :players
#   #attr_accessor asks what getter/setter methods to create.
#   #the two methods below are the methods that attr_accessor writes.

#   # def players
#   #   @players
#   # end

#   # def players = (players)
#   #   @players = players
#   # end



# end
# #how we would initalize the class and call the attr_accessor on the new_sport
# new_sport = Sports.new
# new_sport.players


# #INHERITANCE

# #sub-classes inherit from ONE superclass
# #for example if we made a sub-class, we could inherit from the Sports super class

# class Football < Sports
# end

# #the sub class of Football inherits methods from the superClass Sports.

# class Sports

#   def initialize(num_players)
#     @num_players = num_players
#   end

# end

# class Football #defining a class

#   def initialize(score=0, num_players) #initialize method, run when you call .new
#     @score = score # this is an instance variable, that takes the argument passed in from new method and only if there is an attr_accessor it turns it into a getter/setter method
#     @number_of_quarters = 4 #another instance variable
#     super(num_players) #super is a method that references the super-class intialize method and sets the instance variable 'num_player'
#   end

# end

# #to initialize the class Football
# football_team = Football.new 0, 11
#we initialize the class of Football with two arguments 0 and 11
# and assign it to the variable football_team


#make a new class
class Cat

  attr_accessor :weight

  def initialize(age, name)
    @age = age
    @name = name
  end

  def purr
    puts @name + " purr"
  end

end

#now to call

new_cat = Cat.new 5, "Kittens" #this will make a new cat in the class of Cat with an age of 5 and the name of kittens
thing = new_cat.weight=9
new_cat.purr #this will call the method purr onto the new_cat
puts thing






#updates 9/29/14

#calling the .self within a method
#you call it by doint self.a_method
#self inside a method it refers to the instance of that class.
  #for example temp_in_room
  #the .self is an object, and refers to an instance
  #temp_outside = Celsius.new(30)
  #temp_outside.report
  #becomes useful when caling methods within methods

#in a mthod name, refers to the class as a whole


#add method to a Celsius class



class Celcius

#below is a counter that keeps track of how many instances exist
#it is a class variable
#class variables: @@
@@counter = 0

def initialize(temp_in_c)
  @temp_in_c = temp_in_c
  #every time we initialize a enw instance
  #we increment the counter by 1
  @counter = @counter + 1
end


#self inside a method refers to instance that the method is being called on
#this is an instance method because it doesnt begin with self
def report
  "the temperature is #{@temp_in_c} Celsius or #{self.to_fahrenheit} Fahrenheit"
end


def self.about_history #self is in the method name refers to the class a whole or collection
  "Celcius is a way to measure heat: 0 is freezing pt, 100 is boiling point"
end


#keep track of how many instances you have initialized using the class variable of counter
def self.how_many_objects
  "there are #{@@counter} temperatures in your collection"
end

end

puts Celcius.about_history # will put the self.about_history stuff
puts Celcius.how_many_objects









