# frozen_string_literal: true

require_relative '../lib/card.rb'

RSpec.describe 'Card class' do
  it 'has a RANKS constant array of the correct ranks' do
    expect(Card::RANKS).to eq [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']
  end

  it 'has a SUITS constant array of the correct suits' do
    expect(Card::SUITS).to eq %w[C D H S]
  end

  it 'includes the Comparable module' do
    expect(Card.included_modules.include?(Comparable)).to be true
  end

  it 'does not allow for creation of a Card with incorrect suit' do
    expect { Card.new(3, 'G') }.to raise_error(ArgumentError)
  end

  it 'does not allow for creation of a Card with incorrect rank' do
    expect { Card.new('R', 'H') }.to raise_error(ArgumentError)
  end

  it 'allows two instances of the Card class to be compared to each other' do
    card_one = Card.new(3, 'S')
    card_two = Card.new(5, 'S')
    card_three = Card.new(10, 'H')
    card_four = Card.new(10, 'D')
    card_five = Card.new(9, 'D')

    expect(card_one.methods.include?(:<=>)).to be true
    expect(card_one < card_two).to be true
    expect(card_three < card_one).to be true
    expect(card_five > card_four).to be false
    expect(card_three > card_four).to be true
  end
end
