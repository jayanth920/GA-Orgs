require_relative '../lib/map_examples'

RSpec.describe "double_elements_with_map" do
  it 'doubles elements in the collection' do
    collection = [2, 4, 6, 8]
    expect(double_elements_with_map(collection)).to eq ([4, 8, 12, 16])
  end
end

RSpec.describe "double_elements_with_map_shorter" do
  it 'doubles elements in the collection, just as the above' do
    collection = [2, 4, 6, 8]
    expect(double_elements_with_map_shorter(collection)).to eq ([4, 8, 12, 16])
  end
end

RSpec.describe "reverse_and_upcase" do
  it 'doubles elements in the collection, just as the above' do
    collection = ['foo', 'bar', 'baz']
    expect(reverse_and_upcase(collection)).to eq (['OOF', 'RAB', 'ZAB'])
  end
end
