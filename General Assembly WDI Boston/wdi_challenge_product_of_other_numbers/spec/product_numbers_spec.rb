require 'spec_helper'
require_relative '../lib/product_of_other_numbers'

RSpec.describe 'Product of all ints except at index' do

  let(:array_of_ints){[1,2,6,5,9]}
  let(:array_of_ints_2){[1,7,3,4]}

  describe '#get_products_of_all_ints_except_at_index' do
    it 'find the product of every integer except the integer at that index' do
      expect(get_products_of_all_ints_except_at_index(array_of_ints)).to eq [540,270,90,108,60]
      expect(get_products_of_all_ints_except_at_index(array_of_ints_2)).to eq [84,12,28,21]
    end
  end
end