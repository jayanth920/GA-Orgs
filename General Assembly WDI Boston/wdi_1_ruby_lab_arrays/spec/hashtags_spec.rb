require_relative '../lib/hashtags'

RSpec.describe '#name_formatter' do
  it 'returns an array of words greater than 3 characters, with a # at the beginning of each word' do
    original_tweet = 'We ate fifty cheeseburgers for lunch'
    hashtags = ['#fifty', '#cheeseburgers', '#lunch']
    expect(hashtags(original_tweet)).to eq hashtags
  end
end
