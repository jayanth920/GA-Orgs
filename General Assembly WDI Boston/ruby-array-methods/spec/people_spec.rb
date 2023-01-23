# frozen_string_literal: true

require 'spec_helper'

describe 'People' do
  require('./lib/people.rb')

  let(:people) do
    people = []
    CSV.foreach('data/people.csv',
                headers: true,
                header_converters: ->(h) { h.downcase.to_sym }) do |person|
                  people << Person.new(person.to_hash)
                end
    people
  end

  it 'collects Person objects from data/people.csv' do
    expect(people.count).to eq 2438
  end

  it 'contains an array of Person objects' do
    expect(people.sample).to be_an_instance_of Person
  end

  describe 'people_older_than(age)' do
    it 'returns the count of people older than (age)' do
      people_older_than_twenty_five = people.select do |person|
        person.age > 25
      end
      expect(people_older_than(people, 25)).to eq people_older_than_twenty_five.count
    end
  end

  describe 'people_younger_than(age)' do
    it 'returns the count of people older than (age)' do
      people_younger_than_twenty_five = people.select do |person|
        person.age < 25
      end
      expect(people_younger_than(people, 25)).to eq people_younger_than_twenty_five.count
    end
  end

  describe 'people_with_same_first_last_start_letter' do
    it 'returns count of people with same first and last name start letter' do
      expect(people_with_same_first_last_start_letter(people)).to eq 127
    end
  end

  describe 'average_age' do
    it 'returns average age of people' do
      expect(average_age(people)).to eq 39
    end
  end
end
