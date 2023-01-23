system "clear"
# p "Hello World".upcase
# p "Hello World".class

# p "radar".reverse == 'radar'

# p "Radar".upcase.reverse == 'radar'.upcase

class String
  # is_palindrome is a method which takes in a word
  def is_palindrome?
    self.upcase.reverse == self.upcase
  end

end

# if the class has a method than we can pass into the method
# the value of the class
# p  "Borscht".is_palindrome?
# p  "radar".is_palindrome?


class World
  # attr_reader :shape
  # attr_writer :shape
  # more efficient way of doing the above is:
  attr_reader :people
  attr_accessor :name, :shape
  # initialize method is like a JS constructor
  # and we need to pass in a value
  def initialize name, shape='oblate shperoid'
    # in JS it would be:
    #this.shape = shapes
    @shape = shape
    @name = name
    @people = []
  end
  # this is a setter
  def populate name, age
     @people << { name: name, age: age }
  end

end

world1 = World.new "Panthalassa", "sphere"
world2 = World.new "Tatooine" , "sphere"
world3 = World.new "Nothing But Shrimp" , "dome"
world4 = World.new "San Junipero", "cylinder"

world3.populate "Eleanor ShellStrop", 36
world3.populate "Chidi Anagonye", 32
world3.populate "Tahani Al-Jamil", 34
world3.populate "Jianyu", 31

# p world3.people
# p world3.name

planets = %w(Mercury Venus Earth Mars Jupiter Saturn Uranus Pluto)
milky_way = []

planets.each do |planet|
  world = World.new planet
  milky_way << world
end


# p milky_way
