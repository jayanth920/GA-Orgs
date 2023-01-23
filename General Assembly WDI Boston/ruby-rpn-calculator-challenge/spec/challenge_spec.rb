# frozen_string_literal: true
require_relative '../lib/challenge.rb'

RSpec.describe 'Challenge: ' do
  describe '#calc' do
    it 'can perform addition' do
      expect(calc('1 2 +')).to eq(3)
      expect(calc('12 25 +')).to eq(37)
    end
    it 'can perform subtraction' do
      expect(calc('3 2 -')).to eq(1)
      expect(calc('5 10 -')).to eq(-5)
    end
    it 'can perform multiplication' do
      expect(calc('0 100 *')).to eq(0)
      expect(calc('1 50 *')).to eq(50)
      expect(calc('2 2 *')).to eq(4)
    end
    it 'can perform division' do
      expect(calc('5 1 /')).to eq(5)
      expect(calc('10 2 /')).to eq(5)
      expect(calc('15 3 /')).to eq(5)
    end
    it 'can handle both floating point numbers and integers' do
      expect(calc('5 2.0 /')).to eq(2.5)
      expect(calc('100.0 2 *')).to eq(200.0)
      expect(calc('15 3.0 +')).to eq(18.0)
    end
    it 'should evaluate expressions with more than one operation' do
      expect(calc('5 3 2 * + 4 3 * -')).to eq(-1)
      # 5 + 3 * 2 - 4 * 3
      expect(calc('9 10 * 2 / 6 4 1 - * -')).to eq(27)
      # 9 * 10 / 2 - 6 * (4 - 1)
    end

    context 'given an empty expression' do
      it 'evaluates to zero' do
        expect(calc('')).to eq(0)
      end
    end
  end
end
