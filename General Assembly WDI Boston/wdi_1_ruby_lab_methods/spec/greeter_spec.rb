require_relative '../lib/greeter'

RSpec.describe '#greeter' do
  it 'returns a string of hello world when called without arguments' do
    expect(greet()).to eq 'Hello, World!'
  end

  it 'returns a string using a name when called with one argument' do
    expect(greet('Kelly')).to eq 'Hello, Kelly!'
    expect(greet('Chris')).to eq 'Hello, Chris!'
    expect(greet('Kim')).to eq 'Hello, Kim!'
  end
end
