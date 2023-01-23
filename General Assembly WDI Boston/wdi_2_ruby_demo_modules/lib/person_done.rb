require_relative 'talk'
require_relative 'counter'

# Define a Person class
class Person
  attr_reader :id
  
  # All methods in the Counter module
  # will become class methods.
  extend Counter
  
  # All methods in the Talk module
  # will become instance methods.
  include Talk

  def initialize(fname, lname)
    @first_name, @last_name = fname, lname
    @id = Person.increment_counter
    

    say_it("Hey, we created #{full_name} with i d #{id}")
  end 

  def full_name
    "#{@first_name} #{@last_name}"
  end

end       
