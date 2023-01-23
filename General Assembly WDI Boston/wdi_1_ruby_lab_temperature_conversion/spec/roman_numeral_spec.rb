require './spec/spec_helper'
require_relative '../lib/roman_numeral_conversion'

RSpec.describe 'roman_numeral_converter' do
  it 'should convert roman numeral strings to Fixnums' do
    expect(roman_numeral_to_numbers("XXXVII")).to eq 37
    expect(roman_numeral_to_numbers("XL")).to eq 40
  end
end