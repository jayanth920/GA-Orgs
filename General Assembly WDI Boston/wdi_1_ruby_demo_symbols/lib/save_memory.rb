# Each of these strings will take memory space
# Even if they have the same value!!
"current_user"
"current_user"

# Lets use a symbol
:current_user

# Now, whenever you reference a :current_user
# in your code base you will ALWAYS reference
# the same memory.
:current_user

# Each object in Ruby has an object_id that
# See how two strings with the same value
# have different object_id
puts "dog_food".object_id
puts "dog_food".object_id

# Each string above is it's own object and it takes up
# memory. Even tho the strings have the sam
# value, boohoo.

puts :dog_food.object_id
puts :dog_food.object_id

# There is only ONE :dog_food symbol object in memory.
# Yep, we're saving memory here.
