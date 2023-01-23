require_relative '../lib/hamming_distance'

RSpec.describe '#hamming_distance' do
  it 'returns the difference between two strings' do
    expect(hamming_distance('bob', 'boy')).to be 1
    expect(hamming_distance('accaa', 'abaaa')).to be 2
    expect(hamming_distance('cat', 'dog')).to be 3
    expect(hamming_distance('apple', 'abaaa')).to be 4
    expect(hamming_distance('david', 'frank')).to be 5
  end

  it 'raises an error when strings are of unequal length' do
    expect {hamming_distance('a', 'bc')}.to raise_error(StringsUnequalLength)
  end
end
