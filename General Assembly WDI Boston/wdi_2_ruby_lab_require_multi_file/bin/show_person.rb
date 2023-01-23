# get the currrent dir we attempt to run this in.
# find the lib directory
# find the ruby file person.rb and load it.
#require '../lib/person'

# Using the directory this file resides in (bin)
# go up one directory.
# find the lib directory
# find the person.rb file and load it.
require_relative '../lib/person'

old_joe = Person.new('joe', 95)

puts "old joe is #{old_joe}"