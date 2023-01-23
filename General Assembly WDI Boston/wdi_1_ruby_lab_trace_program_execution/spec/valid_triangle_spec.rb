require_relative '../lib/triangle'

RSpec.describe "valid_triangle?" do
  it 'returns true for triangles with valid side lengths' do
    expect(valid_triangle?(10, 10, 10)).to be true
    expect(valid_triangle?(2, 3, 4)).to be true
  end

  it 'returns false for invalid triangles' do
    expect(valid_triangle?(1, 1, 4)).to be false
    expect(valid_triangle?(5, 10, 20)).to be false
  end
end
