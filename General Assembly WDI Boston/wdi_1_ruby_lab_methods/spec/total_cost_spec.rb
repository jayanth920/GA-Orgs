require_relative '../lib/total_cost'

RSpec.describe '#total_cost' do
  it 'calculates the total cost with various optional arguments' do
    expect(total_cost(price: 10.00)).to eq 13.49
    expect(total_cost(price: 10.00, discount: 2.00)).to eq 11.49
    expect(total_cost(price: 10.00, tax_rate: 0)).to eq 12.99
    expect(total_cost(price: 10.00, tax_rate: 0, discount: 1.00)).to eq 11.99
    expect(total_cost(price: 10.00, shipping_fee: 5.99)).to be_within(0.01).of 16.49
  end
end
