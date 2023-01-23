require 'rails_helper'

RSpec.describe Guitar, type: :model do
  # QUESTION 1:
  # Create a migration to add a new table called guitars
  # This table should have the following columns (name/type):
  # make - String
  # model - String
  # price - Decimal
  context 'Once you have created a migration' do
    it 'the guitars migration should exist' do
      a_guitar = Guitar.create(make: 'Fender', model: 'Jazzmaster', price: 1599.99)
      expect(a_guitar).to be_a Guitar
      expect(a_guitar).to respond_to(:make)
      expect(a_guitar).to respond_to(:model)
      expect(a_guitar).to respond_to(:price)
    end
  end

  # QUESTION 2:
  # You should write the SQL to solve this in:
  # app/models/guitar.rb
  # in the self.fender_guitars method
  # That method should return a string of raw SQL, no ActiveRecord!
  describe '#fender_guitars' do
    before(:each) do
      @guitar_one = Guitar.create!(make: 'Fender')
      @guitar_two = Guitar.create!(make: 'Fender')
      @gibson_guitar = Guitar.create!(make: 'Gibson')
    end

    it 'returns SQL that when executed will return all Fender guitars' do
      guitars = Guitar.find_by_sql Guitar.fender_guitars
      expect(guitars.count).to be 2
      expect(guitars.first).to be_a Guitar
      expect(guitars.first).to eq @guitar_one
    end
  end
end
