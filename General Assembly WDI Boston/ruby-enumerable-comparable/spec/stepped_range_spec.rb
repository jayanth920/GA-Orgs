# frozen_string_literal: true

require_relative '../lib/stepped_range.rb'

RSpec.describe 'SteppedRange class' do
  it 'includes the Enumerable module' do
    expect(SteppedRange.included_modules.include?(Enumerable)).to be true
  end

  it "has an 'each' method defined" do
    expect(SteppedRange.method_defined?(:each)).to be true
  end

  it 'steps through the range according to the arguments passed in' do
    new_range = SteppedRange.new(0, 10, 2)
    expect(new_range.map { |n| n }).to eq [0, 2, 4, 6, 8, 10]
  end
end
