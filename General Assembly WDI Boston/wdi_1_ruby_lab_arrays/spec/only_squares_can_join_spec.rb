require_relative '../lib/only_squares_can_join'

RSpec.describe '#only_squares_can_join' do
  it 'Takes an array of numbers, and one or more Fixnums.
      Returns array of original array and new elements, but only if the new numbers are square' do

    expect(only_squares_can_join([4, 16], 9)).to eq ([4, 16, 9])
    expect(only_squares_can_join([25], 25)).to eq ([25, 25])
    expect(only_squares_can_join([4], 9, 64, 10)).to eq ([4, 9, 64])
  end
end
