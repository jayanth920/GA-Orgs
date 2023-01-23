class Ticket

  attr_reader :venue, :date
  attr_accessor :price

  def initialize(venue, date)
    @venue = venue
    @date = date
  end

   # this is a class method. See the 'self'
  def self.most_expensive_tickets(*tickets)
    tickets.sort_by { |t| t.price }.last
  end

end 

# Step 1 
# lets keep a running count of the all the tickets
# Add this inside the class. Not inside any methods.

@@ticket_count = 0

# Add this to the the initializer
@@ticket_count += 1

## try to access @@ticket_count from outside the class

Ticket.ticket_count 

# should fail

# create an accessor for ticket_count


# Step 2
# Give the above class lets make sure we only add valid 
# venues.
# This is a class variable. It lives in the class, not in 
# instances of a class. It's shared accross all instances of a class

@@venues = %w{ Orpheum Garden Palladium }

