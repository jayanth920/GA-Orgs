# frozen_string_literal: true

require 'date'

# a class representing people and related data
class Person
  def initialize(hsh)
    hsh.each_key do |key|
      instance_variable_set(('@' + key.to_s).to_sym, hsh[key])
      self.class.send(:attr_reader, key)
    end
  end

  def age
    dob = Date.parse(@dob)
    today = Date.today
    if dob.month > today.month ||
       dob.month == today.month && dob.day >= today.day
      today <<= 12 # one year younger
    end
    today.year - dob.year
  end
end
