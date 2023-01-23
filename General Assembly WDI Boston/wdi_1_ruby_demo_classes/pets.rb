require 'pry'

# Class names are singular
class Cat
  # Automatically creates getter and setter methods
  attr_accessor :age, :gender

  # Returns the stored age of the instance of a specific cat
  # "getter method"
  # def age
  #   @age
  # end

  # # Set the value of the instance variable @age for an instance of a cat
  # # my_cat.age = 12
  # # "Setter method"
  # def age=(age)
  #   @age = age
  # end

  # def gender
  #   @gender
  # end

  # def gender=(gender)
  #   @gender=gender
  # end

  # This is called when Cat.new("Jade") is run
  # young_jade = Cat.new "Jade" ## This is a newborn kitten
  # old_jade = Cat.new "Jade", 12, "long"
  def initialize(name, age=0, hair="bald")
    # Sets the initial name of the cat
    @name = name + " fuzzball"
    @age = age
    @hair = hair
    # Sets default state of the cat
    @is_sleeping = false
  end

  # Instance method. This isn't a setter or getter
  # my_cat = Cat.new("Jade")
  # my_cat.meow
  def meow
    puts "MEOW"
  end

  # increments the birthday
  def have_birthday

    # This alters an "instance variable"
    @age = @age + 1
  end

  # GETTER
  # Returns boolean value if the cat is sleeping or not
  def is_sleeping?
    @is_sleeping
  end

  # SETTER
  # Set if the cat is sleeping or not
  def is_sleeping=(state)
    @is_sleeping = state
  end
end

# Creates two new instances of the class Cat
my_cat = Cat.new("Jade")
your_cat = Cat.new("Paws", 3, "long")
