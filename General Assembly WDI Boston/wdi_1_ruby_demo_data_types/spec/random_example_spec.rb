# http://www.ruby-doc.org/core-2.2.0/Random.html
RSpec.describe Random do
  it 'Returns a Float between 0 and 1 by default' do
    expect(Random.rand).to be_a Float
  end

  it 'returns a number within a range as an argument' do
    expect(Random.rand(1..10)).to be_a Fixnum
    expect(Random.rand(1.0..10.0)).to be_a Float
  end
end
