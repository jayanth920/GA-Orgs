require_relative '../lib/person'

tom = Person.new("Tom", "Dyer")

puts "Tom's full name is #{tom.full_name}"

jill = Person.new("Jill", "Stein")
puts "Jill's name is #{jill.full_name}"

jill.last_name = "Smith"
puts "Jill's name is #{jill.full_name}"

# Calls the same setter method called on line 10
jill.last_name=("Jones")
puts "Jill's name is #{jill.full_name}"

# OOPs calling the getter method with an argument
# wrong number of arguments (1 for 0) (ArgumentError) 
# jill.last_name("Taylor")
# puts "Jill's name is #{jill.full_name}"


