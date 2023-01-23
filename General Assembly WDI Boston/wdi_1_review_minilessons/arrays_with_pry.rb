require 'pry-byebug'

pets = ['fido', 'whiskers', 'fluffy', 'fido']

cute_pets = pets.map do |name|
  # binding.pry
  name + " is cute"
end.uniq

puts cute_pets


