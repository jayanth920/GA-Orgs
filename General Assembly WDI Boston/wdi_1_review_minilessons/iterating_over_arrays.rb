pets = ['fido', 'whiskers', 'fluffy']

# add an 'is cute' after each name

# best practice is to use .map most of the time
# .each is useful in rails for displaying things
# .map! can give surprising results and is generally not used

# the return value of each is the same original array
# pets is unchanged, and cute_pets is still the same as the original pets
cute_pets = pets.each do |name|
  name + " is cute"
end

# the return value of map is the altered array
# pets is still unchanged, but cute_pets is now different
cute_pets = pets.map do |name|
  name + " is cute"
end

# the return value of map! is the altered array
# AND pets has now been changed
# map! will mutate the underlying value
cute_pets = pets.map! do |name|
  name + " is cute"
end


puts cute_pets
puts pets
