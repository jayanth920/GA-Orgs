# frozen_string_literal: true

require_relative '../lib/deck.rb'

RSpec.describe 'Deck class' do
  it 'includes the Enumerable module' do
    expect(Deck.included_modules.include?(Enumerable)).to be true
  end

  it "has an 'each' method defined" do
    expect(Deck.method_defined?(:each)).to be true
  end

  it "provides a 'deal' method that deals out hands of Cards" do
    new_deck = Deck.new
    hand_one = []
    hand_two = []
    expect(Deck.method_defined?(:deal)).to be true
    new_deck.deal(3, hand_one, hand_two)
    expect(hand_one[0].class).to eq(Card)
  end

  it "doesn't allow for '.storage' to be invoked from outside the class" do
    newer_deck = Deck.new
    expect { newer_deck.storage }.to raise_error(NoMethodError)
  end
end
