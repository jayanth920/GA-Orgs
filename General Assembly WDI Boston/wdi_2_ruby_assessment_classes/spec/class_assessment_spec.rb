# .______       _______ .___  ___.      ___       __  .__   __.      ______     ___       __      .___  ___.
# |   _  \     |   ____||   \/   |     /   \     |  | |  \ |  |     /      |   /   \     |  |     |   \/   |
# |  |_)  |    |  |__   |  \  /  |    /  ^  \    |  | |   \|  |    |  ,----'  /  ^  \    |  |     |  \  /  |
# |      /     |   __|  |  |\/|  |   /  /_\  \   |  | |  . `  |    |  |      /  /_\  \   |  |     |  |\/|  |
# |  |\  \----.|  |____ |  |  |  |  /  _____  \  |  | |  |\   |    |  `----./  _____  \  |  `----.|  |  |  |  __
# | _| `._____||_______||__|  |__| /__/     \__\ |__| |__| \__|     \______/__/     \__\ |_______||__|  |__| (__)


require 'spec_helper'
require 'pry'

require_relative '../lib/class_assessment'

describe Celsius do
  
  before(:all) do
    @temp1 = Celsius.new(0)
    @temp2 = Celsius.new(-24)
    @temp3 = Celsius.new(40)
    @temp4 = Celsius.new(53)
  end

  # write the initialization method to pass this expectation
  describe '#initialize' do
    it 'creates new instances of the class Celsius' do
      expect(@temp1.class).to eq Celsius
      expect(@temp2.class).to eq Celsius
      expect(@temp3.class).to eq Celsius
      expect(@temp4.class).to eq Celsius
    end
  end  
  
  # write a getter method for the instance's number to pass this expectation
  describe 'the instance getter method' do
    it 'gets the instance''s number through a getter method' do
      expect(@temp1.num).to eq 0
      expect(@temp2.num).to eq -24
      expect(@temp3.num).to eq 40
      expect(@temp4.num).to eq 53
    end
  end

  # Write an instance method for this class.
  # This method is called to_fahrenheit. It takes a temperature
  # in Celsius as an argument, and returns that temperature in Fahrenheit.
  # The formula is F = (C * 1.8) + 32
  describe '#to_fahrenheit' do
    it 'converts the instance number from Celsius and returns the number in Fahrenheit degrees' do
      expect(@temp1.to_fahrenheit).to eq 32
      expect(@temp2.to_fahrenheit).to be_within(0.1).of(-11.200000000000003)
      expect(@temp3.to_fahrenheit).to eq 104
      expect(@temp4.to_fahrenheit).to eq 127.4
    end
  end

  # Write another instance method for this class.
  # This method is called is_hot?. It takes a temperature
  # in Celsius as an argument. If the temperature is more than or equal
  # to 40, the method should return "It's hotter than a jalapeno!"
  # Otherwise, return "Seems perfectly fine to me."
  describe '#is_hot?' do
    it 'returns a string of "It''s hotter than a jalapeno!" if the instance number is equal to or over 40 Celsius. Otherwise it returns a string of "Seems perfectly fine to me."' do
      expect(@temp1.is_hot?).to eq "Seems perfectly fine to me."
      expect(@temp2.is_hot?).to eq "Seems perfectly fine to me."
      expect(@temp3.is_hot?).to eq "It's hotter than a jalapeno!"
      expect(@temp4.is_hot?).to eq "It's hotter than a jalapeno!"
      # p @temp4.is_hot?
      p @temp1.is_hot?
    end
  end

  # Write another instance method for this class.
  # This method is called report. It takes a temperature
  # in Celsius as an argument and returns a sentence with that
  # temperature in both formats, like:
  # "The temperature is 0 Celsius or 32 Fahrenheit."
  # This method should use the to_fahrenheit method that you wrote
  # in Question 2.
  describe '#report' do
    it 'takes a temperature in Celsius as an argument and returns a sentence with that temperature in both formats, like: "The temperature is 0 Celsius or 32 Fahrenheit."' do
      expect(@temp1.report).to eq "The temperature is 0 Celsius or 32.0 Fahrenheit."
      expect(@temp2.report).to eq "The temperature is -24 Celsius or -11.200000000000003 Fahrenheit."
      expect(@temp3.report).to eq "The temperature is 40 Celsius or 104.0 Fahrenheit."
      expect(@temp4.report).to eq "The temperature is 53 Celsius or 127.4 Fahrenheit."
    end
  end

end