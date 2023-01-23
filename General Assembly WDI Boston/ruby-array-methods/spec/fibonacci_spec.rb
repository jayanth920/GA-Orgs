# frozen_string_literal: true

require 'spec_helper'

describe 'fibonacci.rb' do
  require_relative('../lib/fibonacci.rb')

  let(:fibs) { [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] }

  describe '#product_of_elements' do
    it 'calculates the product of elements within fibs, excluding 0' do
      expect(product_of_elements(fibs)).to eq 2_227_680
    end
  end

  describe '#sum_of_odd_elements' do
    it 'sums the odd elements within fibs' do
      expect(sum_of_odd_elements(fibs)).to eq 44
    end
  end

  describe '#product_of_even_elements' do
    it 'calculates the product of even elements within fibs' do
      expect(product_of_even_elements(fibs)).to eq 544
    end
  end
end
