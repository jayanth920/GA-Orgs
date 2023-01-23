#### CLASS BASICS
# Define an empty class

class MyClass
end

# Create instance of new class

# .new is a class method invoked on a class that does not exist. wdi_class currently has no attributes.
wdi_class = MyClass.new


# To define class with attributes

class MyClass

  # Any new MyClass object will require at least one argument (subject), num_students is optional and will be set to 20 by default if not specified, third argument cannot be passed when creating a new MyClass -- it is assigned the value within "intialize"
  def initialize(subject, num_students=20)
    @subject = subject
    @num_students = num_students
    @address = "51 Melcher"
  end
end

# Creates instance of MyClass with 3 attributes: @subject = history; @num_students = 20; @address = "51 Melcher"
wdi_class = MyClass.new("history")

# Creates instance of MyClass with 3 attributes: @subject = physics; @num_students = 40; @address = "51 Melcher"
new_wdi_class = MyClass.new("physics", 40)


# In order to call and change an attribute of a class object, must write getter/setter methods for that attribute.

class MyClass

  def initialize(subject, num_students=20)
    @subject = subject
    @num_students = num_students
    @address = "51 Melcher"
  end

  def address   # getter method
    @address
  end

  def address=(street_name)   # setter method
    @address = street_name
  end

end

# new_wdi_class address is now 300 Congress, overwrites initialized value
new_wdi_class.address = "300 Congress"


#### attr_accessor method is a shortcut for setter and getter methods - it is a method of a set of methods.

class MyClass
  attr_accessor :address

  def initialize(subject, num_students=20)
    @subject = subject
    @num_students = num_students
    @address = "51 Melcher"
  end
end

new_wdi_class = MyClass.new("history")

puts new_wdi_class.address    # => 51 Melcher

new_wdi_class.address = "300 Congress"
# new_wdi_class.address=("300 Congress") # same as above

puts new_wdi_class.address    # => 300 Congress


# can create instance methods to operate on specfic classes

class MyClass
  attr_accessor :address

  def initialize(subject, num_students=20)
    @subject = subject
    @num_students = num_students
    @address = "51 Melcher"
  end

  def difficulty_level
    "#{@subject} is a difficult class"
    # @subject + " is a difficult class"  # same as above
  end
end

new_wdi_class = MyClass.new("history")

puts new_wdi_class.address

new_wdi_class.address = "300 Congress"

puts new_wdi_class.address

# Run the method difficulty_level on new_wdi_class
puts new_wdi_class.difficulty_level  # => "history is a difficult class"


#### INHERITANCE

# Example of how instance variables are inherited

class Building
  attr_accessor :building_name

  def initialize(building_name, building_address)
    @building_name = building_name
    @building_address = building_address
  end
end

class Apartment < Building
  attr_accessor :owner_name, :num_chairs  # put comma bewteen symbols

  def initialize(building_name, building_address, owner_name) # if super is called, must pass required arguments for superclass inialization in addition to those required for subclass
    super(building_name, building_address)  # must have same number of arguments as initialized in superclass
    @owner_name = owner_name
    @num_chairs = 0
  end
end

# Creates my_apartment with 3 attributes
my_apartment = Apartment.new("Condo Building", "51 Melcher", "Corrine")

# Building_name is an attributed inherited from superclass Building even though not explicitly specified within subclass
puts my_apartment.building_name   # => "Condo Building"


# Example of how methods are inherited


# Subclasses inherits methods from superclass

class Building
  attr_accessor :building_name

  def initialize(building_name, building_address)
    @building_name = building_name
    @building_address = building_address
  end

  def destroy
    @building_name = "CONDEMNED"
    puts @building_name
  end

end

class Apartment < Building
  attr_accessor :owner_name, :num_chairs

  def initialize(building_name, building_address, owner_name)
    super(building_name, building_address)
    @owner_name = owner_name
    @num_chairs = 0
  end
end


my_apartment = Apartment.new("Condo Building", "51 Melcher", "Corrine")

puts my_apartment.building_name  # => "Condo Building"

my_apartment.destroy # => "CONDEMNED"

puts my_apartment.building_name  # => CONDEMNED




# Ruby always runs the instance of a method as definined at the lowest level of hierarchy

class Building
  attr_accessor :building_name

  def initialize(building_name, building_address)
    @building_name = building_name
    @building_address = building_address
  end

  def destroy
    @building_name = "CONDEMNED"
    puts @building_name
  end

end

class Apartment < Building
  attr_accessor :owner_name, :num_chairs

  def initialize(building_name, building_address, owner_name)
    super(building_name, building_address)
    @owner_name = owner_name
    @num_chairs = 0
  end

  def destroy
    @building_name = "DOOMED"
    puts @building_name
  end
end


my_apartment = Apartment.new("Condo Building", "51 Melcher", "Corrine")

puts my_apartment.building_name  # => "Condo Building"

my_apartment.destroy # => "DOOMED"

puts my_apartment.building_name  # => DOOMED"


# Must call super within a subclass method that needs to inherit the superclass operation as well as add operations to it.


class Building
  attr_accessor :building_name

  def initialize(building_name, building_address)
    @building_name = building_name
    @building_address = building_address
  end

  def destroy
    @building_name = "CONDEMNED"
    puts @building_name
  end

end

class Apartment < Building
  attr_accessor :owner_name, :num_chairs

  def initialize(building_name, building_address, owner_name)
    super(building_name, building_address)
    @owner_name = owner_name
    @num_chairs = 0
  end

  def destroy
    super
    @building_name = "DOOMED"
    puts @building_name
  end
end


my_apartment = Apartment.new("Condo Building", "51 Melcher", "Corrine")

puts my_apartment.building_name  # => "Condo Building"

my_apartment.destroy # => "CONDEMNED" "DOOMED"

puts my_apartment.building_name  # => "DOOMED"



