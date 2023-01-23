# .______       _______ .___  ___.      ___       __  .__   __.      ______     ___       __      .___  ___.
# |   _  \     |   ____||   \/   |     /   \     |  | |  \ |  |     /      |   /   \     |  |     |   \/   |
# |  |_)  |    |  |__   |  \  /  |    /  ^  \    |  | |   \|  |    |  ,----'  /  ^  \    |  |     |  \  /  |
# |      /     |   __|  |  |\/|  |   /  /_\  \   |  | |  . `  |    |  |      /  /_\  \   |  |     |  |\/|  |
# |  |\  \----.|  |____ |  |  |  |  /  _____  \  |  | |  |\   |    |  `----./  _____  \  |  `----.|  |  |  |  __
# | _| `._____||_______||__|  |__| /__/     \__\ |__| |__| \__|     \______/__/     \__\ |_______||__|  |__| (__)

require 'spec_helper'
require_relative '../lib/assessment.rb'

RSpec.describe '#greet will throw an error. Fix it so it doesn''t error out.' do
  it 'It returns a string of "Hello" + the string passed into it' do
    expect(greet(" Jason")).to eq "Hello Jason"
    expect(greet("...is it me you're looking for?")).to eq "Hello...is it me you're looking for?"
    p greet(" Jason")
    p greet("...is it me you're looking for?")
  end
end

RSpec.describe 'Write a method called #find_index_of_array. It will take two parameters: an array and the value to find the index.' do
  it 'It should have a method defined named find_index_of_array' do
    expect(method(:find_index_of_array))
  end
  it 'should have a parameter called operator' do
    parameters = method(:find_index_of_array).parameters
    expect(parameters[0]).to include(:array)
  end
  it 'returns the Fixnum index value for the item in an array' do
    expect(find_index_of_array(["Smells Like Teen Spirit","In Bloom","Come As You Are","Breed","Lithium","Polly","Territorial Pissings","Drain You","Lounge Act","Stay Away","On A Plain","Something In The Way"],"Polly")).to eq 5
  end
end

RSpec.describe 'Write a method called #append_to_array. It will take 3 parameters: an array, an item to add, and the index to insert the new item' do
  it 'It should have a method defined named append_to_array' do
    expect(method(:append_to_array))
  end
  it 'should have a parameter called array' do
    parameters = method(:append_to_array).parameters
    expect(parameters[0]).to include(:array)
  end
  it 'adds the value to the array at the given index and returns the new array' do
    expect(append_to_array(["Uptown Funk","Thinking Out Loud","Blank Space","Lips Are Movin","Centuries","Take Me To Church","Homegrown","Heartbeat Song","All About That Bass"],"Habits",0)).to eq ["Habits","Uptown Funk","Thinking Out Loud","Blank Space","Lips Are Movin","Centuries","Take Me To Church","Homegrown","Heartbeat Song","All About That Bass"]
  end
end