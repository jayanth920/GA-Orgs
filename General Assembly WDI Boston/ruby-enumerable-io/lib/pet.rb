# frozen_string_literal: true

require 'date'

#
class Pet
  attr_reader :dob, :kind, :name

  def initialize(pet_data)
    @dob = pet_data[:dob]
    @kind = pet_data[:kind]
    @name = pet_data[:name]
  end

  def age
    born_on = Date.parse(@dob)
    today = Date.today
    if born_on.month > today.month ||
       born_on.month == today.month && born_on.day >= today.day
      today <<= 12 # one year younger
    end
    today.year - born_on.year
  end
end
