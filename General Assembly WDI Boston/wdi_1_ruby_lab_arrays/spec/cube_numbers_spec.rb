require_relative '../lib/cube_numbers'

RSpec.describe '#cube_numbers' do
  it 'cubes each number in an array' do
    expect(cube_numbers([1, 2, 3])).to eq ([1, 8, 27])
    expect(cube_numbers([3, 4])).to eq ([27, 64])
  end
end
