# frozen_string_literal: true

require_relative '../lib/challenge.rb'

array = (0...10).to_a

is_even = ->(n) { n.even? }
is_one = ->(n) { n == 1 }
is_less_than_ten = ->(n) { n < 10 }
is_greater_than_ten = ->(n) { n > 10 }

predicates = [is_even, is_one, is_less_than_ten, is_greater_than_ten]

RSpec.describe 'Requirements' do
  context '#any' do
    it 'returns false if the array is empty' do
      predicates.each do |predicate|
        expect(any?([], &predicate)).to eq(false)
      end
    end

    it 'returns false if no elements match' do
      expect(any?(array, &is_greater_than_ten)).to eq(false)
    end

    it 'returns true if more than one element matches' do
      expect(any?(array, &is_even)).to eq(true)
    end

    it 'returns true if all elements match' do
      expect(any?(array, &is_less_than_ten)).to eq(true)
    end
  end

  context '#none' do
    it 'returns true if the array is empty' do
      predicates.each do |predicate|
        expect(none?([], &predicate)).to eq(true)
      end
    end

    it 'returns true if no elements match' do
      expect(none?(array, &is_greater_than_ten)).to eq(true)
    end

    it 'returns false if more than one element matches' do
      expect(none?(array, &is_even)).to eq(false)
    end

    it 'returns false if all elements match' do
      expect(none?(array, &is_less_than_ten)).to eq(false)
    end
  end
end

RSpec.describe 'Bonuses' do
  context '#one' do
    it 'returns false if the array is empty' do
      predicates.each do |predicate|
        expect(one?([], &predicate)).to eq(false)
      end
    end

    it 'returns false if no elements match' do
      expect(one?(array, &is_greater_than_ten)).to eq(false)
    end

    it 'returns true if exactly one element matches' do
      expect(one?(array, &is_one)).to eq(true)
    end

    it 'returns false if more than one element matches' do
      expect(one?(array, &is_even)).to eq(false)
    end

    it 'returns false if all elements match' do
      expect(one?(array, &is_less_than_ten)).to eq(false)
    end
  end

  context '#all' do
    it 'returns true if the array is empty' do
      predicates.each do |predicate|
        expect(all?([], &predicate)).to eq(true)
      end
    end

    it 'returns false if no elements match' do
      expect(all?(array, &is_greater_than_ten)).to eq(false)
    end

    it 'returns false if more than one element matches' do
      expect(all?(array, &is_even)).to eq(false)
    end

    it 'returns true if all elements match' do
      expect(all?(array, &is_less_than_ten)).to eq(true)
    end
  end
end
