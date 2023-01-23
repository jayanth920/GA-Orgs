# def my_method
# end

# my_method

# class MyClass
#   def my_class_method
#   end
# end

# my_class_instance = MyClass.new
# my_class_instance.my_class_method

my_string = "happy"
my_string = String.new "happy"
my_string.reverse



class School
  # 1) attr_accessor
  attr_accessor :students, :teachers, :name

  # 2) initialize
  def initialize(name)
    @name = name
    @students = []
    @teachers = []
  end

  # Instance methods
  # def students
  #   @students
  # end

  # Class methods (we haven't done these... yet)
  # School.my_class_method
  # def self.my_class_method #Not an instance method
  # end

  # These are special, ignore them for now
  protected
  private
end

# Creates a new school
# my_school = School.new
# my_school.students.class # => "Array"

class Human
  attr_accessor :name

  def initialize(name, age)
    @name = name
  end
end
# Will yield an error of 0 for 2 arguments
# new_human = Human.new

# Will create a new human
# new_human = Human.new "David", 32
# new_human.name # Returns the name
# new_human.name = "Alan"

# Student inherits all attributes and methods from Human
class Student < Human
  attr_accessor :gpa

  # Overloads initialize method from Human with a new one
  def initialize(name, age, gpa)
    # super calls the initialize method of parent class
    super(name, age) # needs to be one first line of initialize
    @gpa = gpa
  end
end

class Teacher < Human
  attr_accessor :students
  def initialize(name, age, salary)
    super(name, age)
    @salary = salary
  end
end

my_school = School.new("General Assembly")
my_school.students << Student.new("Sam", 14, 3.0)
my_school.teachers << Teacher.new("Kelly", 30, 30000)

puts my_school.students[0].name
puts my_school.teachers.first.name
