class Deck
  attr_reader :cards

  def initialize
    @cards = all_cards.flatten.shuffle
  end

  def to_s
    @cards
  end

  def pop
    @cards.pop
  end

  private

  def all_cards
    Card::SUITS.map do |suit|
      Card::RANKS.keys.map do |rank|
        Card.new(rank: rank, suit: suit)
      end
    end
  end
end
