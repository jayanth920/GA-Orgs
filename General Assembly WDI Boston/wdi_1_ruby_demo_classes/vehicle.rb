require 'pry'

class Vehicle
  attr_accessor :color, :number_of_wheels

  def drive
    puts "woooo wooooooo"
  end
end

class Motorcycle < Vehicle
  attr_accessor :number_of_wheelies

  def initialize(color)
    @number_of_wheelies = 0
    @color = color
    @number_of_wheels = 2
  end

  def pop_a_wheelie
    puts "Looks sweet"
    @number_of_wheelies = @number_of_wheelies + 1
  end
end

class Car < Vehicle
  attr_accessor :number_of_comfortable_seats

  def be_sat_in
    puts "wow, this is boring"
  end
end

my_motorcycle = Motorcycle.new("red")
my_car = Car.new
