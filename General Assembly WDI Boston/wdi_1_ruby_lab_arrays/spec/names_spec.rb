require_relative '../lib/names'

RSpec.describe '#name_formatter' do
  it 'Removes the word bartholomew, and capitalizes all names' do
    original_name = 'sean ian michael segfault bartholomew joke-explainer jones'
    expected_name = 'Sean Ian Michael Segfault Joke-explainer Jones'
    expect(name_formatter(original_name)).to eq expected_name
  end
end
