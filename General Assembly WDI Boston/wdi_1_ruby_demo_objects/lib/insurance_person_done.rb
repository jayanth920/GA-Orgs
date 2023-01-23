require_relative 'person'

# This class is a subclass, child, of Person class
class InsurancePerson < Person

  AVG_LIFESPAN = 79
  MIN_YTL  = 20

  # class variable 
  @shared_ins_id = 353

  # class method

  # getter for a class variable
  def self.shared_ins_id
    @shared_ins_id
  end

  # self indicates that this is a class method
  # I can call it like InsurancePerson.gen_ins_id
  def self.gen_ins_id
    @shared_ins_id += 1
  end

  attr_reader :dob, :ins_id
  attr_accessor :married, :smoke_cigarettes

  def initialize(fname, lname, dob_str, married = false)
    # Invoke/Call the initialize method of the parent class
    super(fname, lname)

    # Generate a new id and assign it to this @ins_id instance variable
    @ins_id = InsurancePerson.gen_ins_id

    # Convert the dob_str to a Date object
    @dob = DateTime.strptime(dob_str, '%m-%d-%Y').to_date

    @married = married
  end

  def age
    now = Date.today
    now.year - dob.year - ((now.strftime('%m%d').to_i - dob.strftime('%m%d').to_i) ? 1 : 0)
  end

  def is_insurable?
    years_to_live > MIN_YTL
  end

  # Ruby keyword that will make all subsequent method hidden
  # outside this class. But, subclasses can use these methods 
  # internally
  protected

  # Ruby keyword that will make all subsequent method hidden
  # outside this class.
  private
  
  def years_to_live
    AVG_LIFESPAN - age + (married ? 5 : 0)  - (smoke_cigarettes ? 7 : 0)
  end

end