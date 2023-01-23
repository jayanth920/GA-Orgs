require './spec/spec_helper'
require_relative '../lib/fibonacci'

RSpec.describe "fibonacci_numbers" do
  it 'returns the nth term of the fibonacci sequence' do
    expect(fibonacci_numbers(10)).to eq 55
  end
end