require_relative '../lib/double_me'

RSpec.describe "#double_me" do
  it "doubles a number" do
    expect(double_me(2)).to eq(4)
    expect(double_me(10)).to eq(20)
    expect(double_me(-10)).to eq(-20)
  end
end
