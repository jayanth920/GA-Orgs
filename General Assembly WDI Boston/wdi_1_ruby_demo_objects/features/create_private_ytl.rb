require_relative '../lib/insurance_person'

tom = InsurancePerson.new("Tom", "Dyer", "6-2-1957")
puts "#{tom.first_name} DOB is #{tom.dob}"
puts "#{tom.first_name} age is #{tom.age}"

# This should fail because years_to_live is private
# puts "#{tom.first_name} age is #{tom.years_to_live}"

puts "#{tom.first_name} is insurable: #{tom.is_insurable?}"
