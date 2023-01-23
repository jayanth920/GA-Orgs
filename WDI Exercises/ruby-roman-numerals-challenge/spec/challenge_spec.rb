require_relative '../lib/challenge.rb'

RSpec.describe 'Challenge: ' do

  describe '#to_roman' do
    it 'produces single-character Roman Numerals' do
      [1, 5, 10, 50, 100, 500, 1000]
      .zip(['I', 'V', 'X', 'L', 'C', 'D', 'M'])
      .each do | arabic, roman |
        expect(to_roman(arabic)).to eq(roman);
      end
    end

    it 'produces multi-character, non-subtractive Roman Numerals' do
      [15, 6, 123, 71]
      .zip(['XV', 'VI', 'CXXIII', 'LXXI'])
      .each do | arabic, roman |
        expect(to_roman(arabic)).to eq(roman);
      end
    end

    it 'produces subtractive roman numerals' do
      [4, 9, 99, 405]
      .zip(['IV', 'IX', 'XCIX', 'CDV'])
      .each do | arabic, roman |
        expect(to_roman(arabic)).to eq(roman);
      end
    end

    context 'for edge cases:' do
      it 'returns an empty string when given a 0' do
        expect(to_roman(0)).to eq('')
      end

      it 'rounds a decimal to the nearest whole number' do
        [0.3, 1.1, 2.4, 4.9]
        .zip(['', 'I', 'II', 'V'])
        .each do | arabic, roman |
          expect(to_roman(arabic)).to eq(roman)
        end
      end

      it 'returns nil for negative numbers and non-numbers' do
        [-1, -0.5, "3", nil].each do | bad_input |
          expect(to_roman(bad_input)).to be_nil;
        end
      end
    end
  end

  describe '#to_arabic' do
    it 'converts single-character Roman numerals into arabic numbers' do
      ['I', 'V', 'X', 'L', 'C', 'D', 'M']
      .zip([1, 5, 10, 50, 100, 500, 1000])
      .each do | roman, arabic |
        expect(to_arabic(roman)).to eql(arabic);
      end
    end

    it 'converts multi-character, non-subtractive Roman Numerals into arabic numbers' do
      ['XV', 'VI', 'CXXIII', 'LXXI']
      .zip([15, 6, 123, 71])
      .each do | roman, arabic |
        expect(to_arabic(roman)).to eql(arabic);
      end
    end

    it 'converts subtractive Roman Numerals into arabic numbers' do
      ['IV', 'IX', 'XCIX', 'CDV']
      .zip([4, 9, 99, 405])
      .each do | roman, arabic |
        expect(to_arabic(roman)).to eql(arabic);
      end
    end

    context 'for edge cases' do
      it 'returns a 0 when given an empty string' do
        expect(to_roman(0)).to eq('')
      end

      it 'returns nil for improper roman numerals and non-strings' do
        ["", "IIII", "IM", "VL", 9, "9", nil].each do | bad_input |
          expect(to_arabic(bad_input)).to be_nil;
        end
      end
    end
  end
end
