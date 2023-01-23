# frozen_string_literal: true

require_relative '../lib/fizzbuzz.rb'

def transform_keys_to_symbols(hash)
  key_value_arr = hash.map do |k, v|
    [k.to_sym, v]
  end
  Hash[key_value_arr]
end

RSpec.describe 'fizzbuzz_hash method' do
  it 'returns a hash' do
    result = fizzbuzz_hash(1)
    expect(result).to be_kind_of(Hash)
  end
  it "should add values divisible by 3 to 'fizz' array on hash" do
    result = fizzbuzz_hash(3)
    symbol_key_hash = transform_keys_to_symbols(result)
    expect(symbol_key_hash).to include(fizz: [3])
  end

  it "should add values divisible by 5 to 'buzz' array on hash" do
    result = fizzbuzz_hash(5)
    symbol_key_hash = transform_keys_to_symbols(result)
    expect(symbol_key_hash).to include(buzz: [5])
  end

  it "should add values divisible by 3 and 5 to 'fizzbuzz' array on hash" do
    result = fizzbuzz_hash(15)
    symbol_key_hash = transform_keys_to_symbols(result)
    expect(symbol_key_hash).to include(fizzbuzz: [15])
  end

  it "should add values not divisble by 3 or 5 to 'other' array on hash" do
    result = fizzbuzz_hash(3)
    symbol_key_hash = transform_keys_to_symbols(result)
    expect(symbol_key_hash).to include(other: [1, 2])
  end
end
