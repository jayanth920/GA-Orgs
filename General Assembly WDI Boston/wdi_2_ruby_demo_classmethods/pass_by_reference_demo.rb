require_relative './lib/object_ext'

# define a method
def change_str(str_arg)
  puts "\nchange_str: before assignment str_arg.object_id = #{str_arg.object_id}"
  puts "change_str: before assignment str_arg value = #{str_arg}"
  puts "change_str: before assignment str_arg memory address = #{str_arg.get_mem_address}"  

  str_arg = "changed string"

  puts "\nchange_str: after assignment str_arg.object_id = #{str_arg.object_id}"
  puts "change_str: after assignment str_arg value = #{str_arg}"  
  puts "change_str: after assignment str_arg memory address = #{str_arg.get_mem_address}"  
end

# Create 2 things here.
# 1) An object, i.e. an instance, of the class String
# 2) A variable, str1, that points to this String instance.
str1 = "This is string 1"

# At the computer hardware level:
# Both the String object and the str1 variable are created in memory
# at specfic memory addresses. 

# |Memory        |      Memory
# |Address       |      Location
#  ...
# |0x7ff5b88afd80| -> "changed string" #instance of String
# |0x7ff5b88afd88| -> str1 variable pointing to 0x686800  
#  ...

puts "main: before method call str1.object_id = #{str1.object_id}"
puts "main: before method call str1 value = #{str1}"
puts "main: before method call str1 memory address = #{str1.get_mem_address}"

puts "*" * 30
puts "Call the change_str method"

# call method
change_str(str1)

puts "\nReturned from the change_str method"
puts "*" * 30

puts "\nmain: after method call str.object_id = #{str1.object_id}"
puts "main: after method call str1 value = #{str1}"
puts "main: after method call str1 memory address = #{str1.get_mem_address}"

# This tells us that when we enter the method change_str we :
# 1) Create a variable str_arg
# 2) Variable str_arg will be assigned a reference to the String object "This is string 1"
# 3) When we reach this statement, str_arg = "changed string", we will:
#   i) create a instance of a String "changed string".
#   ii) point the variable, str_arg, at this "changed string" instance.
#   (!!NOTE: the str1 outside the method is NEVER changed!!!)
# 4) Destroy, kill, the variable str_arg. It's so gone.

