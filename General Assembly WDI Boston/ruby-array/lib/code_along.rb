# frozen_string_literal: true

# Create an empty array, `literal_array`, using the literal syntax

# Create an array, `constructor_array`, using the constructor syntax, initialized
# with 5 elements

# Create an array, `ten_false_array`, initialized with 10 `false` elements

# Keep the following in our file so our specs work. Constants from this file are available in other files that `require` this file.
# Run the specs with bin/rspec spec/ruby_array_specs.rb
LITERAL_ARRAY = literal_array
CONSTRUCTOR_ARRAY = constructor_array
TEN_FALSE_ARRAY = ten_false_array

# Instead of using `puts` or `p` statements to view output in our console, we could use the interactive Pry debugger.
# First, we are requiring our debugger. The debugger is called by placing `binding.pry` at any point in your code where you want a breakpoint
# Once at the pry console in your terminal, type the name of a variable you want to investigate, or run some code.
# Continue by typing 'continue' in the terminal.
# One caveat is binding.pry doesn't like being the very last line in a file. So, we pad the last line with an extra empty ''
# Uncomment the following to use the debugger:
# require 'pry'
# binding.pry
# ''

