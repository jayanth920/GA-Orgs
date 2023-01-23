# p "Hello World".upcase

# p "Hello World".class.ancestors

# p lambda { |n| p n }.class

# class String
#
#   def zumpledeboop
#     self.upcase.reverse
#   end
#
# end
#
#
# p "Hello World".class
# p "Hello World".zumpledeboop
# p "Cherish the Cabin".zumpledeboop


# class World
#
#   def initialize name, shape
#     @name = name
#     @people = []
#     @shape = shape
#   end
#
#   def name
#     @name
#   end
#
#   def shape
#     @shape
#   end
#   def name=value
#     @name = value
#   end
#
#   def people
#     @people
#   end
#
#   def populate name, age
#     @people << {name: name, age: age}
#   end
#
# end


#
# p world1
#
# p world1.name
#
# p world1.class
#
# world1.name = "Booger-town"
#
# p world1.name


#
# world1 = World.new "Panthalassa" , "Pyramid"
# world2 = World.new "Booger-town" , "Dome"
# world3 = World.new "Spike Hair Ville" , "Sphere"
# world4 = World.new "Frosted tips ville", "Cylinder"

# p world1.people

# world1.populate
# world1.populate
# world1.populate
# world1.populate
# world1.populate


# p world1.people

# p world1.name
# p world2.name
# p world3.name
# p world4

# p world1.shape

# world3.populate "Bart Simpson" , 10
# # p world3.people
#
# planets = %w(Mercury Venus Earth Mars Jupitor Saturn Uranus Pluto)
# # populate milky way with worlds from our planets array
# milky_way = []
#
# planets.each do |planet|
#   world = World.new planet, "Oblique Spheroid"
#   milky_way << world
# end
#
# p milky_way


# Refactor getters and setters

class World
  attr_accessor :name , :shape
  attr_reader :people

  def initialize name, shape
    @name = name
    @people = []
    @shape = shape
  end

  def populate name, age
    @people << {name: name, age: age}
  end

end




world1 = World.new "Panthalassa" , "Pyramid"
world2 = World.new "Booger-town" , "Dome"
world3 = World.new "Spike Hair Ville" , "Sphere"
world4 = World.new "Frosted tips ville", "Cylinder"

# p world4.name
#
# world4.name = "Beebo"
#
# p world4.name
# # poulate??
#
# world3.shape = "box"
# p world3.shape

world2.populate "Person" ,555

# p world2.people


# class Person
#   attr_reader :name, :age, :favorite_color, :height
#
#   def initialize(name:, age:, favorite_color:, height:)
#     @name = name
#     @age = age
#     @favorite_color = favorite_color
#     @height = height
#   end
# end
#
# me = Person.new( favorite_color: "gray", age: 40, height: "five-foot-seven", name: "Karolin")
#
# p me

class Animal
  attr_reader :age, :name

  NUMBER_LEGS = 4

  def initialize name
    @name = name
    @age = 0
  end

  def num_legs
    NUMBER_LEGS
  end
  def get_older
    @age +=1
  end

  def walk
    p "walka walka"
  end
end

class Cat < Animal
  def walk
    p "strut strut"
  end

  def sound
    p "meow meow"
  end
end

class Dog < Animal
  def sound
    p "woof woof"
  end
end

class Ferret < Animal
end

merlin = Cat.new "Merlin"
merlin.sound
charlie = Dog.new "Charlie"

p charlie.name
charlie.walk
charlie.sound

p charlie.num_legs

beebo = Ferret.new "Beebo"
beebo.name
beebo.walk
# beebo.sound # doesn't work no method not in Animal

# merlin.walk
# p merlin.name
# merlin.get_older
# p merlin.age
