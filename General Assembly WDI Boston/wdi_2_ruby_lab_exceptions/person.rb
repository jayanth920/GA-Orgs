class PersonValidError < StandardError
end

class Person
  attr_accessor :name, :age

  def initialize(name, age)
    @name = name
    @age = age
  end
end


tom = Person.new('tom', 57)
puts "tom's name is " + (tom.valid_name? ? "valid" : "not valid")
puts "tom's age is " + (tom.valid_age? ? "valid" : "not valid")

ed = Person.new('ed', 111)
puts "ed's name is " + (ed.valid_name? ? "valid" : "not valid")
puts "ed's age is " + (ed.valid_age? ? "valid" : "not valid")

jane = Person.new('j', 33)
puts "jane's name is " + (jane.valid_name? ? "valid" : "not valid")
puts "jane's age is " + (jane.valid_age? ? "valid" : "not valid")


