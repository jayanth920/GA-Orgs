require 'spec_helper'
require_relative '../lib/bonus.rb'

RSpec.describe '#calculate takes three string parameters: Num1, Num2, Operator. Make it work.' do
  it 'It should have a method defined named calculate' do
    expect(method(:calculate))
  end
  it 'should have a parameter called operator' do
    parameters = method(:calculate).parameters
    expect(parameters[-1]).to include(:operator)
  end
  it '#calculate should return the sum/difference/product/quotient of the numbers' do
    expect(calculate("10","10","+")).to eq 20
    expect(calculate("20", "293","*")).to eq 5860
    expect(calculate("12","4","/")).to eq 3
    expect(calculate("12","4","%")).to eq 0
    expect(calculate("349582039","2984357","-")).to eq 346597682
  end
end

RSpec.describe "#spiral" do
  let(:small_spiral) do
    [[1,2,3],
     [8,9,4],
     [7,6,5]]
  end

  let(:big_spiral) do
    [[1,2,3,4],
     [5,9,4,2],
     [7,6,5,9],
     [9,4,2,0],
     [4,5,1,2]]
  end

  it "should have a method defined named spiral" do
    expect(method(:spiral))
  end

  it "should have one parameter called two_d_array" do
    parameters = method(:spiral).parameters
    expect(parameters[0]).to include(:two_d_array)
  end

  it "should return an array of the spiral unwrapped" do
    expect(spiral [[]]).to eq []
    expect(spiral [[1]]).to eq [1]
    expect(spiral(small_spiral)).to eq [1,2,3,4,5,6,7,8,9]
    expect(spiral(big_spiral)).to eq [1,2,3,4,2,9,0,2,1,5,4,9,7,5,9,4,5,2,4,6]
  end
end
