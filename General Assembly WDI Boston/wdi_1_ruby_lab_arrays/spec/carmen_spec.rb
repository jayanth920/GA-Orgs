require_relative '../lib/carmen'

RSpec.describe '#carmen' do
  it 'returns the position of the element \'carmen\' in the array' do
    expect(carmen(['chris', 'kim', 'carmen'])).to eq 2
    expect(carmen(['linn', 'carmen', 'sandy', 'bob'])).to eq 1
    expect(carmen(['carmen', 'fae', 'mel', 'alice'])).to eq 0
  end
end
