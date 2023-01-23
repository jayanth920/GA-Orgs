require_relative '../lib/person'

tom = Person.new("Tom", "Dyer", "6-2-1957")
puts "#{tom.first_name} DOB is #{tom.dob}"
puts "#{tom.first_name} age is #{tom.age}"

puts "#{tom.first_name} age is #{tom.years_to_live}"

puts "#{tom.first_name} is insurable: #{tom.is_insurable?}"



