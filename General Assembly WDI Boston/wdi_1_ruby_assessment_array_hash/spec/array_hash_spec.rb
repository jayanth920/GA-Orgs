require 'spec_helper'
require_relative '../lib/array_hash'

RSpec.describe 'append_to_array' do
  it 'inserts a new value at the end of the array without altering the original array' do
    expect(append_to_array('snake')).to eq ['cat','dog','snake']
    expect(append_to_array('monkey')).to eq ['cat','dog','monkey']
  end
end

RSpec.describe 'get_key_value' do
  it 'returns the value of the key' do
    expect(get_key_value(:age)).to eq 27
    expect(get_key_value(:name)).to eq "Chris"
  end
end

RSpec.describe 'add_key_value_pair' do
  it 'appends a key and value pair to the hash' do
    expect(add_key_value_pair(:hair_color, 'blue')).to eq({ name: "Chris", favorite_food: "Pizza", age: 27, hair_color: 'blue' })
    expect(add_key_value_pair(:favorite_color, 'purple')).to eq({ name: "Chris", favorite_food: "Pizza", age: 27, favorite_color: 'purple' })
  end
end

RSpec.describe 'find_index_of_array' do
  it 'returns the index of the item in the array' do
    expect(find_index_of_array('dog')).to eq 1
    expect(find_index_of_array('cat')).to eq 0
  end
end

RSpec.describe 'change_value_of_key' do
  it 'changes the value of the key in the hash' do
    expect(change_value_of_key(:favorite_food, 'sushi')).to eq({ name: "Chris", favorite_food: "sushi", age: 27 })
    expect(change_value_of_key(:name, 'David')).to eq({ name: "David", favorite_food: "Pizza", age: 27 })
  end
end
