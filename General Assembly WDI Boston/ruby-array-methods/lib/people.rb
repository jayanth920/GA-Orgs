# frozen_string_literal: true

require 'csv'
require_relative 'person.rb'

csv_people = []
CSV.foreach('data/people.csv',
            headers: true,
            header_converters: ->(h) { h.downcase.to_sym }) do |person|
              csv_people << Person.new(person.to_hash)
            end

def people_older_than(people, age)
  # your code here
end

def people_younger_than(people, age)
  # your code here
end

def people_with_same_first_last_start_letter(people)
  # your code here
end

def average_age(people)
  # your code here
end

# You can test your code like this:
puts people_older_than(csv_people, 30)
