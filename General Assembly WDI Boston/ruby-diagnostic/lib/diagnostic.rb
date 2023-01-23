# frozen_string_literal: true

require 'ostruct'
Diagnostic = OpenStruct.new

# A NOTE ABOUT TESTS (Read This): This diagnostic will be scored by tests. Run `bin/rspec spec` to see how
# you're doing.

# The test output should contain a line like this:

# 14 examples, 12 failures

# The above indicates the rspec test runner has attempted 14 examples, and 12 have failed.
# Failing tests are OK! It's the first step to a passing test. Read the output to help you as you work on the diagnostic.
# For example: the following failure message:
#
# Diagnostic .normalize should return the correct values
#      Failure/Error: expect(subject.normalize(str1)).to eql('OLLEH')
#
#        expected: "OLLEH"
#             got: nil
#
#  (compared using eql?)
#      # ./spec/diagnostic_spec.rb:89:in `block (3 levels) in <top (required)>'
#
# The above is telling you that your normalize method returns `nil`,
# but it should return OLLEH (when given the test input)
# View the test at ./spec/diagnostic_spec.rb:89 for more information

# If your test output contains a stack trace and an error message, that means you have a
# syntax error that is breaking the tests. Fix that first! Read the error message! It will help
# you find the syntax error. It even gives you a line number!

########################
# Diagnostic Questions #
########################

# Question 1

# Imagine you want to represent the English phrase "favorite Star Wars movie" as
# a Ruby variable. What would you name that variable according to Ruby
# convention? Replace the contents of the string below with your answer.
Diagnostic.variable = 'your response here'

# Question 2

# Examine the following code.

batman = 'Bruce Wayne'

if batman
  'The Dark Knight'
else
  'Just your average billionaire'
end

# What value will be returned? Write your response as a Ruby string below.

Diagnostic.flow_control = 'your response here'

# Question 3

# Write all the values that evaluate to "falsy" in Ruby. Write these values in
# a Ruby array.

Diagnostic.falsy = []

# Question 4

# Change the string stored in the `Diagnostic.interpolation` so that it uses
# Ruby string interpolation to replace `BLANK` with the value of `character`.

character = 'Jar Jar Binks' # rubocop:disable Lint/UselessAssignment
Diagnostic.interpolation = 'BLANK is really a Sith Lord.' # change this string

# Question 5

# Run the Ruby script named `message.rb` in the `lib` directory.
# No need to look at the code in that file. What did it print to the terminal?
# Paste the output of that script below.

Diagnostic.message = 'your response here'

# Question 6

# In a Ruby string, write what keyword you use for "else if" clauses in Ruby.

Diagnostic.else_if = 'your response here'

# Question 7

# True or false: Ruby requires explicit returns from methods. Replace `nil`
# with your answer.
Diagnostic.returns = nil

# Question 8

# Given the following array:

arr = [12, 34, 56, 67] # Don't modify this line!

# Write code that will modify the array above by removing the last two elements.

# Your code here

Diagnostic.remove_from_array = arr # Don't modify this line either!

# Question 9

# This line makes a copy of `arr` as it looks after you've removed the last
# two elements
new_arr = arr.clone # Don't modify this line!

# Modify `new_arr` by adding the number 99 as the fourth element in the array.

# your code here

Diagnostic.array_add_to = new_arr # Don't touch me

# Question 10

# After completing the above, what is the third element in new_arr?
# Replace the string below with your answer.

Diagnostic.index_2 = 'your response here'

# Question 11

# Instantiate a `person` hash with `favorite_number` and `first_name` as symbols
# and a favorite number and a first name as their respective values.
# Replace `nil` below with the hash.

Diagnostic.person_hash = nil

# Question 12

# Fill in the method below so that it reverses the string passed in as `text`,
# changes all the letters to uppercase, and returns the modified string.

# For example: "hello" => "OLLEH"

# We haven't taught you any of this!
# This question is about reading documentation.
# Start here: https://ruby-doc.org/core-2.4.0/String.html

def Diagnostic.normalize(text)
  # your code here
end
