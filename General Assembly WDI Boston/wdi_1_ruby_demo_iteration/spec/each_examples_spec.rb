require_relative '../lib/each_examples'

RSpec.describe "double_elements_with_each" do
  it 'doubles elements in the collection' do
    collection = [2, 4, 6, 8]
    expect(double_elements_with_each(collection)).to eq ([4, 8, 12, 16])
  end
end

RSpec.describe "reverse_elements" do
  it 'doubles elements in the collection, just as the above' do
    collection = ['foo', 'bar', 'baz']
    expect(reverse_elements(collection)).to eq (["oof", "rab", "zab"])
  end
end
