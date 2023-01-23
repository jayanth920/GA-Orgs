# Table 7.1 
# How the current object (self) is determined.
# Context            |   Example                 | self
#============================================================
# Top level          | Any code outside of other  | main (built-in)
                     | blocks
#-----------------------------------------------------------------------                     
# Class definintion  | Class C                    | The class object C
#-----------------------------------------------------------------------
# Module Definintion | Module M                   | The module object M
#-----------------------------------------------------------------------
# Method Definition  | 1. Top level               | main
#                    |--------------------------------------------------
#                    | 2. Class method            | class
#                    |--------------------------------------------------
#                    | 3. Instance method         | instance of class.
#                    |--------------------------------------------------


# Step 1
# Find self at top level.

puts "Top Level"
puts "self is #{self}"

# Step 2
# Find self at in Class and class methods.

class C
 puts "In Class"
 puts "self is #{self}"

 def self.meth1
   puts "In Class method self is #{self}"
 end
end

# Step 3
# Find self an instance method



# Step 4 
# We use self in instance methods to call
# getters and setters instead of instance 
# variables.
# The setters or getter MAY add functionality 
# that you as client may want to use.

# see the Ticket#price getter.



