class Hand
  attr_reader :cards

  def initialize
    @cards = []
  end

  def push(card)
    @cards << card
  end

  def total
    @cards.map {|card| Card::RANKS[card.rank] }.inject(:+)
  end
end
