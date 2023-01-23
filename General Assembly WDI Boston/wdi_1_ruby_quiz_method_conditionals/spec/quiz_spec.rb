require_relative 'spec_helper'
require_relative '../quiz'

describe "Square" do
  it "should have a method defined named square" do
    expect(method(:square))
  end

  it "should have one parameter called x" do
    parameters = method(:square).parameters.first
    expect(parameters).to include(:x)
  end

  it "should square input numbers" do
    expect(square 2).to be 4
    expect(square 1).to be 1
    expect(square -2).to be 4
  end
end

describe "to_bool" do
  it "should have a method defined named to_bool" do
    expect(method(:to_bool))
  end

  it "should have one parameter called questionable_string" do
    parameters = method(:to_bool).parameters.first
    expect(parameters).to include(:questionable_string)
  end

  it "should return true for a string with the text of true" do
    expect(to_bool "true").to eq true
  end

  it "should return false for a string with other values" do
    expect(to_bool "false").to eq false
    expect(to_bool "something else").to eq false
    expect(to_bool 1).to eq false
  end
end

describe "is_prime" do
  it "should have a method defined named is_prime" do
    expect(method(:is_prime))
  end

  it "should have one parameter called x" do
    parameters = method(:is_prime).parameters.first
    expect(parameters).to include(:x)
  end

  it "should return true for prime numbers" do
    expect(is_prime 3).to be true
    expect(is_prime 5).to be true
    expect(is_prime 7).to be true
    expect(is_prime 11).to be true
    expect(is_prime 13).to be true
    expect(is_prime 17).to be true
    expect(is_prime 19).to be true
    expect(is_prime 23).to be true
    expect(is_prime 29).to be true
    expect(is_prime 31).to be true
    expect(is_prime 37).to be true
    expect(is_prime 41).to be true
    expect(is_prime 43).to be true
    expect(is_prime 47).to be true
  end

  it "should return false for all other numbers" do
    expect(is_prime 4).to be false
    expect(is_prime 10).to be false
    expect(is_prime 100).to be false
    expect(is_prime 1000).to be false
  end
end
