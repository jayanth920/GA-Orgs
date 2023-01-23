require 'pry'

# Step 1
# Create a ticket.rb file!!
# We've been using instance methods, mostly
# object.message
# The ticket should have a venue, price and date
# The venue and date cannot be changed

class Ticket

  attr_reader :venue, :date
  attr_accessor :price

  def initialize(venue, date)
    @venue = venue
    @date = date
  end

end

# Step 1.1
# Create an instance of a ticket.

ticket1 = Ticket.new('Garden', '11-5-2013')
ticket1.price = 50.00

# How may methods are we calling here?

# yep, 2 methods .
# 1 instance methods and 1 class method

# Ticket.new is a class method because it's the job
# of the Ticket to create new ticket instances

# Step 1.2
# Look up Class.new method
# http://www.ruby-doc.org/core-2.1.0/Class.html

# Gets very circular here
# Point is:
# Every class in Ruby is instance of the class named Class

# Step 2
# Create a class method and use it.

class Ticket
  # this is a class method. See the 'self'
  def self.most_expensive_tickets(*tickets)
    tickets.sort_by { |t| t.price }.last
  end
end

th = Ticket.new("Orpheum", "10/25/2012")
cc = Ticket.new("Garden", "6/2/2013")
fg = Ticket.new("Palladium", "4/4/2013")
th.price, cc.price, fg.price = 13.55, 125.00, 180.00

binding.pry
highest = Ticket.most_expensive(th, cc, fg)

# finding the most expensive ticket wouldn't make sense
# if it was a method that was called on a Ticket object.

# Only makes sense in the realm of all the Tickets
# which is represented by the Ticket class.


# Step 3
# Show other ways of defining a class method.

# Step 3.1
# Using the name of the class to define a class method

class Ticket
  def Ticket.most_expensive_tickets(*tickets)
    tickets.sort_by { |t| t.price }.last
  end
end

# Step 3.2
# Using some ruby magic. It's only magic right now.
class Ticket

  class << self
    # everything in here is defined on the class Ticket
    def most_expensive_tickets(*tickets)
      tickets.sort_by { |t| t.price }.last
    end
  end
end

# Why do this work?
# it's complicated, at least for now.

# Step 4
# We can create an class that is ONLY has class methods.

class Temperature

  def self.c2f(c)
    c * 9 / 5 + 32
  end
  def self.f2c(f)
    (f -32) * 5/9
  end

end

# What are some build-in Ruby classes that don't have
# instance methods?

# Step 5
# Class methods vs instance methods.
#
# 1) Instances created by classes are object.
# 2) Classes are objects too.
# 3) A class object (like Ticket) has it's methods, it own state
# and it's own identity.
