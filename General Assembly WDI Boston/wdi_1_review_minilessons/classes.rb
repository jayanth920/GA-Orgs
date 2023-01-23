require 'pry-byebug'

class Animal

  def bite
  end

  def breathe
  end

end


class Dog < Animal

  # initialize takes the arguments from .new and turns them into instance variables
  def initialize(name, age)
    @name = name
    @age = age
  end

  # let's make a getter
  def name
    @name
  end

  def kajsdlkfjlaksjdflkajsdf
  end

end

# let's create an instance of a dog

# new is a method that calls the initialize method
fido = Dog.new("Fido", 3)

binding.pry

puts 'hi'
