require_relative '../lib/levenshtein_distance'

RSpec.describe '#levenshtein_distance' do
  it 'returns the difference between two strings' do
    expect(levenshtein_distance('apple', 'apples')).to be 1
    expect(levenshtein_distance('bob', 'bobby')).to be 2
    expect(levenshtein_distance('kitten', 'sitting')).to be 3
    expect(levenshtein_distance('made', 'faded')).to be 2
  end
end
