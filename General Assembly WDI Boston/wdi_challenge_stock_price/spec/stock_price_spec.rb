require 'spec_helper'
require_relative '../lib/stock_price'

RSpec.describe 'Best Stock Price From Array' do

  describe 'Write an efficient algorithm for computing the best profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.' do
    let(:stock_prices_yesterday){ [490,489,487,488,475,489,450,490,491,492,493,494,497,500,467,490,504,506,508,497,499,520,534,576,587,599,620,602,604,603,587,596,595,593,591,540]}
    it 'returns a number' do
      expect(get_best_profit(stock_prices_yesterday)).to eq 170
    end
  end
end