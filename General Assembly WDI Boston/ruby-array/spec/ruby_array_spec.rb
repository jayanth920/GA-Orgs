# frozen_string_literal: true

require_relative '../lib/code_along.rb'
require_relative '../lib/lab.rb'

RSpec.describe 'Code Along' do
  it 'literal array is an empty array' do
    expect(LITERAL_ARRAY).to be_a(Array)
    expect(LITERAL_ARRAY.length).to eq(0)
  end

  it 'constructor array is an array with length 5' do
    expect(CONSTRUCTOR_ARRAY).to be_a(Array)
    expect(CONSTRUCTOR_ARRAY.length).to eq(5)
  end

  it 'ten_false_array is an array with size 10, filled with `false`' do
    expect(TEN_FALSE_ARRAY).to eq Array.new(10, false)
  end
end

RSpec.describe 'Lab' do
  it 'equals the array after the various lab tasks are complete' do
    expect(WORKING_ARRAY)
    .to eq [0, 1, 1, 2, 3, 5, 8, [-12, -49], 21, 34, 55, 20]
  end

  context 'lab bonus' do
    it 'is the correct BONUS_ARRAY' do
      expect(BONUS_ARRAY).to eq [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]
    end
  end
end
