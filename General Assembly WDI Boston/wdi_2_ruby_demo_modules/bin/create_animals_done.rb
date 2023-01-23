require_relative "../lib/animal_done"

joe = Person.new('Joe Smoe')
puts joe.move

spot = Dog.new('Spot')
puts spot.move

poly = Parrot.new('Polly')
puts poly.move


belfy = Bat.new('Belfry')
puts belfy.move

# Make Joe and poly say something
joe.say_it("Hey I'm #{joe.name }")
joe.say_it("Hey I'm a #{poly.class.name} and my name is #{poly.name }")

# Show that poly and belfy can fly, fly
poly.fly
belfy.fly
