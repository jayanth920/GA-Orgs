require_relative '../lib/only_primes'

RSpec.describe '#cube_numbers' do
  it 'returns only the numbers that are prime from the original array' do
    expect(only_primes([1, 2, 3])).to eq ([2, 3])
    expect(only_primes([3, 4])).to eq ([3])
    expect(only_primes([10, 11, 12])).to eq ([11])
  end
end
