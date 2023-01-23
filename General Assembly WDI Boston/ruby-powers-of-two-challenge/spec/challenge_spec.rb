require_relative '../lib/challenge.rb'

RSpec.describe 'Challenge: ' do
  describe '#power_of_two?' do
    context 'for numbers greater then or equal to 2^1' do
      it 'returns true for positive powers of two, such as 2^2' do
        expect(power_of_two?(2)).to be(true)       # 2^1
        expect(power_of_two?(4)).to be(true)       # 2^2
        expect(power_of_two?(8)).to be(true)       # 2^3
        expect(power_of_two?(1_024)).to be(true)    # 2^10
        expect(power_of_two?(4_096)).to be(true)    # 2^14
        expect(power_of_two?(1_048_576)).to be(true) # 2^20
      end
      it 'returns false when the number is not a positive power of two' do
        expect(power_of_two?(3)).to be(false)
        expect(power_of_two?(10.5)).to be(false)
        expect(power_of_two?(20)).to be(false)
        expect(power_of_two?(200)).to be(false)
      end
    end
    xcontext 'for numbers less than 2^1' do
      it 'returns true for negative powers of two, such as 2^(-2)' do
        expect(power_of_two?(0.5)).to be(true)             # 2^(-1)
        expect(power_of_two?(0.25)).to be(true)            # 2^(-2)
        expect(power_of_two?(0.125)).to be(true)           # 2^(-3)
        expect(power_of_two?(0.0009765625)).to be(true)    # 2^(-10)
      end
      it 'returns true when the number is equal to 2^0' do
        expect(power_of_two?(1)).to be(true)
      end
      it 'returns false otherwise' do
        expect(power_of_two?(0)).to be(false)
        expect(power_of_two?(0.36)).to be(false)
        expect(power_of_two?(0.9)).to be(false)
        expect(power_of_two?(-1)).to be(false)
        expect(power_of_two?(0.00025)).to be(false)
      end
    end
  end
end
